@component
export class OpenAi extends BaseScriptComponent {
    @input openAIApiKey: string;

    @input
    rms: RemoteServiceModule;

    @input('Component.ScriptComponent')
    refScripts: any;

    private req: RemoteServiceHttpRequest;
    
    onAwake() {
        this.req = RemoteServiceHttpRequest.create();
        this.req.method = RemoteServiceHttpRequest.HttpRequestMethod.Post;
        this.req.headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.openAIApiKey}`
        };

        print("OpenAI is awake");
    }
    callTextToSpeech(text: string) {
        print("Calling text to speech");
        print(text);
        this.refScripts.getTTs(text);
    }
    callOpenAI() {
        this.req.url = "https://api.openai.com/v1/chat/completions";
        this.req.body = JSON.stringify({
            "model": "gpt-4o-mini",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant. Answer are short less than 400 characters."
                },
                {
                    "role": "user",
                    "content": "What is the meaning of life?"
                }
            ]
        });

        this.rms.performHttpRequest(this.req, (response) => {
            const parsedResponse = JSON.parse(response.body);
            print(parsedResponse.choices[0].message.content);
            this.callTextToSpeech(parsedResponse.choices[0].message.content);
        });
    }
}