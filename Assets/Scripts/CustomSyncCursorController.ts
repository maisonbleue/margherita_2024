import { InteractorCursor } from "Spectacles Sync Framework/SpectaclesInteractionKit/Components/Interaction/InteractorCursor/InteractorCursor";

@component
export class NewScript extends BaseScriptComponent {
  @input
  interactorCursor: InteractorCursor;

  @input
  myCursor: SceneObject;

  @input
  cursorMaterial: RenderMeshVisual;

  onAwake() {
    this.createEvent("OnStartEvent").bind(() => this.initialize());
  }

  initialize() {
    this.interactorCursor.enabled = false;
    this.createEvent("UpdateEvent").bind(() => this.updateCursorPositino());
  }

  updateCursorPositino() {
    let myCursorPosition = this.interactorCursor.cursorPosition;
    // print("Interactor Cursor: " + this.interactorCursor);
    // print("Cursor Pos: " + this.interactorCursor.cursorPosition);
    if (myCursorPosition === null || myCursorPosition === undefined) {
      // hide the sync cursor here
      this.cursorMaterial.enabled = false;
    } else {
      this.cursorMaterial.enabled = true;
      this.myCursor.getTransform().setWorldPosition(myCursorPosition);
    }

    if (this.cursorMaterial && global.localPlayerColor) {
      this.cursorMaterial.mainMaterial.mainPass.baseColor =
        global.localPlayerColor;
    }
  }
}

