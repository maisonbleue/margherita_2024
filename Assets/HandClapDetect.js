// @input Physics.ColliderComponent capsuleObject1
//@input SceneObject capsuleObj
// @input Physics.ColliderComponent capsuleObject2
// @input SceneObject particleEffect
// @input float cooldownTime = 1.0f
// @input Component.ScriptComponent vfxScript

var isColliding = false;
var lastCollisionTime = 0;

var particleTime = 0;

var started = false;


function update(eventData) {
    if (!started) {
        script.capsuleObject1.onOverlapEnter.add(function (e) {
            print("==-=-=-=-=-=")
            print(script.capsuleObj.name)
 
            spawnParticleEffect(script.capsuleObj.getTransform().getWorldPosition());
            print('particles!');
        });
        started = true;
        return;
    }
    
    if ((getTime() - particleTime) > 1.0)
        script.particleEffect.enabled = false;
}

function spawnParticleEffect(position) {

    //script.api.onSpawned(position);
    particleTime = getTime();
    
   script.particleEffect.enabled = true;
   script.particleEffect.getTransform().setWorldPosition(position);
}

script.createEvent("UpdateEvent").bind(update);