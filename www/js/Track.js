export function loadTrack(modelName, rb = 'static') {
    function callback(err, asset) {

        const resource = asset.resource;

        asset.loaded = true;
        pc.app.assets.add(asset);

        function createTrackEntity() {

            const modelEntity = new pc.Entity(modelName);
            const options = {
                type: "asset",
                asset: resource.model,
                castShadows: true

            };
            modelEntity.addComponent("model", options);

            modelEntity.addComponent('rigidbody', { type: rb });
            modelEntity.addComponent("collision", { halfExtents: new pc.Vec3(500, 5, 500) });

            modelEntity.setLocalScale(5, 1, 5);
            pc.app.root.addChild(modelEntity);

        }

        createTrackEntity();

        console.log('loaded', asset);

        console.log('err', err);

    }
    pc.app.assets.loadFromUrl(`www/${modelName}.gltf`, "container", callback);
}