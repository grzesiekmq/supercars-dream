const Ui = pc.createScript('Ui');
const carsPath = 'assets/models/cars';
const tracksPath = 'assets/models/tracks';

let modelEntity;
// const baseUrl = 'https://grzesiekmq.github.io/supercars-dream/www/';

entity.addComponent("script");
entity.script.create(Ui);

Ui.prototype.loadModel = function(modelUrl, scriptName) {
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
            // modelEntity.model.entity.rotate(0, 0, 0);
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

// Ui.prototype.loadModel(`${carsPath}/ferari/la-ferari.gltf`, "Model");

// Ui.prototype.loadModel(`${carsPath}/aston/DBR9.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/aston/rapide.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/aston/vantage.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/aston/dbs-volante.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/aston/vanquish.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/aston/one-77.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/aston/v12-vanquish.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/aston/vulcan.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/4udi/rsq.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/4udi/rs7.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/4udi/r8-fsi.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/4udi/r18.gltf`, "TurnTest");
            // Ui.prototype.loadModel(`${carsPath}/4udi/avus.gltf`, "TurnTest");


// Ui.prototype.loadModel(`${carsPath}/akura/nzx.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/alfa/zagato-tz3-stradale.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/bentle/continental-gt-supersports.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/bmv/m3.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/bmv/8-series-concept.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/cadilac/cien.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/chonda/s2000-tuned.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/chonda/NZX TAKATA DOME.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/citron/gt.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/dodg/viper.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/dodg/viper-zrt.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/dodg/viper-gts.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/ferari/599.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/ferari/modena.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/ferari/testarosa.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/fort/gt-90.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/fort/mustang-salen.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro-old.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/holdem/monaro.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/hrysler/ME.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/hrysler/300c.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/hrysler/crossfire.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/jagur/xkr.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/konigseg/one1.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/lambo/aventador.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/lambo/asterion.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/lotuz/evora.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/luxus/gs.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/maklaren/576-gt.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/maklaren/GT.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/masda/MX-5.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/masda/RX-7.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/masda/RX-8.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/mazerati/spyder.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/mazerati/quatroporte.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/merc/amge-gts.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/merc/cl.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/merc/clk-gtr.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/merc/slr-maklaren.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/merc/sls.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/mitsushi/3000gt.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/mitsushi/eclipse.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/nisan/370z.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/other/exotic-car.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/other/concept-car-2009.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/other/concept-car-7.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/other/race-car.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/other/vm-x1.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/porshe/carrera-gt.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/porshe/911-turbo.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/porshe/996.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/porshe/boxster.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/porshe/boxster-s.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/porshe/panamera-turbo.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/porshe/cayman-2017.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/salen/s7.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/shelbi/cobra.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/vendeta/gtr-800.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/vw/ego.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/zenwo/st1.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/zubaru/impreza-wrx-zti.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/zubaru/b11s.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/zubaru/impreza.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/bmv/i8.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/bugati/chiron.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/bugati/veyron.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/dodg/zrt-challenger.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/ferari/812-superfast.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/ferari/f12.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/fort/gt.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/fort/mustang.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/henesey/venom-gt.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/hevrolet/corvette-C7.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/jagur/f-type.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/jagur/cx-75.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/konigseg/agera.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/lambo/huracan.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/lambo/diablo-sv.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/lambo/gallardo.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/lambo/urus.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/lambo/veneno.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/lotuz/exige-s.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/maklaren/f1.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/maklaren/mp4.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/maklaren/p1.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/maybah/exelero.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/mazerati/GT.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/merc/sls-amge.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-evolution-x.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/nisan/gtr-nizmo.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/pahani/zonda.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/pahani/huayra.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/porshe/918-r-type.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/rols-roys/phantom.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/rufe/rt-12s.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/tezla/model-s.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/bmv/M3-GTR.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/luxus/lfa.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/mazerati/mc12.gltf`, "TurnTest");

// no materials ( to fixed)

// Ui.prototype.loadModel(`${carsPath}/4udi/a8.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/4udi/tt-clubsport.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/akura/xrx.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/aston/aston-rapide.gltf`, "TurnTest"); // to delete

// Ui.prototype.loadModel(`${carsPath}/bmv/m3-e92.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/bmv/m5-tuning.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/bmv/vision-efficient.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/cadilac/cts.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/hevrolet/corvete-concept.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/konigseg/ccx.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/merc/clk-dtm.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/maklaren/mp4-12c.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/nisan/skyline-gtr.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/other/concept-car5.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/other/wizard-gt.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/other/asterisk.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/pahani/zonda-f.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/pontiak/firebird.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/pontiak/gto.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/porshe/997-gt3.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/sab/aero-x.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/tojota/soarer.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/twr/sagaris.gltf`, "TurnTest");

// to fix

// Ui.prototype.loadModel(`${carsPath}/bmv/m6.gltf`, "TurnTest"); // to fix
// Ui.prototype.loadModel(`${carsPath}/ferari/430.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/lambo/murcielago.gltf`, "TurnTest"); // to fix
// Ui.prototype.loadModel(`${carsPath}/ferari/458-italia.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/masda/mx5-2016.gltf`, "TurnTest"); // to fix

const overlay = document.querySelector('.overlay');
const divApp = document.querySelector('#app');

function hideOverlay() {
    overlay.style.display = "none";

}








function playClick() {

    const $$ = Dom7;
    const template = $$('#template-tracks').html();
    const compiledTemplate = Template7.compile(template);
    const trackImages = 'assets/models/tracks/images/';
    const context = {
        tracks: [

            { name: 'Barcelona' },
            { image: `${trackImages}Barcelona.jpg` },

            { name: 'Bathurst' },
            { image: `${trackImages}Bathurst.jpg` },

            { name: 'Brands_Hatch' },
            { image: `${trackImages}Brands_Hatch.jpg` },

            { name: 'Circuit_DeLa_Sarthe' },
            { image: `${trackImages}Circuit_DeLa_Sarthe.jpg` },

            { name: 'Hungaroring' },
            { image: `${trackImages}Hungaroring.jpg` },

            { name: 'Indianapolis' },
            { image: `${trackImages}Indianapolis.jpg` },

            { name: 'Interlagos' },
            { image: `${trackImages}Interlagos.jpg` },

            { name: 'Isle_of_Man' },
            { image: `${trackImages}Isle_of_Man.jpg` },

            { name: 'Kyalami' },
            { image: `${trackImages}Kyalami.jpg` },

            { name: 'Laguna_Seca' },
            { image: `${trackImages}Laguna_Seca.jpg` },

            { name: 'Le_Mans' },
            { image: `${trackImages}Le_Mans.jpg` },

            { name: 'Magny_Cours' },
            { image: `${trackImages}Magny_Cours.jpg` },

            { name: 'Monaco' },
            { image: `${trackImages}Monaco.jpg` },

            { name: 'Montreal' },
            { image: `${trackImages}Montreal.jpg` },

            { name: 'Monza' },
            { image: `${trackImages}Monza.jpg` },

            { name: 'Nurburgring' },
            { image: `${trackImages}Nurburgring.jpg` },

            { name: 'Red_Bull_Ring' },
            { image: `${trackImages}Red_Bull_Ring.jpg` },

            { name: 'Silverstone' },
            { image: `${trackImages}Silverstone.jpg` },

            { name: 'Spa-Francorchamps' },
            { image: `${trackImages}Spa-Francorchamps.jpg` },

            { name: 'Suzuka' },
            { image: `${trackImages}Suzuka.jpg` },

            { name: 'Zandvoort' },
            { image: `${trackImages}Zandvoort.jpg` }

        ]

    };
    const html = compiledTemplate(context);

    // console.log(html);

    overlay.innerHTML = html;

    const track = document.querySelector('.tracks .row .col-20');
    const tracks = document.querySelector('.tracks');
    const tracksTitle = document.querySelector('.tracks-title');
    const make = document.querySelector('.tracks .row .col-20');

    function hideTracks() {
        tracks.style.display = 'none';

    }

    function trackSelect() {


Ui.prototype.loadModel(`${tracksPath}/testing/barcelona.gltf`);

// hide temporary track model
app.root.findByName('modelEntity').enabled = false;


        hideTracks();
        carSelect();

    }


    function carSelect() {

        const template = $$('#template-cars').html();
        const compiledTemplate = Template7.compile(template);
        const context = {
            makes: [
                '4udi',
                'akura',
                'alfa',
                'aston',
                'bentle',
                'bmv',
                'bugati',
                'cadilac',
                'chonda',
                'citron',
                'dodg',
                'ferari',
                'fort',
                'henesey',
                'hevrolet',
                'holdem',
                'hrysler',
                'jagur',
                'konigseg',
                'lambo',
                'lotuz',
                'luxus',
                'maklaren',
                'masda',
                'maybah',
                'mazerati',
                'merc',
                'mitsushi',
                'nisan',
                'other',
                'pahani',
                'pontiak',
                'porshe',
                'rols-roys',
                'rufe',
                'sab',
                'salen',
                'shelbi',
                'tezla',
                'tojota',
                'twr',
                'vendeta',
                'vw',
                'zenwo',
                'zubaru'
            ]
        };

        const html = compiledTemplate(context);

        function makeSelect() {


            overlay.innerHTML = html;


        }

        function modelSelect() {
                    const template = $$('#template-models').html();
        const compiledTemplate = Template7.compile(template);
        const context = {
            a4udi: ['a8', 'avus', 'r18', 'r8-fsi', 'rs7', 'rsq', 'tt-clubsport'],
            akura: ['nzx', 'xrx', 'NZX_GT3'],


        };
        function getMake()
        {


        // if (event.target.value === context.a4udi) {
        //     console.log(event.target);
        //     return context.a4udi;
        // }
        


        }
        function getModel()
        {
            hideOverlay();

Ui.prototype.loadModel(`${carsPath}/aston/DBR9.gltf`, "TurnTest");

divApp.innerHTML = `DBR9
<button class="select-car">Select</button>`;


// for debugging
entity.addComponent("script");
  // entity.script.create("firstPersonCamera");



function selectCar()
{
    modelEntity.removeComponent('script');
    modelEntity.removeComponent('model');

    modelEntity.addComponent('script');
    modelEntity.script.create('TestDrive');




}
document.querySelector('.select-car').addEventListener('click', selectCar);

        }

                const html = compiledTemplate(context);

                overlay.innerHTML = html;
        getModel();
        }
        makeSelect();
        modelSelect();



    make.addEventListener('touchstart', makeSelect);
    }

    track.addEventListener('click', trackSelect);
}

btnPlay.addEventListener('click', playClick);

// model from firebase
// Ui.prototype.loadModel('https://firebasestorage.googleapis.com/v0/b/supercars-dream.appspot.com/o/tezla%2Fmodel-s.gltf?alt=media&token=876feba6-f593-4e5d-8fe0-343b75fc0b19', 'TestDrive');

// model.removeComponent("model");

/* wrong position */
// Ui.prototype.loadModel(`${carsPath}/bmv/8-series-concept.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/bmv/i8.gltf`, "TestDrive");

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





// issue with textures path
// Ui.prototype.loadModel(`${carsPath}/akura/NZX_GT3/NZX_GT3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/aventador-roadster/aventador.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mazerati/gran-cabrio/Cabrio.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/green-super-sport/SuperSport.gltf`, "TestDrive");

/* working             */
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

Ui.prototype.initialize = function() {

};