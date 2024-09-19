import { PinchButton } from 'SpectaclesInteractionKit/Components/UI/PinchButton/PinchButton';
import { OpenAi } from './projectManager';

@component
export class UiButton extends BaseScriptComponent {
    @input
    openAiRef: OpenAi;

    onAwake() {
        print("HELLO_------")
        this.createEvent('OnStartEvent').bind(() => {
            this.onStart();
        });
    }

    onStart() {
        print("On STart")
        let pinchButton = this.sceneObject.getComponent(
          PinchButton.getTypeName()
        );

        let onStateChangedCallback = () => {
          print(`Buttton has been clicked`);
          this.openAiRef.callOpenAI();
          // const openAiInstance = this.sceneObject.getComponent(OpenAi) as OpenAi;
          // OpenAi.callOpenAI(openAiInstance);
        };

        pinchButton.onButtonPinched.add(onStateChangedCallback);
    }    
}
