export function createLight() {

    const light = new pc.Entity();
    const lightOptions = {
        type: "point",
        color: new pc.Color(1, 1, 1),
        intensity: 2,
        range: 50
    };
    light.addComponent("light", lightOptions);

    light.setLocalEulerAngles(0, 20, 0);
    
    pc.app.root.addChild(light);

}