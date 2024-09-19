@component
export class OpenAi extends BaseScriptComponent {
    @input openAIApiKey: string;

    @input
    rms: RemoteServiceModule;

    @input('Component.ScriptComponent')
    refScripts: any;

    @input('Component.ScriptComponent')
    vMLLScript: any;

    private req: RemoteServiceHttpRequest;
    private isRequestInProgress: boolean = false;
    private isTextToSpeechInProgress: boolean = false;

    onAwake() {
        this.req = RemoteServiceHttpRequest.create();
        this.req.method = RemoteServiceHttpRequest.HttpRequestMethod.Post;
        this.req.headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.openAIApiKey}`
        };

        print("OpenAI is awake");
    }

    resetTextToSpeech() {
        print("----------------------------")
        print("Resetting text to speech");
        print("----------------------------")
        this.isTextToSpeechInProgress = false;
        this.isRequestInProgress = false;
        this.vMLLScript.voiceStart();
    }
    
    callTextToSpeech(text: string, callback: () => void) {
        if (this.isTextToSpeechInProgress) {
            print("Text to speech is already in progress");
            return;
        }
        this.isTextToSpeechInProgress = true;
        print("Calling text to speech");
        print(text);
        this.refScripts.getTTs(text, () => {
            this.isTextToSpeechInProgress = false;
            callback();
        });
    }

    callOpenAI(text: string = null) {
        this.vMLLScript.voiceStop();
        if (this.isRequestInProgress || this.isTextToSpeechInProgress) {
            print("Cannot call OpenAI while another request or text to speech is in progress");
            return;
        }
        this.isRequestInProgress = true;
        this.req.url = "https://api.openai.com/v1/chat/completions";
        this.req.body = JSON.stringify({
            "model": "gpt-4o-mini",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant. Answer are short less than 100 characters."
                },
                {
                    "role": "user",
                    "content": text ? text : "What is the meaning of life?"
                }
            ]
        });

        this.rms.performHttpRequest(this.req, (response) => {
            this.isRequestInProgress = false;
            const parsedResponse = JSON.parse(response.body);
            print(parsedResponse.choices[0].message.content);
            this.callTextToSpeech(parsedResponse.choices[0].message.content, () => {
                // Callback to handle any post text-to-speech actions
                print("Text to speech finished, ready for next request");
            });
        });
    }
}