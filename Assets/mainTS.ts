import { PinchButton } from 'Spectacles Sync Framework/SpectaclesInteractionKit/Components/UI/PinchButton/PinchButton';

@component
export class UiButton extends BaseScriptComponent {

    @input
    pB: SceneObject;
    
    onAwake() {
        print("HELLO_------")
        this.createEvent('OnStartEvent').bind(() => {
            this.onStart();
        });
    }

    onStart() {
        print("On STart")
        let pinchButton = this.pB.getComponent(
          PinchButton.getTypeName()
        );

        let onStateChangedCallback = () => {
          print("Buttton has been clicked");
        };

        pinchButton.onButtonPinched.add(onStateChangedCallback);
    }    
}
