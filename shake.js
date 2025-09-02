let shakeThreshold = 15; // sensibilidad de la sacudida
let lastX, lastY, lastZ;
let lastTime = new Date().getTime();

window.addEventListener("devicemotion", function(event) {
    let acceleration = event.accelerationIncludingGravity;
    let currentTime = new Date().getTime();
    let timeDifference = currentTime - lastTime;

    if(timeDifference > 100) { // cada 100ms
        let deltaX = 0, deltaY = 0, deltaZ = 0;

        if(lastX !== undefined){
            deltaX = Math.abs(acceleration.x - lastX);
            deltaY = Math.abs(acceleration.y - lastY);
            deltaZ = Math.abs(acceleration.z - lastZ);
        }

        if(deltaX + deltaY + deltaZ > shakeThreshold){
            mostrarPoseRandom();
        }

        lastX = acceleration.x;
        lastY = acceleration.y;
        lastZ = acceleration.z;
        lastTime = currentTime;
    }
});
