const Ui = pc.createScript('Ui');
const carsPath = 'assets/models/cars';
const tracksPath = 'assets/models/tracks';

const btnPlay = document.querySelector('#play');
const btnGarage = document.querySelector('#garage');
const btnQuit = document.querySelector('#quit');

let model;
const baseUrl = 'https://grzesiekmq.github.io/supercars-dream/www/';

entity.addComponent("script");
entity.script.create(Ui);

Ui.prototype.loadModel = function(modelUrl, scriptName) {
    function callback(err, asset) {
        const json = asset.resource;

        const gltf = JSON.parse(json);

        function afterLoad(err, res) {

            console.log(err);

            asset.resource = res.model;
            asset.loaded = true;
            app.assets.add(asset);

            model = new pc.Entity();
            const options = {
                type: "asset",
                asset

            };
            model.addComponent("model", options);


            model.addComponent("script");
            model.script.create(scriptName);
            app.root.addChild(model);



            console.log('loaded');

            return model;
        }
        console.log(err);
        loadGltf(gltf, app.graphicsDevice, afterLoad);

        console.log(asset);
    }
    app.assets.loadFromUrl(modelUrl, "json", callback);
};

Ui.prototype.loadModel(`${baseUrl}${carsPath}/aston_martin_vulcan.gltf`, "Model");



function playClick() {
    // const modelUrl = "bmwz4.json";

    document.querySelector('.modal').style.display = "none";

    model.removeComponent("model");

    // Ui.prototype.loadModel(modelUrl);
    Ui.prototype.loadModel(`${baseUrl}${tracksPath}/Barcelona.gltf`);
    console.log('button clicked');

}

// add event listener on `click`
function garageClick() {
    console.log('garage');
    const garage = document.createElement('h1');
    garage.textContent = 'Garage';
    document.body.appendChild(garage);
}

function onQuit() {
    console.log('quit');
}
btnPlay.addEventListener('click', playClick, false);
btnGarage.addEventListener('click', garageClick, false);
btnQuit.addEventListener('click', onQuit, false);

Ui.prototype.initialize = function() {

};