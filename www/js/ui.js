const Ui = pc.createScript('Ui');
const carsPath = 'assets/models/cars';
const tracksPath = 'assets/models/tracks';

const btnPlay = document.querySelector('#play');
const btnGarage = document.querySelector('#garage');
const btnQuit = document.querySelector('#quit');

let model;

entity.addComponent("script");
entity.script.create(Ui);

Ui.prototype.loadModel = function(modelUrl, scriptName) {
    function callback(err, asset) {
        model = new pc.Entity();
        const options = {
            type: "asset",
            asset
        };
        model.addComponent("model", options);

        model.setLocalPosition(0, 0, 0);

        model.addComponent("script");
        model.script.create(scriptName);
        app.root.addChild(model);

        console.log(asset);
        return model;
    }
    app.assets.loadFromUrl(modelUrl, "model", callback);
};
Ui.prototype.loadModel(`${carsPath}/ferrari-laferrari.json`, "Model");

function playClick() {
    // const modelUrl = "bmwz4.json";

    document.querySelector('.modal').style.display = "none";

    model.removeComponent("model");

    // Ui.prototype.loadModel(modelUrl);
    // Ui.prototype.loadModel(`${tracksPath}/Laguna_Seca.json`);
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