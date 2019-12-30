import { Engine, Scene, TargetCamera, Vector3, PointLight } from '@babylonjs/core'

// Create a Babylon application
const canvas = document.querySelector("#application-canvas");

const carsPath = 'www/assets/models/cars';

const engine = new Engine(canvas, true);

function createScene() {

    const scene = new Scene(engine);

    const camera = new TargetCamera('TargetCamera', new Vector3(0, 0, -40), scene)

    camera.minZ = 1

    camera.maxZ = 10000

    const light = new PointLight("PointLight", new Vector3(0, 3, 0), scene)

    return scene;

}

const scene = createScene();

engine.runRenderLoop(function () {

    scene.render();
});

export default scene;

