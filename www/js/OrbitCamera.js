export function createOrbitCamera() {

    const cam = new pc.Entity('orbit camera');
    const camOptions = {
        clearColor: new pc.Color(0.4, 0.45, 0.5),

        fov: 10

    };
    cam.addComponent('camera', camOptions);

    cam.addComponent("script");
    cam.script.create("orbitCamera");
    cam.script.create("orbitCameraInputMouse");
    cam.script.create("orbitCameraInputTouch");
    pc.app.root.addChild(cam);
}