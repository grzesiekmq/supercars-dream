import { createLight } from './Light.js';
import { loadModel } from './Model.js';
import { loadTrack } from './Track.js';
import { createOrbitCamera } from './OrbitCamera.js';
import { createCity } from './City.js';

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

    function loadOrbitCameraScript() {

        function scriptCallback(err) {
            console.log('error', err);

            createOrbitCamera();

        }
        app.assets.loadFromUrl('www/js/helpers/orbit-camera.js', 'script', scriptCallback);
    }
    app.start();

    function setCamera(cameraName) {
        var activeCamera = app.root.findByName('car cam');
        activeCamera.enabled = false;

        activeCamera = app.root.findByName(cameraName);
        activeCamera.enabled = true;
    }

    function load() {
        loadCubemap();
        loadModel('812-superfast', 'CarCtrl', 'dynamic');
        loadTrack('track');
        loadOrbitCameraScript();
    }

    function create() {
        createLight();

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

