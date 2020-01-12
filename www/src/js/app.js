import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight } from '@babylonjs/core'
window.CANNON = require('cannon');



// Create a Babylon application
const canvas = document.querySelector("#application-canvas");

const carsPath = 'www/assets/models/cars';

const engine = new Engine(canvas, true);

function createScene() {

    const scene = new Scene(engine);


    const camera = new ArcRotateCamera('ArcRotateCamera', 1, 1, 40, new Vector3(0, 0, -40), scene)
    
    function addControls() {
        camera.attachControl(canvas, true)
    }

    const light = new HemisphericLight("HemiLight", new Vector3(0, 3, -40), scene)

    

    scene.enablePhysics();

    scene.getPhysicsEngine().setGravity(new Vector3(0, 0, 0))

    scene.collisionsEnabled = true;



    console.log(scene)

    return scene;

}

const scene = createScene();

engine.runRenderLoop(function () {

    scene.render();
});

export default scene;

