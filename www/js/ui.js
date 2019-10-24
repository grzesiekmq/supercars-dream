const Ui = pc.createScript('Ui');
const carsPath = 'assets/models/cars';
const tracksPath = 'assets/models/tracks';



let model;
// const baseUrl = 'https://grzesiekmq.github.io/supercars-dream/www/';


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




// Ui.prototype.loadModel(`${carsPath}/ferari/ferari-la-ferari.gltf`, "Model");


// function playClick() {

// model from firebase
    // Ui.prototype.loadModel('https://firebasestorage.googleapis.com/v0/b/supercars-dream.appspot.com/o/tezla%2Fmodel-s.gltf?alt=media&token=876feba6-f593-4e5d-8fe0-343b75fc0b19', 'TestDrive');


document.querySelector('.overlay').style.display = "none";

// model.removeComponent("model");

/* working             */

// Ui.prototype.loadModel(`${carsPath}/bmv/bmv-8-series-concept.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/bmw-i8.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bugati/bugatti-chiron.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bugati/bugatti-veyron.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/hevrolet/chevrolet-camaro.gltf`, "TestDrive");


// Ui.prototype.loadModel(`${carsPath}/lambo/huracan.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/car-porsche-001.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/henesey/venom-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/jagur/cx-75.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mazerati/GT.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maybah/exelero.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/sls-amge.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/pahani/zonda.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/rols-roys/phantom.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/tezla/model-s.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/veneno.gltf`, "TestDrive");



// Ui.prototype.loadModel(`${carsPath}/hevrolet/corvette-C7.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/fort/gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/fort/mustang.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/jagur/f-type.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/konigseg/agera.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lotuz/exige-s.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-evolution-x.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/nisan/gtr-nizmo.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/pahani/huayra.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/918-r-type.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/rufe/rt-12s.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodg/zrt-challenger.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/812-superfast.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/f12.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/diablo-sv.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/gallardo.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/urus.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maklaren/f1.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maklaren/mp4.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/maklaren/p1.gltf`, "TestDrive");




/* wrong position */
// Ui.prototype.loadModel(`${carsPath}/lambo/aventador.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/azton/v12-vanquish.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/hrysler/ME.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/akura/nzx.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/azton/DBR9.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/azton/vulcan.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/4udi/r8-fsi.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/4udi/r18.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bentle/continental-gt-supersports.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/m3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/M3-GTR.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/m6.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodg/viper.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodg/viper-gts.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodg/viper-srt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/exotic-car.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/599.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/konigseg/one1.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/luxus/gs.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/luxus/lfa.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lotuz/evora.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mazerati/spyder.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/masda/MX-5.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/masda/RX-7.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/masda/RX-8.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/amge-gts.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/slr-maklaren.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/nisan/370z.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/carrera-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porshe/cayman-2017.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/merc/sls.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/zubaru/impreza-wrx-zti.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferari/458-italia.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/lambo/murcielago.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maklaren/576-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maklaren/GT.gltf`, "TestDrive");

























Ui.prototype.loadModel(`${tracksPath}/Barcelona.gltf`, "TestDrive");


// }
btnPlay.addEventListener('click', playClick);





Ui.prototype.initialize = function() {

};