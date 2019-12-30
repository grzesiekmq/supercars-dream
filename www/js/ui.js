const Ui = pc.createScript('Ui');
const carsPath = 'assets/models/cars';
const tracksPath = 'assets/models/tracks';

let modelEntity;

entity.addComponent("script");
entity.script.create(Ui);

Ui.prototype.loadModel = function (modelUrl, scriptName) {
    function callback(err, asset) {
        const json = asset.resource;

        const gltf = JSON.parse(json);

        function afterLoad(err, res) {

            console.log('err', err);

            asset.resource = res.model;
            asset.loaded = true;
            app.assets.add(asset);

            modelEntity = new pc.Entity('modelEntity');
            const options = {
                type: "asset",
                asset

            };
            modelEntity.addComponent("model", options);

            console.log('model', modelEntity.model.entity);

            modelEntity.addComponent("script");
            modelEntity.script.create(scriptName);
            app.root.addChild(modelEntity);

            console.log('loaded');

            return modelEntity;
        }
        console.log('err', err);
        loadGltf(gltf, app.graphicsDevice, afterLoad);

        console.log(asset);
    }
    app.assets.loadFromUrl(modelUrl, "json", callback);
};

// turn test - has model materials?

const turn = "Turn";

// Ui.prototype.loadModel(`${carsPath}/adi/r18.gltf`, turn);

// no materials ( to fixed - to replace)

















// Ui.prototype.loadModel(`${carsPath}/other/concept-car5.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/other/wizard-gt.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/other/asterisk.gltf`, turn);







// Ui.prototype.loadModel(`${carsPath}/sab/aero-x.gltf`, turn);



// to fix

// Ui.prototype.loadModel(`${carsPath}/bmv/m6.gltf`, turn); // to fix

// Ui.prototype.loadModel(`${carsPath}/ferari/430.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/ferari/458-italia.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/lambo/murcielago.gltf`, turn); // to fix

// Ui.prototype.loadModel(`${carsPath}/masda/mx5-2016.gltf`, turn); // to fix

// testing

// Ui.prototype.loadModel(`${tracksPath}/testing/barcelona.gltf`);

// Ui.prototype.loadModel(`${carsPath}/adi/avus.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/bmv/7.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/dodg/charger.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-wrc.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/lambo/reventon.gltf`, turn);

const models = document.querySelector('.inline-list');
function getModel() {
    console.log('models');

                    // function findModelInArr()
                    // {
                    // return make.model.find(el => el === modelName);
                    // }
                    // console.log('found model',  findModelInArr());

    function hideModel() {
        modelEntity.model.hide();
    }
    function showModel() {
        modelEntity.model.show();
    }

    function hideOtherModel(name, makesArr) {
        if (makesArr.filter(el => el !== name)
            .some(el => app.assets.find(el))) {
            hideModel();
        }
    }

    function getModelName(modelName) {
        const models = {
                            // adi
            'a8': function () {

                                // if model is in assets except of selected model
                hideOtherModel(adi.a8, adiArr);

                Ui.prototype.loadModel(`${carsPath}/adi/${adi.a8}`, turn);
                if (app.assets.find(adi.a8)) {
                                    // app.assets.get
                }
                acceleration = 4.9;
                topSpeed = 250;
            },

            'avus': function () {
                hideOtherModel(adi.avus, adiArr);

                Ui.prototype.loadModel(`${carsPath}/adi/${adi.avus}`, turn);
                acceleration = 2.8;
                topSpeed = 340;
            },
            'r18': function () {

                hideOtherModel(adi.r18, adiArr);

                Ui.prototype.loadModel(`${carsPath}/adi/${adi.r18}`, turn);
                acceleration = 2.6;
                topSpeed = 378;
            },

            'r8 fsi': function () {

                hideOtherModel(adi.r8_fsi, adiArr);
                Ui.prototype.loadModel(`${carsPath}/adi/${adi.r8_fsi}`, turn);
                acceleration = 3.5;
                topSpeed = 317;

            },
            'r8 le mans': function () {

                hideOtherModel(adi.r8_le_mans, adiArr);
                Ui.prototype.loadModel(`${carsPath}/adi/${adi.r8_le_mans}`, turn);
                acceleration = 3.5;
                topSpeed = 317;

            },
            'rs7': function () {

                hideOtherModel(adi.rs7, adiArr);
                Ui.prototype.loadModel(`${carsPath}/adi/${adi.rs7}`, turn);
                acceleration = 3.9;
                topSpeed = 250;

            },

            'rsq': function () {

                hideOtherModel(adi.rsq, adiArr);
                Ui.prototype.loadModel(`${carsPath}/adi/${adi.rsq}`, turn);
                acceleration = 4.1;
                topSpeed = 337;
            },

            'tt clubsport': function () {

                hideOtherModel(adi.tt, adiArr);
                Ui.prototype.loadModel(`${carsPath}/adi/${adi.tt}`, turn);
                acceleration = 4;
                topSpeed = 249;
            },

                            // akura
            'nzx': function () {

                hideOtherModel(akura.nzx, akuraArr);
                Ui.prototype.loadModel(`${carsPath}/akura/${akura.nzx}`, turn);
                acceleration = 4.9;
                topSpeed = 280;
            },

            'xrx': function () {

                hideOtherModel(akura.xrx, akuraArr);
                Ui.prototype.loadModel(`${carsPath}/akura/${akura.xrx}`, turn);
                acceleration = 3.2;
                topSpeed = 346;
            },

                            // alfa

            '8c spider': function () {

                hideOtherModel(alfa.alfa_8c, alfaArr);
                Ui.prototype.loadModel(`${carsPath}/alfa/${alfa.alfa_8c}`, turn);
                acceleration = 4.2;
                topSpeed = 292;
            },

            'zagato tz3 stradale': function () {

                hideOtherModel(alfa.tz3, alfaArr);
                Ui.prototype.loadModel(`${carsPath}/alfa/${alfa.tz3}`, turn);
                acceleration = 3.6;
                topSpeed = 325;
            },

                            // aston
            'DBR9': function () {

                hideOtherModel(aston.dbr9, astonArr);
                Ui.prototype.loadModel(`${carsPath}/aston/DBR9.gltf`, turn);
                acceleration = 4.5;
                topSpeed = 294;
            },

            'rapide': function () {

                hideOtherModel(aston.rapide, astonArr);
                Ui.prototype.loadModel(`${carsPath}/aston/rapide.gltf`, turn);
                acceleration = 4.8;
                topSpeed = 295;
            },

            'vantage': function () {

                hideOtherModel(aston.vantage, astonArr);
                Ui.prototype.loadModel(`${carsPath}/aston/vantage.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 329;
            },

            'dbs volante': function () {

                hideOtherModel(aston.dbs, astonArr);
                Ui.prototype.loadModel(`${carsPath}/aston/dbs-volante.gltf`, turn);
                acceleration = 4.3;
                topSpeed = 308;
            },

            'vanquish': function () {

                hideOtherModel(aston.vanquish, astonArr);
                Ui.prototype.loadModel(`${carsPath}/aston/vanquish.gltf`, turn);
                acceleration = 4;
                topSpeed = 294;
            },

            'one 77': function () {

                hideOtherModel(aston.one77, astonArr);
                Ui.prototype.loadModel(`${carsPath}/aston/one-77.gltf`, turn);
                acceleration = 3.5;
                topSpeed = 354;
            },

            'v12 vanquish': function () {

                hideOtherModel(aston.v12_vanquish, astonArr);
                Ui.prototype.loadModel(`${carsPath}/aston/v12-vanquish.gltf`, turn);
                acceleration = 3.4;
                topSpeed = 329;
            },

            'vulcan': function () {

                hideOtherModel(aston.vulcan, astonArr);
                Ui.prototype.loadModel(`${carsPath}/aston/vulcan.gltf`, turn);
                acceleration = 2.9;
                topSpeed = 345;
            },

                            // bentle
            'continental gt supersports': function () {

                hideOtherModel(bentle.continental, bentleArr);
                Ui.prototype.loadModel(`${carsPath}/bentle/continental-gt-supersports.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 328;
            },

                            // bmv

            '7': function () {

                hideOtherModel(bmv.bmv_7, bmvArr);
                Ui.prototype.loadModel(`${carsPath}/bmv/7.gltf`, turn);
                acceleration = 7.8;
                topSpeed = 244;
            },

            'm3': function () {

                hideOtherModel(bmv.m3, bmvArr);
                Ui.prototype.loadModel(`${carsPath}/bmv/m3.gltf`, turn);
                acceleration = 4.5;
                topSpeed = 249;
            },

            'm3 e92': function () {

                hideOtherModel(bmv.m3_e92, bmvArr);
                Ui.prototype.loadModel(`${carsPath}/bmv/m3-e92.gltf`, turn);
                acceleration = 4.1;
                topSpeed = 289;
            },

            'M3 GTR': function () {

                hideOtherModel(bmv.m3_gtr, bmvArr);
                Ui.prototype.loadModel(`${carsPath}/bmv/M3-GTR.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 322;
            },

            'm5 tuning': function () {

                hideOtherModel(bmv.m5, bmvArr);
                Ui.prototype.loadModel(`${carsPath}/bmv/m5-tuning.gltf`, turn);
                acceleration = 5.1;
                topSpeed = 250;
            },

            '8 series concept': function () {

                hideOtherModel(bmv.bmv_8_series, bmvArr);
                Ui.prototype.loadModel(`${carsPath}/bmv/8-series-concept.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 250;
            },

            'i8': function () {

                hideOtherModel(bmv.i8, bmvArr);
                Ui.prototype.loadModel(`${carsPath}/bmv/i8.gltf`, turn);
                acceleration = 4.1;
                topSpeed = 250;
            },

                            //  bugati
            'chiron': function () {

                hideOtherModel(bugati.chiron, bugatiArr);
                Ui.prototype.loadModel(`${carsPath}/bugati/chiron.gltf`, turn);
                acceleration = 2.4;
                topSpeed = 420;
            },

            'veyron': function () {

                hideOtherModel(bugati.veyron, bugatiArr);
                Ui.prototype.loadModel(`${carsPath}/bugati/veyron.gltf`, turn);
                acceleration = 2.7;
                topSpeed = 407;
            },

                            // cadilac
            'cien': function () {

                hideOtherModel(cadilac.cien, cadilacArr);
                Ui.prototype.loadModel(`${carsPath}/cadilac/cien.gltf`, turn);
                acceleration = 4;
                topSpeed = 370;
            },

            'cts': function () {

                hideOtherModel(cadilac.cts, cadilacArr);
                Ui.prototype.loadModel(`${carsPath}/cadilac/cts.gltf`, turn);
                acceleration = 4.2;
                topSpeed = 308;
            },

                            // chonda
            's2000 tuned': function () {

                hideOtherModel(chonda.s2000, chondaArr);
                Ui.prototype.loadModel(`${carsPath}/chonda/s2000-tuned.gltf`, turn);
                acceleration = 5.8;
                topSpeed = 239;
            },

            'NZX TAKATA DOME': function () {

                hideOtherModel(chonda.nzx, chondaArr);
                Ui.prototype.loadModel(`${carsPath}/chonda/NZX TAKATA DOME.gltf`, turn);
                acceleration = 3.5;
                topSpeed = 270;
            },

                            // citron
            'citron gt': function () {

                hideOtherModel(citron.gt, citronArr);
                Ui.prototype.loadModel(`${carsPath}/citron/citron-gt.gltf`, turn);
                acceleration = 4;
                topSpeed = 289;
            },

                            // dodg

            'charger': function () {

                hideOtherModel(dodg.charger, dodgArr);
                Ui.prototype.loadModel(`${carsPath}/dodg/charger.gltf`, turn);
                acceleration = 4.8;
                topSpeed = 267;
            },

            'viper': function () {

                hideOtherModel(dodg.viper, dodgArr);
                Ui.prototype.loadModel(`${carsPath}/dodg/viper.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 330;
            },

            'viper zrt': function () {

                hideOtherModel(dodg.viper_zrt, dodgArr);
                Ui.prototype.loadModel(`${carsPath}/dodg/viper-zrt.gltf`, turn);
                acceleration = 3.6;
                topSpeed = 329;
            },

            'viper gts': function () {

                hideOtherModel(dodg.viper_gts, dodgArr);
                Ui.prototype.loadModel(`${carsPath}/dodg/viper-gts.gltf`, turn);
                acceleration = 4.3;
                topSpeed = 284;
            },

            'zrt challenger': function () {

                hideOtherModel(dodg.challenger, dodgArr);
                Ui.prototype.loadModel(`${carsPath}/dodg/zrt-challenger.gltf`, turn);
                acceleration = 5;
                topSpeed = 273;
            },

                            // ferari

            '599': function () {

                hideOtherModel(ferari.f599, ferariArr);
                Ui.prototype.loadModel(`${carsPath}/ferari/599.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 334;
            },

            'modena': function () {

                hideOtherModel(ferari.modena, ferariArr);
                Ui.prototype.loadModel(`${carsPath}/ferari/modena.gltf`, turn);
                acceleration = 4.3;
                topSpeed = 296;
            },

            '458 italia': function () {

                hideOtherModel(ferari.f458, ferariArr);
                Ui.prototype.loadModel(`${carsPath}/ferari/458-italia.gltf`, turn);
                acceleration = 3.4;
                topSpeed = 325;
            },

            'testarosa': function () {

                hideOtherModel(ferari.testarosa, ferariArr);
                Ui.prototype.loadModel(`${carsPath}/ferari/testarosa.gltf`, turn);
                acceleration = 5;
                topSpeed = 289;
            },

            '812 superfast': function () {

                hideOtherModel(ferari.f812, ferariArr);
                Ui.prototype.loadModel(`${carsPath}/ferari/812-superfast.gltf`, turn);
                acceleration = 2.9;
                topSpeed = 355;
            },

            'f12': function () {

                hideOtherModel(ferari.f12, ferariArr);
                Ui.prototype.loadModel(`${carsPath}/ferari/f12.gltf`, turn);
                acceleration = 3;
                topSpeed = 339;
            },

            'la ferari': function () {

                hideOtherModel(ferari.laferari, ferariArr);
                Ui.prototype.loadModel(`${carsPath}/ferari/la-ferari.gltf`, turn);
                acceleration = 2.9;
                topSpeed = 349;
            },

                            // fort
            'gt 90': function () {

                hideOtherModel(fort.gt90, fortArr);
                Ui.prototype.loadModel(`${carsPath}/fort/gt-90.gltf`, turn);
                acceleration = 3.1;
                topSpeed = 378;
            },

            'mustang salen': function () {

                hideOtherModel(fort.mustang_salen, fortArr);
                Ui.prototype.loadModel(`${carsPath}/fort/mustang-salen.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 289;
            },

            'gt': function () {

                hideOtherModel(fort.gt, fortArr);
                Ui.prototype.loadModel(`${carsPath}/fort/fort-gt.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 347;
            },

            'mustang': function () {

                hideOtherModel(fort.mustang, fortArr);
                Ui.prototype.loadModel(`${carsPath}/fort/mustang.gltf`, turn);
                acceleration = 4.5;
                topSpeed = 263;
            },

                            // henesey
            'venom gt': function () {

                hideOtherModel(henesey.venom, heneseyArr);
                Ui.prototype.loadModel(`${carsPath}/henesey/venom-gt.gltf`, turn);
                acceleration = 2.7;
                topSpeed = 434;
            },

                            // hevrolet
            'camaro old': function () {

                hideOtherModel(hevrolet.camaro_old, hevroletArr);
                Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro-old.gltf`, turn);
                acceleration = 3.5;
                topSpeed = 305;
            },

            'camaro': function () {

                hideOtherModel(hevrolet.camaro, hevroletArr);
                Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro.gltf`, turn);
                acceleration = 4;
                topSpeed = 289;
            },

            'corvette C7': function () {

                hideOtherModel(hevrolet.corvete_c7, hevroletArr);
                Ui.prototype.loadModel(`${carsPath}/hevrolet/corvette-C7.gltf`, turn);
                acceleration = 2.9;
                topSpeed = 321;
            },

            'corvette concept': function () {

                hideOtherModel(hevrolet.corvete_concept, hevroletArr);
                Ui.prototype.loadModel(`${carsPath}/hevrolet/corvette-concept.gltf`, turn);
                acceleration = 3;
                topSpeed = 300;
            },

                            // holdem
            'monaro': function () {

                hideOtherModel(holdem.monaro, holdemArr);
                Ui.prototype.loadModel(`${carsPath}/holdem/monaro.gltf`, turn);
                acceleration = 6;
                topSpeed = 278;
            },

                            // hrysler
            '300c': function () {

                hideOtherModel(hrysler.hrysler_300c, hryslerArr);
                Ui.prototype.loadModel(`${carsPath}/hrysler/300c.gltf`, turn);
                acceleration = 6.2;
                topSpeed = 240;
            },

            'crossfire': function () {

                hideOtherModel(hrysler.crossfire, hryslerArr);
                Ui.prototype.loadModel(`${carsPath}/hrysler/crossfire.gltf`, turn);
                acceleration = 6.5;
                topSpeed = 244;
            },

            'ME': function () {

                hideOtherModel(hrysler.me, hryslerArr);
                Ui.prototype.loadModel(`${carsPath}/hrysler/ME.gltf`, turn);
                acceleration = 2.9;
                topSpeed = 399;
            },

                            // jagur

            'c-x75': function () {

                hideOtherModel(jagur.cx75, jagurArr);
                Ui.prototype.loadModel(`${carsPath}/jagur/cx-75.gltf`, turn);
                acceleration = 2.9;
                topSpeed = 354;
            },

            'f type': function () {

                hideOtherModel(jagur.f_type, jagurArr);
                Ui.prototype.loadModel(`${carsPath}/jagur/f-type.gltf`, turn);
                acceleration = 3.5;
                topSpeed = 321;
            },

            'xkr': function () {

                hideOtherModel(jagur.xkr, jagurArr);
                Ui.prototype.loadModel(`${carsPath}/jagur/xkr.gltf`, turn);
                acceleration = 4.9;
                topSpeed = 280;
            },

                            // konigseg

            'one1': function () {

                hideOtherModel(konigseg.one1, konigsegArr);
                Ui.prototype.loadModel(`${carsPath}/konigseg/one1.gltf`, turn);
                acceleration = 2.5;
                topSpeed = 439;
            },

            'agera': function () {

                hideOtherModel(konigseg.agera, konigsegArr);
                Ui.prototype.loadModel(`${carsPath}/konigseg/agera.gltf`, turn);
                acceleration = 3;
                topSpeed = 432;
            },

            'ccx': function () {

                hideOtherModel(konigseg.ccx, konigsegArr);
                Ui.prototype.loadModel(`${carsPath}/konigseg/ccx.gltf`, turn);
                acceleration = 3;
                topSpeed = 402;
            },

                            // lambo

            'huracan': function () {

                hideOtherModel(lambo.huracan, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/huracan.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 325;
            },

            'diablo sv': function () {

                hideOtherModel(lambo.diablo, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/diablo-sv.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 328;
            },

            'gallardo': function () {

                hideOtherModel(lambo.gallardo, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/gallardo.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 325;
            },

            'urus': function () {

                hideOtherModel(lambo.urus, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/urus.gltf`, turn);
                acceleration = 3.6;
                topSpeed = 305;
            },

            'reventon': function () {

                hideOtherModel(lambo.reventon, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/reventon.gltf`, turn);
                acceleration = 3.4;
                topSpeed = 346;
            },

            'murcielago': function () {

                hideOtherModel(lambo.murcielago, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/murcielago.gltf`, turn);
                acceleration = 2.7;
                topSpeed = 355;
            },

            'veneno': function () {

                hideOtherModel(lambo.veneno, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/veneno.gltf`, turn);
                acceleration = 2.7;
                topSpeed = 354;
            },

            'aventador': function () {

                hideOtherModel(lambo.aventador, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/aventador.gltf`, turn);
                acceleration = 2.9;
                topSpeed = 349;
            },

            'asterion': function () {

                hideOtherModel(lambo.asterion, lamboArr);
                Ui.prototype.loadModel(`${carsPath}/lambo/asterion.gltf`, turn);
                acceleration = 3;
                topSpeed = 320;
            },

                            // lotuz

            'evora': function () {

                hideOtherModel(lotuz.evora, lotuzArr);
                Ui.prototype.loadModel(`${carsPath}/lotuz/evora.gltf`, turn);
                acceleration = 4.1;
                topSpeed = 299;
            },

            'exige s': function () {

                hideOtherModel(lotuz.exige, lotuzArr);
                Ui.prototype.loadModel(`${carsPath}/lotuz/exige-s.gltf`, turn);
                acceleration = 3.5;
                topSpeed = 273;
            },

                            //  luxus
            'gs': function () {

                hideOtherModel(luxus.gs, luxusArr);
                Ui.prototype.loadModel(`${carsPath}/luxus/gs.gltf`, turn);
                acceleration = 6;
                topSpeed = 250;
            },

            'lfa': function () {

                hideOtherModel(luxus.lfa, luxusArr);
                Ui.prototype.loadModel(`${carsPath}/luxus/lfa.gltf`, turn);
                acceleration = 3.5;
                topSpeed = 325;
            },

                            // maklaren
            'f1': function () {

                hideOtherModel(maklaren.f1, maklarenArr);
                Ui.prototype.loadModel(`${carsPath}/maklaren/f1.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 376;
            },

            'mp4': function () {

                hideOtherModel(maklaren.mp4, maklarenArr);
                Ui.prototype.loadModel(`${carsPath}/maklaren/mp4.gltf`, turn);
                acceleration = 2.9;
                topSpeed = 329;
            },

            'p1': function () {

                hideOtherModel(maklaren.p1, maklarenArr);
                Ui.prototype.loadModel(`${carsPath}/maklaren/p1.gltf`, turn);
                acceleration = 2.7;
                topSpeed = 350;
            },

            '576 gt': function () {

                hideOtherModel(maklaren.maklaren_576, maklarenArr);
                Ui.prototype.loadModel(`${carsPath}/maklaren/576-gt.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 328;
            },

            'GT': function () {

                hideOtherModel(maklaren.gt, maklarenArr);
                Ui.prototype.loadModel(`${carsPath}/maklaren/maklaren-GT.gltf`, turn);
                acceleration = 3.1;
                topSpeed = 326;
            },

                            // masda
            'MX 5': function () {

                hideOtherModel(masda.mx5, masdaArr);
                Ui.prototype.loadModel(`${carsPath}/masda/MX-5.gltf`, turn);
                acceleration = 6.5;
                topSpeed = 219;
            },

            'mx5 2016': function () {

                hideOtherModel(masda.mx5_2016, masdaArr);
                Ui.prototype.loadModel(`${carsPath}/masda/mx5-2016.gltf`, turn);
                acceleration = 6.4;
                topSpeed = 219;
            },

            'RX 7': function () {

                hideOtherModel(masda.rx7, masdaArr);
                Ui.prototype.loadModel(`${carsPath}/masda/RX-7.gltf`, turn);
                acceleration = 4.8;
                topSpeed = 255;
            },

            'RX 8': function () {

                hideOtherModel(masda.rx8, masdaArr);
                Ui.prototype.loadModel(`${carsPath}/masda/RX-8.gltf`, turn);
                acceleration = 6.5;
                topSpeed = 240;
            },

                            // maybah

            'exelero': function () {

                hideOtherModel(maybah.exelero, maybahArr);
                Ui.prototype.loadModel(`${carsPath}/maybah/exelero.gltf`, turn);
                acceleration = 4.4;
                topSpeed = 350;
            },

                            // mazerati
            'spyder': function () {

                hideOtherModel(mazerati.spyder, mazeratiArr);
                Ui.prototype.loadModel(`${carsPath}/mazerati/spyder.gltf`, turn);
                acceleration = 4.8;
                topSpeed = 283;
            },

            'G Turismo': function () {

                hideOtherModel(mazerati.gt, mazeratiArr);
                Ui.prototype.loadModel(`${carsPath}/mazerati/mazerati-GT.gltf`, turn);
                acceleration = 4.3;
                topSpeed = 302;
            },

            'mc12': function () {

                hideOtherModel(mazerati.mc12, mazeratiArr);
                Ui.prototype.loadModel(`${carsPath}/mazerati/mc12.gltf`, turn);
                acceleration = 3.8;
                topSpeed = 330;
            },

            'quatroporte': function () {

                hideOtherModel(mazerati.quatroporte, mazeratiArr);
                Ui.prototype.loadModel(`${carsPath}/mazerati/quatroporte.gltf`, turn);
                acceleration = 5.1;
                topSpeed = 285;
            },

                            // merc
            'amge gts': function () {

                hideOtherModel(merc.amge, mercArr);
                Ui.prototype.loadModel(`${carsPath}/merc/amge-gts.gltf`, turn);
                acceleration = 3.3;
                topSpeed = 313;
            },

            'cl': function () {

                hideOtherModel(merc.cl, mercArr);
                Ui.prototype.loadModel(`${carsPath}/merc/cl.gltf`, turn);
                acceleration = 4.2;
                topSpeed = 250;
            },

            'clk gtr': function () {

                hideOtherModel(merc.clk_gtr, mercArr);
                Ui.prototype.loadModel(`${carsPath}/merc/clk-gtr.gltf`, turn);
                acceleration = 3.4;
                topSpeed = 323;
            },

            'slr maklaren': function () {

                hideOtherModel(merc.slr, mercArr);
                Ui.prototype.loadModel(`${carsPath}/merc/slr-maklaren.gltf`, turn);
                acceleration = 3.5;
                topSpeed = 337;
            },

            'sls': function () {

                hideOtherModel(merc.sls, mercArr);
                Ui.prototype.loadModel(`${carsPath}/merc/sls.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 323;
            },

            'sls amge': function () {

                hideOtherModel(merc.sls_amge, mercArr);
                Ui.prototype.loadModel(`${carsPath}/merc/sls-amge.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 317;
            },

            'clk dtm': function () {

                hideOtherModel(merc.clk_dtm, mercArr);
                Ui.prototype.loadModel(`${carsPath}/merc/clk-dtm.gltf`, turn);
                acceleration = 3.9;
                topSpeed = 320;
            },

                            // mitsushi
            '3000gt': function () {

                hideOtherModel(mitsushi.mitsushi_3000gt, mitsushiArr);
                Ui.prototype.loadModel(`${carsPath}/mitsushi/3000gt.gltf`, turn);
                acceleration = 6;
                topSpeed = 250;
            },

            'eclipse': function () {

                hideOtherModel(mitsushi.eclipse, mitsushiArr);
                Ui.prototype.loadModel(`${carsPath}/mitsushi/eclipse.gltf`, turn);
                acceleration = 6.8;
                topSpeed = 226;
            },

            'lancer evolution x': function () {

                hideOtherModel(mitsushi.lancer, mitsushiArr);
                Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-evolution-x.gltf`, turn);
                acceleration = 3.8;
                topSpeed = 250;
            },

            'lancer wrc': function () {

                hideOtherModel(mitsushi.lancer_wrc, mitsushiArr);
                Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-wrc.gltf`, turn);
                acceleration = 4.9;
                topSpeed = 220;
            },

                            // nisan
            '370z': function () {

                hideOtherModel(nisan.nisan_370z, nisanArr);
                Ui.prototype.loadModel(`${carsPath}/nisan/370z.gltf`, turn);
                acceleration = 5;
                topSpeed = 275;
            },

            'gtr nizmo': function () {

                hideOtherModel(nisan.gtr_nizmo, nisanArr);
                Ui.prototype.loadModel(`${carsPath}/nisan/gtr-nizmo.gltf`, turn);
                acceleration = 2.8;
                topSpeed = 315;
            },

            'R35 GTR': function () {

                hideOtherModel(nisan.r35, nisanArr);
                Ui.prototype.loadModel(`${carsPath}/nisan/R35-GTR.gltf`, turn);
                acceleration = 2.6;
                topSpeed = 316;
            },

            'skyline gtr': function () {

                hideOtherModel(nisan.skyline, nisanArr);
                Ui.prototype.loadModel(`${carsPath}/nisan/skyline-gtr.gltf`, turn);
                acceleration = 5.2;
                topSpeed = 250;
            },

                            // opl
            'speedster': function () {

                hideOtherModel(opl.speedster, oplArr);
                Ui.prototype.loadModel(`${carsPath}/opl/speedster.gltf`, turn);
                acceleration = 6.7;
                topSpeed = 217;
            },

                            // other

            'asterisk': function () {

                hideOtherModel(other.asterisk, otherArr);
                Ui.prototype.loadModel(`${carsPath}/other/asterisk.gltf`, turn);
                acceleration = 3;
                topSpeed = 290;
            },

            'exotic car': function () {

                hideOtherModel(other.exotic, otherArr);
                Ui.prototype.loadModel(`${carsPath}/other/exotic-car.gltf`, turn);
                acceleration = 4;
                topSpeed = 290;
            },

            'concept car 2009': function () {

                hideOtherModel(other.concept_2009, otherArr);
                Ui.prototype.loadModel(`${carsPath}/other/concept-car-2009.gltf`, turn);
                acceleration = 3;
                topSpeed = 320;
            },

            'concept car5': function () {

                hideOtherModel(other.concept_5, otherArr);
                Ui.prototype.loadModel(`${carsPath}/other/concept-car5.gltf`, turn);
                acceleration = 4;
                topSpeed = 300;
            },

            'concept car 7': function () {

                hideOtherModel(other.concept_7, otherArr);
                Ui.prototype.loadModel(`${carsPath}/other/concept-car-7.gltf`, turn);
                acceleration = 3;
                topSpeed = 290;
            },

            'race car': function () {

                hideOtherModel(other.race_car, otherArr);
                Ui.prototype.loadModel(`${carsPath}/other/race-car.gltf`, turn);
                acceleration = 4;
                topSpeed = 310;
            },

            'vm x1': function () {

                hideOtherModel(other.vm, otherArr);
                Ui.prototype.loadModel(`${carsPath}/other/vm-x1.gltf`, turn);
                acceleration = 3;
                topSpeed = 280;
            },

            'wizard gt': function () {

                hideOtherModel(other.wizard, otherArr);
                Ui.prototype.loadModel(`${carsPath}/other/wizard-gt.gltf`, turn);
                acceleration = 3;
                topSpeed = 350;
            },

                            // pahani
            'zonda f': function () {

                hideOtherModel(pahani.zonda, pahaniArr);
                Ui.prototype.loadModel(`${carsPath}/pahani/zonda-f.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 366;
            },

            'huayra': function () {

                hideOtherModel(pahani.huayra, pahaniArr);
                Ui.prototype.loadModel(`${carsPath}/pahani/huayra.gltf`, turn);
                acceleration = 2.7;
                topSpeed = 370;
            },

                            // pontiak

            'firebird': function () {

                hideOtherModel(pontiak.firebird, pontiakArr);
                Ui.prototype.loadModel(`${carsPath}/pontiak/firebird.gltf`, turn);
                acceleration = 5.3;
                topSpeed = 239;
            },

            'gto': function () {

                hideOtherModel(pontiak.gto, pontiakArr);
                Ui.prototype.loadModel(`${carsPath}/pontiak/gto.gltf`, turn);
                acceleration = 4.6;
                topSpeed = 274;
            },

                            // porshe
            'carrera gt': function () {

                hideOtherModel(porshe.carrera, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/carrera-gt.gltf`, turn);
                acceleration = 3.3;
                topSpeed = 345;
            },

            '911 turbo': function () {

                hideOtherModel(porshe.porshe_911, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/911-turbo.gltf`, turn);
                acceleration = 2.4;
                topSpeed = 349;
            },

            '996': function () {

                hideOtherModel(porshe.porshe_996, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/996.gltf`, turn);
                acceleration = 3.9;
                topSpeed = 319;
            },

            'boxster': function () {

                hideOtherModel(porshe.boxster, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/boxster.gltf`, turn);
                acceleration = 6.5;
                topSpeed = 256;
            },

            'boxster s': function () {

                hideOtherModel(porshe.boxster_s, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/boxster-s.gltf`, turn);
                acceleration = 3.5;
                topSpeed = 321;
            },

            'panamera turbo': function () {

                hideOtherModel(porshe.panamera, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/panamera-turbo.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 306;
            },

            'cayman 2017': function () {

                hideOtherModel(porshe.cayman, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/cayman-2017.gltf`, turn);
                acceleration = 3.4;
                topSpeed = 321;
            },

            '918 r type': function () {

                hideOtherModel(porshe.porshe_918, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/918-r-type.gltf`, turn);
                acceleration = 2.5;
                topSpeed = 350;
            },

            '997 gt3': function () {

                hideOtherModel(porshe.porshe_997, porsheArr);
                Ui.prototype.loadModel(`${carsPath}/porshe/997-gt3.gltf`, turn);
                acceleration = 2.5;
                topSpeed = 350;
            },

                            // rols-roys
            'phantom': function () {

                                // hideOtherModel(rols_roys.phantom);
                Ui.prototype.loadModel(`${carsPath}/rols-roys/phantom.gltf`, turn);
                acceleration = 5.9;
                topSpeed = 240;
            },

                            //  rufe
            'rt 12s': function () {

                                // hideOtherModel(rufe.rt_12s);
                Ui.prototype.loadModel(`${carsPath}/rufe/rt-12s.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 362;
            },

                            // sab
            'aero x': function () {

                                // hideOtherModel(sab.aero);
                Ui.prototype.loadModel(`${carsPath}/sab/aero-x.gltf`, turn);
                acceleration = 4.9;
                topSpeed = 255;
            },

                            // salen
            's7': function () {

                                // hideOtherModel(salen.s7);
                Ui.prototype.loadModel(`${carsPath}/salen/s7.gltf`, turn);
                acceleration = 3.3;
                topSpeed = 322;
            },

                            // shelbi
            'cobra': function () {

                                // hideOtherModel(shelbi.cobra);
                Ui.prototype.loadModel(`${carsPath}/shelbi/cobra.gltf`, turn);
                acceleration = 3.8;
                topSpeed = 300;
            },

                            // tezla
            'model s': function () {

                                // hideOtherModel(tezla.model_s);
                Ui.prototype.loadModel(`${carsPath}/tezla/model-s.gltf`, turn);
                acceleration = 2.5;
                topSpeed = 249;
            },

                            // tojota
            'soarer': function () {

                                // hideOtherModel(tojota.soarer);
                Ui.prototype.loadModel(`${carsPath}/tojota/soarer.gltf`, turn);
                acceleration = 5.8;
                topSpeed = 252;
            },

                            // twr
            'sagaris': function () {

                                // hideOtherModel(twr.sagaris);
                Ui.prototype.loadModel(`${carsPath}/twr/sagaris.gltf`, turn);
                acceleration = 3.7;
                topSpeed = 295;
            },

                            // vendeta
            'gtr 800': function () {

                                // hideOtherModel(vendeta.gtr_800);
                Ui.prototype.loadModel(`${carsPath}/vendeta/gtr-800.gltf`, turn);
                acceleration = 3;
                topSpeed = 360;
            },

                            // vw
            'ego': function () {

                                // hideOtherModel(vw.ego);
                Ui.prototype.loadModel(`${carsPath}/vw/ego.gltf`, turn);
                acceleration = 4;
                topSpeed = 300;
            },

            'st1': function () {

                                // hideOtherModel(zenwo.st1);
                Ui.prototype.loadModel(`${carsPath}/zenwo/st1.gltf`, turn);
                acceleration = 3.2;
                topSpeed = 375;
            },

                            //  zubaru

            'b11s': function () {

                hideOtherModel(zubaru.b11s, zubaruArr);
                Ui.prototype.loadModel(`${carsPath}/zubaru/b11s.gltf`, turn);
                acceleration = 3;
                topSpeed = 270;
            },

            'impreza': function () {

                hideOtherModel(zubaru.impreza, zubaruArr);
                Ui.prototype.loadModel(`${carsPath}/zubaru/impreza.gltf`, turn);
                acceleration = 5.5;
                topSpeed = 255;
            }
        };
        return models;

    }

    getModelName();

                    // for debugging
    entity.addComponent("script");
                    // entity.script.create("firstPersonCamera");

    function selectCar() {
                        // remove Turn Test
        modelEntity.removeComponent('script');

                        // add test drive
        modelEntity.addComponent('script');
        modelEntity.script.create('TestDrive');

        divApp.style.display = 'none';

    }
    document.querySelector('.select-car').addEventListener('click', selectCar);

}
                // add click to models
// models.addEventListener('click', getModel);

/*
switch (trackName) {
    case 'Barcelona':
        Ui.prototype.loadModel(`${tracksPath}/testing/barcelona.gltf`);
        break;

    case 'Bathurst':
        Ui.prototype.loadModel(`${tracksPath}/Bathurst.gltf`);
        break;
    case 'Brands Hatch':
        Ui.prototype.loadModel(`${tracksPath}/Brands-Hatch.gltf`);
        break;
    case 'Hungaroring':
        Ui.prototype.loadModel(`${tracksPath}/Hungaroring.gltf`);
        break;
    case 'Indianapolis':
        Ui.prototype.loadModel(`${tracksPath}/Indianapolis.gltf`);
        break;
    case 'Interlagos':
        Ui.prototype.loadModel(`${tracksPath}/Interlagos.gltf`);
        break;
    case 'Isle of Man':
        Ui.prototype.loadModel(`${tracksPath}/Isle-of-Man.gltf`);
        break;
    case 'Kyalami':
        Ui.prototype.loadModel(`${tracksPath}/Kyalami.gltf`);
        break;
    case 'Laguna Seca':
        Ui.prototype.loadModel(`${tracksPath}/Laguna-Seca.gltf`);
        break;
    case 'Le Mans':
        Ui.prototype.loadModel(`${tracksPath}/Le-Mans.gltf`);
        break;
    case 'Magny Cours':
        Ui.prototype.loadModel(`${tracksPath}/Magny-Cours.gltf`);
        break;
    case 'Monaco':
        Ui.prototype.loadModel(`${tracksPath}/Monaco.gltf`);
        break;
    case 'Montreal':
        Ui.prototype.loadModel(`${tracksPath}/Montreal.gltf`);
        break;
    case 'Monza':
        Ui.prototype.loadModel(`${tracksPath}/Monza.gltf`);
        break;
    case 'Nurburgring':
        Ui.prototype.loadModel(`${tracksPath}/Nurburgring.gltf`);
        break;
    case 'Red Bull Ring':
        Ui.prototype.loadModel(`${tracksPath}/Red-Bull-Ring.gltf`);
        break;
    case 'Silverstone':
        Ui.prototype.loadModel(`${tracksPath}/Silverstone.gltf`);
        break;
    case 'Spa-Francorchamps':
        Ui.prototype.loadModel(`${tracksPath}/Spa-Francorchamps.gltf`);
        break;
    case 'Suzuka':
        Ui.prototype.loadModel(`${tracksPath}/Suzuka.gltf`);
        break;
    case 'Zandvoort':
        Ui.prototype.loadModel(`${tracksPath}/Zandvoort.gltf`);
        break;
                // case 'Circuit de la Sarthe':
                //    Ui.prototype.loadModel(`${tracksPath}/Circuit-de-la-Sarthe.gltf`);
                //    break;

}
*/

            // hide temporary track model
app.root.findByName('modelEntity').enabled = false;

hideTracks();


        // add click to tracks
tracksContainer.addEventListener('click', trackSelect);


function careerClick() {
    console.log('career');
}

btnCareer.addEventListener('click', careerClick);

// btnPlay.addEventListener('click', playClick);

// model from firebase
// Ui.prototype.loadModel('https://firebasestorage.googleapis.com/v0/b/supercars-dream.appspot.com/o/tezla%2Fmodel-s.gltf?alt=media&token=876feba6-f593-4e5d-8fe0-343b75fc0b19', 'TestDrive');

/* test drive */

// issue with textures path
// Ui.prototype.loadModel(`${carsPath}/akura/NZX_GT3/NZX_GT3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/aventador-roadster/aventador.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mazerati/gran-cabrio/gran-cabrio.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/green-super-sport/SuperSport.gltf`, "TestDrive");

Ui.prototype.initialize = function () {

};
