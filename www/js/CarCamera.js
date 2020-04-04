export function createCarCamera() {

    var carCamera = new pc.Entity('car cam');

    const camOptions = {

        fov: 10,

        clearColor: new pc.Color(29 / 255, 29 / 255, 29 / 255)
    };
    carCamera.addComponent('camera', camOptions);
    carCamera.translateLocal(0, 5, -100);
    carCamera.rotateLocal(-2, 180, 0);
    return carCamera;

}