export function createCity() {

    function createBuilding() {
        const box = new pc.Entity();
        // position
        let x = pc.math.random(50, 100);
        let z = pc.math.random(0, 100);

        let scaleX = 10;
        let scaleY = pc.math.random(1, 100);
        let scaleZ = scaleX;

        let r = pc.math.random();
        let g = .5;
        let b = 1;
        box.addComponent('model', { type: 'box' });
        box.model.material.diffuse.set(r, g, b);
        box.translate(x, 0, z);
        box.setLocalScale(scaleX, scaleY, scaleZ);
        pc.app.root.addChild(box);

    }

    for (let building = 0; building < 200; building++) {
        createBuilding();

    }
}