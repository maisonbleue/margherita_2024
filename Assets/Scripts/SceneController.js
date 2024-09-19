// -----JS CODE-----
//@input SceneObject interactObj;
//@input SceneObject cameraObj;
//@input Component.AudioComponent bgAudio;
//@input SceneObject pointCloudLight;
//@input SceneObject cursorVisual;

var interactObj = script.interactObj;
var cameraObj = script.cameraObj;
var bgAudio = script.bgAudio;

var syncEntity = new global.SyncEntity(script, null, true);

function isHost() {
  return syncEntity.isSetupFinished && syncEntity.doIOwnStore();
}

syncEntity.notifyOnReady(function () {
  script.pointCloudLight.enabled = false;
  print("The session has started and this entity is ready!");
  // Start your entity's behavior here!
  if (isHost()) {
    if (interactObj) {
      var camera = cameraObj.getTransform();
      var cameraNoY = new vec3(camera.forward.x, 0, camera.forward.z);
      cameraNoY.normalize();
      var cameraPos = camera.getWorldPosition();
      var cameraRot = camera.getWorldRotation();
      var newPosition = cameraPos.add(cameraNoY.uniformScale(-230));
      interactObj.getTransform().setWorldPosition(newPosition);
      interactObj.getTransform().setWorldRotation(cameraRot);
      interactObj.enabled = true;
      bgAudio.play(-1);
    }
  } else {
    interactObj.enabled = true;
    bgAudio.play(-1);
  }
});
