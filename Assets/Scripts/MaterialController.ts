// import * as AvatarController from "./AvatarController"

import { Interactable } from "Spectacles Sync Framework/SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable";
import { SIK } from "Spectacles Sync Framework/SpectaclesInteractionKit/SIK";

@component
export class MaterialController extends BaseScriptComponent {
  script: ScriptComponent;

  @input
  materialMeshVisual: MaterialMeshVisual;

  @input
  outlintMat: Material;

  onAwake() {
    // let interactableType = requireType("../SyncFramework/ConnectedLensPanelExport/Interactable") as keyof ComponentNameMap
    // //@ts-ignore
    // let interactable = this.script.getSceneObject().getComponent(interactableType) as Interactable

    let interactable = this.getSceneObject().getComponent(
      Interactable.getTypeName()
    );

    // let interactable = this.getSceneObject().getComponent(
    //   SIK.InteractionConfiguration.requireType("Interactable")
    // ) as Interactable;

    let outlineColor = this.materialMeshVisual.getMaterial(1);
    let oldColor = new vec4(0, 0.95, 1, 0);

    interactable.onTriggerStart.add(function (eventData) {
      print("TriggerStart: ");
      if (global.localPlayerColor) {
        let newColor = global.localPlayerColor;
        outlineColor.mainPass.lineColor = newColor;
        print("NewColor: " + newColor);
      }
    });

    interactable.onTriggerEnd.add(function (eventData) {
      outlineColor.mainPass.lineColor = oldColor;
    });

    interactable.onHoverEnter.add(function () {
      if (global.localPlayerColor) {
        var newColor = global.localPlayerColor;
        outlineColor.mainPass.lineColor = newColor;
      }
    });

    interactable.onHoverExit.add(function () {
      outlineColor.mainPass.lineColor = oldColor;
    });

    interactable.onTriggerCanceled.add(function () {
      outlineColor.mainPass.lineColor = oldColor;
    });
  }
}
