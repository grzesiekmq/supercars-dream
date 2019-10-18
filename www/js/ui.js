const Ui = pc.createScript('Ui');
const carsPath = 'assets/models/cars';
const tracksPath = 'assets/models/tracks';



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

// Ui.prototype.loadModel(`${baseUrl}${carsPath}/aston-martin-vulcan.gltf`, "Model");


// Ui.prototype.loadModel(`${carsPath}/ferrari/ferrari-la-ferrari.gltf`, "Model");


// function playClick() {


document.querySelector('.overlay').style.display = "none";

// model.removeComponent("model");

/* working             */
// Ui.prototype.loadModel(`${carsPath}/lambo/lamborghini-huracan.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmw-8-series-concept.gltf`, "TestDrive");
Ui.prototype.loadModel(`${carsPath}/bmw-i8.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bugatti-chiron.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bugatti-veyron.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/car-porsche-001.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/chevrolet-camaro.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/chevrolet-corvette-C7.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ford-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ford-mustang.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/hennessey-venom-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/jaguar-cx-75.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/jaguar-f-type.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/koeninsegg-agera.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lotus-exige-s.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/Maserati-GT.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maybach-exelero.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mercedes-benz-sls-amg.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mitsubishi-lancer-evolution-x.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/nissan-gtr-nismo.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/pagani-huayra.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/pagani-zonda.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porsche-918-r-type.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/rolls-royce-phantom.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ruf-rt-12s.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/srt-dodge-challenger.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/tesla-model-s.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferrari/ferrari-812-superfast.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferrari/ferrari-f12.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/lamborghini-diablo-sv.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/lamborghini-gallardo.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/lamborghini-urus.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/lamborghini-veneno.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mclaren/mclaren-f1.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mclaren/mclaren-mp4.gltf`, "TestDrive");

// Ui.prototype.loadModel(`${carsPath}/mclaren/mclaren-p1.gltf`, "TestDrive");




/* wrong position */
// Ui.prototype.loadModel(`${carsPath}/aston-martin-v12-vanquish.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/chryslerME.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/acura-nsx.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston-martin-DBR9.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/aston-martin-vulcan.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/audi-r8-fsi.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/audi-r18.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bentley-continental-gt-supersports.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmw-m3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/BMW-M3-GTR.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmw-m6.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodge-viper.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodge-viper-gts.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/dodge-viper-srt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/exotic-car.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferrari-599.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/koenigsegg-one1.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lexus-gs.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lexus-lfa.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lotus-evora.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/maserati-spyder.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/Mazda-MX-5.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/Mazda-RX-7.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/Mazda-RX-8.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mercedes-amg-gts.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mercedes-benz-slr-mclaren.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/nissan-370z.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porsche-carrera-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/porsche-cayman-2017.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/sls-mercedes.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/subaru-impreza-wrx-sti.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/ferrari/ferrari-458-italia.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/lamborghini-aventador.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/lamborghini-murcielago.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mclaren/mclaren-576-gt.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mclaren/mclaren-GT.gltf`, "TestDrive");


























Ui.prototype.loadModel(`${tracksPath}/Barcelona.gltf`, "TestDrive");


// }
btnPlay.addEventListener('click', playClick);





Ui.prototype.initialize = function() {

};