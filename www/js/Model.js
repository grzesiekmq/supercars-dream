import { createCarCamera } from './CarCamera.js';
export function loadModel(modelName, scriptName, rb = 'static') {
    function callback(err, asset) {

        const resource = asset.resource;

        asset.loaded = true;
        pc.app.assets.add(asset);

        function createCarEntity() {

            const modelEntity = new pc.Entity(modelName);
            const options = {
                type: "asset",
                asset: resource.model,
                castShadows: true

            };
            modelEntity.addComponent("model", options);

            modelEntity.addComponent('rigidbody', { type: rb });
            modelEntity.addComponent("collision");

            modelEntity.translate(0, 2, 0);
            const carCamera = createCarCamera();

            modelEntity.addChild(carCamera);

            pc.app.assets.loadFromUrl('www/js/CarCtrl.js', 'script', function (err) {

                modelEntity.addComponent('script');
                modelEntity.script.create(scriptName);

                pc.app.root.addChild(modelEntity);
            });
        }
        createCarEntity();

        console.log('loaded', asset);

        console.log('err', err);

    }
    pc.app.assets.loadFromUrl(`www/${modelName}.gltf`, "container", callback);
}