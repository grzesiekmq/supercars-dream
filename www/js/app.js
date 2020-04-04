if (wasmSupported()) {
    loadWasmModuleAsync('Ammo', 'www/js/lib/ammo/ammo.wasm.js', 'www/js/lib/ammo/ammo.wasm.wasm', mainApp);
} else {
    loadWasmModuleAsync('Ammo', 'www/js/lib/ammo/ammo.js', '', mainApp);
}

function mainApp() {
    // Create a PlayCanvas application
    const canvas = document.querySelector("#application-canvas");
    canvas.focus();
    var app = new pc.Application(canvas, {
        mouse: new pc.Mouse(document.body),
        keyboard: new pc.Keyboard(window)
    });

    let modelEntity, carCamera;

    // Fill the available space at full resolution
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);

    function loadCubemap() {
        const cubemapOptions = {
            url: "www/helipad.dds"
        };
        const cubemapAsset = new pc.Asset('helipad.dds', 'cubemap', cubemapOptions, {
            rgbm: true
        });

        function cubemapCallback() {
            app.scene.gammaCorrection = pc.GAMMA_SRGB;
            app.scene.toneMapping = pc.TONEMAP_ACES;
            app.scene.skyboxMip = 1;                        // Set the skybox to the 128x128 cubemap mipmap level
            app.scene.setSkybox(cubemapAsset.resources);
            app.renderNextFrame = true;                     // ensure we render again when the cubemap arrives
        }
        cubemapAsset.ready(cubemapCallback);
        app.assets.add(cubemapAsset);
        app.assets.load(cubemapAsset);
    }

    function applySettings() {

        const settings = {
            physics: {
                gravity: [0, -9.8, 0]
            },
            render: {
                fog_end: 1000,
                tonemapping: 0,
                skybox: null,
                fog_density: 0.01,
                gamma_correction: 1,
                exposure: 1,
                fog_start: 1,
                global_ambient: [0, 0, 0],
                skyboxIntensity: 1,
                fog_color: [0, 0, 0],
                lightmapMode: 1,
                fog: 'none',
                lightmapMaxResolution: 2048,
                skyboxMip: 2,
                lightmapSizeMultiplier: 16
            }
        };
        app.applySceneSettings(settings);
    }

    function createLight() {

        const light = new pc.Entity();
        const lightOptions = {
            type: "point",
            color: new pc.Color(1, 1, 1),
            intensity: 2,
            range: 50
        };
        light.addComponent("light", lightOptions);

        light.setLocalEulerAngles(0, 20, 0);
        app.root.addChild(light);
    }

    function loadModel(modelName, scriptName, rb = 'static') {
        function callback(err, asset) {

            const resource = asset.resource;

            asset.loaded = true;
            app.assets.add(asset);

            function createCarEntity() {

                modelEntity = new pc.Entity(modelName);
                const options = {
                    type: "asset",
                    asset: resource.model,
                    castShadows: true

                };
                modelEntity.addComponent("model", options);

                modelEntity.addComponent('rigidbody', { type: rb });
                modelEntity.addComponent("collision");

                modelEntity.translate(0, 2, 0);

                modelEntity.addChild(carCamera);

                app.assets.loadFromUrl('www/js/CarCtrl.js', 'script', function (err) {

                    modelEntity.addComponent('script');
                    modelEntity.script.create(scriptName);

                    app.root.addChild(modelEntity);
                });
            }
            createCarEntity();

            console.log('loaded', asset);

            console.log('err', err);

        }
        app.assets.loadFromUrl(`www/${modelName}.gltf`, "container", callback);
    };

    function loadTrack(modelName, rb = 'static') {
        function callback(err, asset) {

            const resource = asset.resource;

            asset.loaded = true;
            app.assets.add(asset);

            function createTrackEntity() {

                modelEntity = new pc.Entity(modelName);
                const options = {
                    type: "asset",
                    asset: resource.model,
                    castShadows: true

                };
                modelEntity.addComponent("model", options);

                modelEntity.addComponent('rigidbody', { type: rb });
                modelEntity.addComponent("collision", { halfExtents: new pc.Vec3(500, 5, 500) });

                modelEntity.setLocalScale(5, 1, 5);
                app.root.addChild(modelEntity);

            }

            createTrackEntity();

            console.log('loaded', asset);

            console.log('err', err);

        }
        app.assets.loadFromUrl(`www/${modelName}.gltf`, "container", callback);
    };

    function createOrbitCamera() {

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
        app.root.addChild(cam);
    }
    function loadOrbitCameraScript() {

        function scriptCallback(err) {
            console.log('error', err);

            createOrbitCamera();

        }
        app.assets.loadFromUrl('www/js/orbit-camera.js', 'script', scriptCallback);
    }
    app.start();

    function createCarCamera() {

        carCamera = new pc.Entity('car cam');

        const camOptions = {

            fov: 10,

            clearColor: new pc.Color(29 / 255, 29 / 255, 29 / 255)
        };
        carCamera.addComponent('camera', camOptions);
        carCamera.translateLocal(0, 5, -100);
        carCamera.rotateLocal(-2, 180, 0);
    }

    function setCamera(cameraName) {
        var activeCamera = app.root.findByName('car cam');
        activeCamera.enabled = false;

        activeCamera = app.root.findByName(cameraName);
        activeCamera.enabled = true;
    }

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
        app.root.addChild(box);

    }

    function createCity() {

        for (let building = 0; building < 200; building++) {
            createBuilding();

        }
    }

    function load() {
        loadCubemap();
        loadModel('812-superfast', 'CarCtrl', 'dynamic');
        loadTrack('track');
        loadOrbitCameraScript();
    }

    function create() {
        createLight();
        createCarCamera();
        createCity();

    }

    create();

    load();

    applySettings();

    // update

    function onUpdate() {

        const changeToOrbitCam = app.keyboard.wasPressed(pc.KEY_C);
        const changeToFollowCam = app.keyboard.wasPressed(pc.KEY_V);

        if (changeToOrbitCam) {
            setCamera('orbit camera');
        }
        if (changeToFollowCam) {
            setCamera('car cam');
        }
    }
    app.on('update', onUpdate);

}

