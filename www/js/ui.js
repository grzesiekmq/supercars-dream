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
<<<<<<< Updated upstream
        model = new pc.Entity();
        const options = {
            type: "asset",
            asset
        };
        model.addComponent("model", options);
=======
        const json = asset.resource;

        const gltf = JSON.parse(json);

        function afterLoad(err, res) {

            console.log('err', err);

            asset.resource = res.model;
            asset.loaded = true;
            app.assets.add(asset);

            model = new pc.Entity();
            const options = {
                type: "asset",
                asset
>>>>>>> Stashed changes

        model.setLocalPosition(0, 0, 0);

<<<<<<< Updated upstream
        model.addComponent("script");
        model.script.create(scriptName);
        app.root.addChild(model);
=======

            model.addComponent("script");
            model.script.create(scriptName);
            app.root.addChild(model);



            console.log('loaded');

            return model;
        }
        console.log('err', err);
        loadGltf(gltf, app.graphicsDevice, afterLoad);
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    // Ui.prototype.loadModel(modelUrl);
    // Ui.prototype.loadModel(`${tracksPath}/Laguna_Seca.json`);
    console.log('button clicked');
=======
// Ui.prototype.loadModel(`${carsPath}/ferari/la-ferari.gltf`, "Model");


// function playClick() {

// model from firebase
// Ui.prototype.loadModel('https://firebasestorage.googleapis.com/v0/b/supercars-dream.appspot.com/o/tezla%2Fmodel-s.gltf?alt=media&token=876feba6-f593-4e5d-8fe0-343b75fc0b19', 'TestDrive');


document.querySelector('.overlay').style.display = "none";

// model.removeComponent("model");

/* working             */

// Ui.prototype.loadModel(`${carsPath}/bmv/8-series-concept.gltf`, "TestDrive");
    Ui.prototype.loadModel(`${carsPath}/bmv/i8.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/bugati/chiron.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bugati/veyron.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/dodg/zrt-challenger.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/ferari/812-superfast.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/f12.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/la-ferari.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/fort/gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/fort/mustang.gltf`, "TestDrive");


// Ui.prototype.loadModel(`${carsPath}/henesey/venom-gt.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/hevrolet/corvette-C7.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/jagur/f-type.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/jagur/cx-75.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/konigseg/agera.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/lambo/huracan.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/diablo-sv.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/gallardo.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/urus.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/veneno.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/lotuz/exige-s.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/maklaren/f1.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maklaren/mp4.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maklaren/p1.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/maybah/exelero.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/mazerati/GT.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/merc/sls-amge.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-evolution-x.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/nisan/gtr-nizmo.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/pahani/zonda.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/pahani/huayra.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/porshe/car-porsche-001.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/918-r-type.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/rols-roys/phantom.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/rufe/rt-12s.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/tezla/model-s.gltf`, "TestDrive");





// Ui.prototype.loadModel(`${carsPath}/mazerati/mc12.gltf`, "TestDrive");







    Ui.prototype.loadModel(`${tracksPath}/testing/barcelona.gltf`, "TestDrive");







// issue with textures path
// Ui.prototype.loadModel(`${carsPath}/akura/NZX_GT3/NZX_GT3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/aventador-roadster/aventador.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mazerati/gran-cabrio/Cabrio.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/green-super-sport/SuperSport.gltf`, "TestDrive");










/* wrong position */
// Ui.prototype.loadModel(`${carsPath}/4udi/tt-clubsport.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/4udi/rsq.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/4udi/rs7.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/4udi/avus.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/4udi/a8.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/4udi/r8-fsi.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/4udi/r18.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/akura/nzx.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/akura/xrx.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/alfa/zagato-tz3-stradale.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/aston/rapide.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston/vantage.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston/aston-rapide.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston/dbs-volante.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston/vanquish.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston/one-77.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston/v12-vanquish.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston/DBR9.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston/vulcan.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/bentle/continental-gt-supersports.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/bmv/m3-e92.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/M3-GTR.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/m3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/m5-tuning.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/m6.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/vision-efficient.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/cadilac/cien.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/cadilac/cts.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/chonda/s2000-tuned.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/chonda/NZX TAKATA DOME.gltf`, "TestDrive");


// Ui.prototype.loadModel(`${carsPath}/citron/gt.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/dodg/viper.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodg/viper-zrt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodg/viper-gts.gltf`, "TestDrive");


// Ui.prototype.loadModel(`${carsPath}/ferari/430.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/458-italia.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/599.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/modena.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/testarosa.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/fort/gt-90.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/fort/mustang-salen.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro-old.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/hevrolet/corvete-concept.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/holdem/monaro.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/hrysler/ME.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/hrysler/300c.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/hrysler/crossfire.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/jagur/xkr.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/konigseg/one1.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/konigseg/ccx.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/lambo/aventador.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/asterion.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/murcielago.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/lotuz/evora.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/luxus/gs.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/luxus/lfa.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/maklaren/576-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maklaren/GT.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maklaren/mp4-12c.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/masda/MX-5.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/masda/RX-7.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/masda/RX-8.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/masda/mx5-2016.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/mazerati/spyder.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mazerati/quatroporte.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/merc/amge-gts.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/cl.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/clk-dtm.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/clk-gtr.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/slr-maklaren.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/sls.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/mitsushi/3000gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mitsushi/eclipse.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/nisan/370z.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/nisan/skyline-gtr.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/other/exotic-car.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/concept-car-2009.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/concept-car-7.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/concept-car5.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/race-car.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/vm-x1.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/wizard-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/asterisk.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/pahani/zonda-f.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/pontiak/firebird.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/pontiak/gto.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/porshe/carrera-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/911-turbo.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/996.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/997-gt3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/boxster.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/boxster-s.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/panamera-turbo.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/cayman-2017.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/sab/aero-x.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/salen/s7.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/shelbi/cobra.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/tojota/soarer.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/twr/sagaris.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/vendeta/gtr-800.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/vw/ego.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/zenwo/st1.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/zubaru/impreza-wrx-zti.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/zubaru/b11s.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/zubaru/impreza.gltf`, "TestDrive");




























// }
btnPlay.addEventListener('click', playClick);

>>>>>>> Stashed changes

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