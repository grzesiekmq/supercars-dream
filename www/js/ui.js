const Ui = pc.createScript('Ui');
const carsPath = 'assets/models/cars';
const tracksPath = 'assets/models/tracks';

let modelEntity;
// const baseUrl = 'https://grzesiekmq.github.io/supercars-dream/www/';

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

// Ui.prototype.loadModel(`${carsPath}/ferari/la-ferari.gltf`, "TurnTest");






// no materials ( to fixed - to replace)

// Ui.prototype.loadModel(`${carsPath}/4udi/a8.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/4udi/tt-clubsport.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/akura/xrx.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/bmv/m3-e92.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/bmv/m5-tuning.gltf`, "TurnTest");
// Ui.prototype.loadModel(`${carsPath}/bmv/vision-efficient.gltf`, "TurnTest");

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
// Ui.prototype.loadModel(`${carsPath}/ferari/458-italia.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/lambo/murcielago.gltf`, "TurnTest"); // to fix

// Ui.prototype.loadModel(`${carsPath}/masda/mx5-2016.gltf`, "TurnTest"); // to fix



//testing

// Ui.prototype.loadModel(`${tracksPath}/testing/barcelona.gltf`);

// Ui.prototype.loadModel(`${carsPath}/4udi/avus.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/bmv/7.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/dodg/charger.gltf`, "TurnTest");

// Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-wrc.gltf`, "TurnTest");



// Ui.prototype.loadModel(`${carsPath}/lambo/reventon.gltf`, "TurnTest");






const divApp = document.querySelector('#view');

function playClick() {
    const $$ = Dom7;

    function loadTemplate(iframeId, id) {
        const iFrame = document.querySelector(iframeId);
        if (!iFrame || !iFrame.contentDocument) {
            console.log('missing iframe or iframe can not be retrieved ' + iframeId);
            return "";
        }

        const el = iFrame.contentDocument.querySelector(id);
        if (!el) {
            console.log('iframe element can not be located ' + id);
            return "";
        }

        return el;
    }

    const tpl = loadTemplate('#template-modes', '#modes');

    const template = $$(tpl).html();

    const compiledTemplate = Template7.compile(template);
    const modes = compiledTemplate();

    // add modes
    divApp.innerHTML = modes;

    const btnFree = document.querySelector('#free');
    const btnCareer = document.querySelector('#career');

    function freeClick() {
        const tpl = loadTemplate('#template-tracks', '#tracks');
        const trackImages = 'assets/models/tracks/images/';
        const context = {
            tracks: [

                {
                    name: 'Barcelona',
                    image: `${trackImages}Barcelona.jpg`
                },

                {
                    name: 'Bathurst',
                    image: `${trackImages}Bathurst.jpg`
                },

                {
                    name: 'Brands Hatch',
                    image: `${trackImages}Brands_Hatch.jpg`
                },

                /* {
                    name: 'Circuit de la Sarthe',
                    image: `${trackImages}Circuit_DeLa_Sarthe.jpg`
                }, */

                {
                    name: 'Hungaroring',
                    image: `${trackImages}Hungaroring.jpg`
                },

                {
                    name: 'Indianapolis',
                    image: `${trackImages}Indianapolis.jpg`
                },

                {
                    name: 'Interlagos',
                    image: `${trackImages}Interlagos.jpg`
                },

                {
                    name: 'Isle of Man',
                    image: `${trackImages}Isle_of_Man.jpg`
                },

                {
                    name: 'Kyalami',
                    image: `${trackImages}Kyalami.jpg`
                },

                {
                    name: 'Laguna Seca',
                    image: `${trackImages}Laguna_Seca.jpg`
                },

                {
                    name: 'Le Mans',
                    image: `${trackImages}Le_Mans.jpg`
                },

                {
                    name: 'Magny Cours',
                    image: `${trackImages}Magny_Cours.jpg`
                },

                {
                    name: 'Monaco',
                    image: `${trackImages}Monaco.jpg`
                },

                {
                    name: 'Montreal',
                    image: `${trackImages}Montreal.jpg`
                },

                {
                    name: 'Monza',
                    image: `${trackImages}Monza.jpg`
                },

                {
                    name: 'Nurburgring',
                    image: `${trackImages}Nurburgring.jpg`
                },

                {
                    name: 'Red Bull Ring',
                    image: `${trackImages}Red_Bull_Ring.jpg`
                },

                {
                    name: 'Silverstone',
                    image: `${trackImages}Silverstone.jpg`
                },

                {
                    name: 'Spa-Francorchamps',
                    image: `${trackImages}Spa-Francorchamps.jpg`
                },

                {
                    name: 'Suzuka',
                    image: `${trackImages}Suzuka.jpg`
                },

                {
                    name: 'Zandvoort',
                    image: `${trackImages}Zandvoort.jpg`
                },

            ]

        };

        const template = $$(tpl).html();
        const compiledTemplate = Template7.compile(template);

        const tracksTpl = compiledTemplate(context);



        // add tracks


        divApp.innerHTML = tracksTpl;
        // HIDDEN TRACKS JUST FOR DEBUG!!!




        const tracks = document.querySelectorAll('.tracks .row .col-20');
        const tracksContainer = document.querySelector('.tracks');

        function hideTracks() {
            tracksContainer.style.display = 'none';

        }
        function trackSelect() {
            function showMakes() {

                const tpl = loadTemplate('#template-makes', '#makes');

                const template = $$(tpl).html();
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

                const makesTpl = compiledTemplate(context);

                divApp.innerHTML = makesTpl;

            }
            function showModels() {

                const tpl = loadTemplate('#template-models', '#models');

                const template = $$(tpl).html();
                const compiledTemplate = Template7.compile(template);




                let makeName = (event.target).textContent.trim();

                let make;
                (function () {
                    switch (makeName) {
                        case '4udi':
                            make = {
                                model: ['a8', 'avus', 'r18', 'r8 fsi', 'r8 le mans', 'rs7', 'rsq', 'tt clubsport']
                            };

                            break;
                        case 'akura':
                            make = {
                                model: ['nzx', 'xrx', 'NZX GT3']
                            };
                            break;

                        case 'alfa':
                            make = {
                                model: ['8c spider', 'zagato tz3 stradale']
                            };
                            break;

                        case 'aston':
                            make = {
                                model: [
                                    'DBR9',
                                    'dbs volante',
                                    'one 77',
                                    'rapide',
                                    'v12 vanquish',
                                    'vanquish',
                                    'vantage',
                                    'vulcan'

                                ]
                            };
                            break;
                        case 'bentle':
                            make = { model: ['continental gt supersports'] };

                            break;
                        case 'bmv':
                            make = {
                                model: ['7', '8 series concept',
                                    'i8',
                                    'm3 e92',
                                    'M3 GTR',
                                    'm3',
                                    'm5 tuning',
                                    'm6',
                                    'vision efficient']
                            };

                            break;
                        case 'bugati':
                            make = { model: ['chiron', 'veyron'] };

                            break;
                        case 'cadilac':
                            make = { model: ['cien', 'cts'] };

                            break;
                        case 'chonda':
                            make = { model: ['NZX TAKATA DOME', 's2000 tuned'] };

                            break;
                        case 'citron':
                            make = { model: ['gt'] };

                            break;
                        case 'dodg':
                            make = {
                                model: ['viper gts',
                                    'viper zrt',
                                    'viper',
                                    'zrt challenger']
                            };

                            break;
                        case 'ferari':
                            make = {
                                model: ['430',
                                    '458 italia',
                                    '599',
                                    '812 superfast',
                                    'f12',
                                    'la ferari',
                                    'modena',
                                    'testarosa']
                            };

                            break;
                        case 'fort':
                            make = {
                                model: ['gt 90',
                                    'gt',
                                    'mustang salen',
                                    'mustang']
                            };

                            break;
                        case 'henesey':
                            make = { model: ['venom gt'] };

                            break;
                        case 'hevrolet':
                            make = {
                                model: ['camaro old',
                                    'camaro',
                                    'corvete concept',
                                    'corvette C7']
                            };

                            break;
                        case 'holdem':
                            make = { model: ['monaro'] };

                            break;
                        case 'hrysler':
                            make = { model: ['300c', 'crossfire', 'ME'] };

                            break;
                        case 'jagur':
                            make = { model: ['cx 75', 'f type', 'xkr'] };

                            break;
                        case 'konigseg':
                            make = { model: ['agera', 'ccx', 'one1'] };

                            break;
                        case 'lambo':
                            make = {
                                model: ['asterion',
                                    'aventador',
                                    'diablo sv',
                                    'gallardo',
                                    'huracan',
                                    'murcielago',
                                    'urus',
                                    'veneno']
                            };

                            break;
                        case 'lotuz':
                            make = { model: ['evora', 'exige s'] };

                            break;
                        case 'luxus':
                            make = { model: ['gs', 'lfa'] };

                            break;
                        case 'maklaren':
                            make = {
                                model: ['576 gt',
                                    'f1',
                                    'GT',
                                    'mp4 12c',
                                    'mp4',
                                    'p1']
                            };

                            break;
                        case 'masda':
                            make = {
                                model: ['MX 5',
                                    'mx5 2016',
                                    'RX 7',
                                    'RX 8']
                            };

                            break;
                        case 'maybah':
                            make = { model: ['exelero'] };

                            break;
                        case 'mazerati':
                            make = {
                                model: ['GT',
                                    'mc12',
                                    'quatroporte',
                                    'spyder']
                            };

                            break;
                        case 'merc':
                            make = {
                                model: ['amge gts',
                                    'cl',
                                    'clk dtm',
                                    'clk gtr',
                                    'slr maklaren',
                                    'sls amge',
                                    'sls']
                            };

                            break;
                        case 'mitsushi':
                            make = {
                                model: ['3000gt',
                                    'eclipse',
                                    'lancer evolution x'
                                ]
                            };

                            break;
                        case 'nisan':
                            make = {
                                model: ['370z',
                                    'gtr nizmo',
                                    'R35 GTR',
                                    'skyline gtr']
                            };

                            break;
                        case 'other':
                            make = {
                                model: ['asterisk',
                                    'concept car 2009',
                                    'concept car 7',
                                    'concept car5',
                                    'exotic car',
                                    'race car',
                                    'vm x1',
                                    'wizard gt']
                            };

                            break;
                        case 'pahani':
                            make = {
                                model: ['huayra',
                                    'zonda f',
                                    'zonda']
                            };

                            break;
                        case 'pontiak':
                            make = { model: ['firebird', 'gto'] };

                            break;
                        case 'porshe':
                            make = {
                                model: ['911 turbo',
                                    '918 r type',
                                    '996',
                                    '997 gt3',
                                    'boxster s',
                                    'boxster',
                                    'carrera gt',
                                    'cayman 2017',
                                    'panamera turbo']
                            };

                            break;
                        case 'rols-roys':
                            make = { model: ['phantom'] };

                            break;
                        case 'rufe':
                            make = { model: ['rt 12s'] };

                            break;
                        case 'sab':
                            make = { model: ['aero x'] };

                            break;
                        case 'salen':
                            make = { model: ['s7'] };

                            break;
                        case 'shelbi':
                            make = { model: ['cobra'] };

                            break;
                        case 'tezla':
                            make = { model: ['model s'] };

                            break;
                        case 'tojota':
                            make = { model: ['soarer'] };

                            break;
                        case 'twr':
                            make = { model: ['sagaris'] };

                            break;
                        case 'vendeta':
                            make = { model: ['gtr 800'] };

                            break;
                        case 'vw':
                            make = { model: ['ego'] };

                            break;
                        case 'zenwo':
                            make = { model: ['st1'] };

                            break;
                        case 'zubaru':
                            make = { model: ['b11s', 'impreza wrx zti', 'impreza'] };

                            break;

                    }
                    return make;
                })();

                const modelsTpl = compiledTemplate(make);



                divApp.innerHTML = modelsTpl;

                const models = document.querySelectorAll('.models .row .col-100');

                function getModel() {

                    let modelName = (event.target).textContent.trim();

                    switch (modelName) {
                        // 4udi
                        case 'a8':
                            Ui.prototype.loadModel(`${carsPath}/4udi/a8.gltf`, "TurnTest");
                            break;
                        case 'avus':
                            Ui.prototype.loadModel(`${carsPath}/4udi/avus.gltf`, "TurnTest");
                            break;
                        case 'r18':
                            Ui.prototype.loadModel(`${carsPath}/4udi/r18.gltf`, "TurnTest");
                            break;
                        case 'r8 fsi':
                            Ui.prototype.loadModel(`${carsPath}/4udi/r8-fsi.gltf`, "TurnTest");
                            break;
                        case 'r8 le mans':
                            Ui.prototype.loadModel(`${carsPath}/4udi/r8-le-mans.gltf`, "TurnTest");
                            break;
                        case 'rs7':
                            Ui.prototype.loadModel(`${carsPath}/4udi/rs7.gltf`, "TurnTest");

                            break;
                        case 'rsq':
                            Ui.prototype.loadModel(`${carsPath}/4udi/rsq.gltf`, "TurnTest");

                            break;
                        case 'tt clubsport':
                            Ui.prototype.loadModel(`${carsPath}/4udi/tt-clubsport.gltf`, "TurnTest");

                            break;

                        // akura
                        case 'nzx':
                            Ui.prototype.loadModel(`${carsPath}/akura/nzx.gltf`, "TurnTest");
                            break;




                        case 'xrx':
                            Ui.prototype.loadModel(`${carsPath}/akura/xrx.gltf`, "TurnTest");
                            break;
                        // alfa

                        case '8c spider':
                            Ui.prototype.loadModel(`${carsPath}/alfa/8c-spider.gltf`, "TurnTest");
                            break;
                        case 'zagato tz3 stradale':
                            Ui.prototype.loadModel(`${carsPath}/alfa/zagato-tz3-stradale.gltf`, "TurnTest");
                            break;
                        // aston
                        case 'DBR9':
                            Ui.prototype.loadModel(`${carsPath}/aston/DBR9.gltf`, "TurnTest");
                            break;
                        case 'rapide':
                            Ui.prototype.loadModel(`${carsPath}/aston/rapide.gltf`, "TurnTest");
                            break;
                        case 'vantage':

                            Ui.prototype.loadModel(`${carsPath}/aston/vantage.gltf`, "TurnTest");
                            break;
                        case 'dbs volante':

                            Ui.prototype.loadModel(`${carsPath}/aston/dbs-volante.gltf`, "TurnTest");
                            break;
                        case 'vanquish':

                            Ui.prototype.loadModel(`${carsPath}/aston/vanquish.gltf`, "TurnTest");
                            break;
                        case 'one 77':

                            Ui.prototype.loadModel(`${carsPath}/aston/one-77.gltf`, "TurnTest");
                            break;
                        case 'v12 vanquish':

                            Ui.prototype.loadModel(`${carsPath}/aston/v12-vanquish.gltf`, "TurnTest");
                            break;
                        case 'vulcan':

                            Ui.prototype.loadModel(`${carsPath}/aston/vulcan.gltf`, "TurnTest");
                            break;

                        // bentle
                        case 'continental gt supersports':
                            Ui.prototype.loadModel(`${carsPath}/bentle/continental-gt-supersports.gltf`, "TurnTest");
                            break;
                        // bmv

                        case '7':
                            Ui.prototype.loadModel(`${carsPath}/bmv/7.gltf`, "TurnTest");
                            break;
                        case 'm3':
                            Ui.prototype.loadModel(`${carsPath}/bmv/m3.gltf`, "TurnTest");
                            break;
                        case 'M3 GTR':
                            Ui.prototype.loadModel(`${carsPath}/bmv/M3-GTR.gltf`, "TurnTest");
                            break;

                        case '8 series concept':
                            Ui.prototype.loadModel(`${carsPath}/bmv/8-series-concept.gltf`, "TurnTest");
                            break;

                        case 'i8':
                            Ui.prototype.loadModel(`${carsPath}/bmv/i8.gltf`, "TurnTest");
                            break;

                        //  bugati
                        case 'chiron':
                            Ui.prototype.loadModel(`${carsPath}/bugati/chiron.gltf`, "TurnTest");
                            break;
                        case 'veyron':

                            Ui.prototype.loadModel(`${carsPath}/bugati/veyron.gltf`, "TurnTest");
                            break;
                        // cadilac
                        case 'cien':
                            Ui.prototype.loadModel(`${carsPath}/cadilac/cien.gltf`, "TurnTest");
                            break;
                        case 'cts':
                            Ui.prototype.loadModel(`${carsPath}/cadilac/cts.gltf`, "TurnTest");
                            break;

                        // chonda
                        case 's2000 tuned':
                            Ui.prototype.loadModel(`${carsPath}/chonda/s2000-tuned.gltf`, "TurnTest");
                            break;
                        case 'NZX TAKATA DOME':
                            Ui.prototype.loadModel(`${carsPath}/chonda/NZX TAKATA DOME.gltf`, "TurnTest");
                            break;
                        // citron
                        case 'gt':
                            Ui.prototype.loadModel(`${carsPath}/citron/gt.gltf`, "TurnTest");
                            break;

                        // dodg
                        case 'viper':

                            Ui.prototype.loadModel(`${carsPath}/dodg/viper.gltf`, "TurnTest");
                            break;
                        case 'viper zrt':
                            Ui.prototype.loadModel(`${carsPath}/dodg/viper-zrt.gltf`, "TurnTest");
                            break;
                        case 'viper gts':
                            Ui.prototype.loadModel(`${carsPath}/dodg/viper-gts.gltf`, "TurnTest");
                            break;

                        case 'zrt challenger':
                            Ui.prototype.loadModel(`${carsPath}/dodg/zrt-challenger.gltf`, "TurnTest");
                            break;

                        // ferari

                        case '599':
                            Ui.prototype.loadModel(`${carsPath}/ferari/599.gltf`, "TurnTest");
                            break;
                        case 'modena':
                            Ui.prototype.loadModel(`${carsPath}/ferari/modena.gltf`, "TurnTest");
                            break;
                        case 'testarosa':
                            Ui.prototype.loadModel(`${carsPath}/ferari/testarosa.gltf`, "TurnTest");

                            break;

                        case '812 superfast':

                            Ui.prototype.loadModel(`${carsPath}/ferari/812-superfast.gltf`, "TurnTest");
                            break;
                        case 'f12':
                            Ui.prototype.loadModel(`${carsPath}/ferari/f12.gltf`, "TurnTest");
                            break;
                        case 'la ferari':
                            Ui.prototype.loadModel(`${carsPath}/ferari/la-ferari.gltf`, "TurnTest");
                            break;

                        // fort
                        case 'gt 90':
                            Ui.prototype.loadModel(`${carsPath}/fort/gt-90.gltf`, "TurnTest");
                            break;
                        case 'mustang salen':
                            Ui.prototype.loadModel(`${carsPath}/fort/mustang-salen.gltf`, "TurnTest");
                            break;

                        case 'gt':
                            Ui.prototype.loadModel(`${carsPath}/fort/gt.gltf`, "TurnTest");
                            break;
                        case 'mustang':
                            Ui.prototype.loadModel(`${carsPath}/fort/mustang.gltf`, "TurnTest");
                            break;

                        // henesey
                        case 'venom gt':
                            Ui.prototype.loadModel(`${carsPath}/henesey/venom-gt.gltf`, "TurnTest");
                            break;

                        // hevrolet
                        case 'camaro old':
                            Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro-old.gltf`, "TurnTest");
                            break;

                        case 'camaro':
                            Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro.gltf`, "TurnTest");
                            break;
                        case 'corvette C7':
                            Ui.prototype.loadModel(`${carsPath}/hevrolet/corvette-C7.gltf`, "TurnTest");
                            break;

                        // holdem
                        case 'monaro':
                            Ui.prototype.loadModel(`${carsPath}/holdem/monaro.gltf`, "TurnTest");
                            break;

                        // hrysler
                        case '300c':
                            Ui.prototype.loadModel(`${carsPath}/hrysler/300c.gltf`, "TurnTest");
                            break;

                        case 'crossfire':
                            Ui.prototype.loadModel(`${carsPath}/hrysler/crossfire.gltf`, "TurnTest");
                            break;

                        case 'ME':
                            Ui.prototype.loadModel(`${carsPath}/hrysler/ME.gltf`, "TurnTest");
                            break;

                        // jagur

                        case 'cx 75':
                            Ui.prototype.loadModel(`${carsPath}/jagur/cx-75.gltf`, "TurnTest");

                            break;
                        case 'f type':
                            Ui.prototype.loadModel(`${carsPath}/jagur/f-type.gltf`, "TurnTest");

                            break;
                        case 'xkr':
                            Ui.prototype.loadModel(`${carsPath}/jagur/xkr.gltf`, "TurnTest");

                            break;

                        // konigseg

                        case 'one1':
                            Ui.prototype.loadModel(`${carsPath}/konigseg/one1.gltf`, "TurnTest");

                            break;

                        case 'agera':
                            Ui.prototype.loadModel(`${carsPath}/konigseg/agera.gltf`, "TurnTest");

                            break;
                        case 'ccx':
                            Ui.prototype.loadModel(`${carsPath}/konigseg/ccx.gltf`, "TurnTest");
                            break;
                        // lambo

                        case 'huracan':
                            Ui.prototype.loadModel(`${carsPath}/lambo/huracan.gltf`, "TurnTest");
                            break;
                        case 'diablo sv':

                            Ui.prototype.loadModel(`${carsPath}/lambo/diablo-sv.gltf`, "TurnTest");
                            break;
                        case 'gallardo':

                            Ui.prototype.loadModel(`${carsPath}/lambo/gallardo.gltf`, "TurnTest");
                            break;
                        case 'urus':
                            Ui.prototype.loadModel(`${carsPath}/lambo/urus.gltf`, "TurnTest");
                            break;

                        case 'veneno':

                            Ui.prototype.loadModel(`${carsPath}/lambo/veneno.gltf`, "TurnTest");
                            break;
                        case 'aventador':

                            Ui.prototype.loadModel(`${carsPath}/lambo/aventador.gltf`, "TurnTest");
                            break;
                        case 'asterion':
                            Ui.prototype.loadModel(`${carsPath}/lambo/asterion.gltf`, "TurnTest");
                            break;

                        // lotuz

                        case 'evora':
                            Ui.prototype.loadModel(`${carsPath}/lotuz/evora.gltf`, "TurnTest");
                            break;
                        case 'lfa':
                            Ui.prototype.loadModel(`${carsPath}/luxus/lfa.gltf`, "TurnTest");
                            break;
                        case 'exige s':
                            Ui.prototype.loadModel(`${carsPath}/lotuz/exige-s.gltf`, "TurnTest");

                            break;
                        //  luxus
                        case 'gs':
                            Ui.prototype.loadModel(`${carsPath}/luxus/gs.gltf`, "TurnTest");

                            break;

                        // maklaren
                        case 'f1':
                            Ui.prototype.loadModel(`${carsPath}/maklaren/f1.gltf`, "TurnTest");
                            break;

                        case 'mp4':
                            Ui.prototype.loadModel(`${carsPath}/maklaren/mp4.gltf`, "TurnTest");
                            break;

                        case 'p1':
                            Ui.prototype.loadModel(`${carsPath}/maklaren/p1.gltf`, "TurnTest");
                            break;

                        case '576 gt':
                            Ui.prototype.loadModel(`${carsPath}/maklaren/576-gt.gltf`, "TurnTest");

                            break;
                        case 'GT':
                            Ui.prototype.loadModel(`${carsPath}/maklaren/GT.gltf`, "TurnTest");

                            break;

                        // masda
                        case 'MX 5':
                            Ui.prototype.loadModel(`${carsPath}/masda/MX-5.gltf`, "TurnTest");
                            break;
                        case 'RX 7':
                            Ui.prototype.loadModel(`${carsPath}/masda/RX-7.gltf`, "TurnTest");
                            break;

                        case 'RX 8':
                            Ui.prototype.loadModel(`${carsPath}/masda/RX-8.gltf`, "TurnTest");
                            break;

                        // maybah

                        case 'exelero':
                            Ui.prototype.loadModel(`${carsPath}/maybah/exelero.gltf`, "TurnTest");

                            break;

                        // mazerati
                        case 'spyder':
                            Ui.prototype.loadModel(`${carsPath}/mazerati/spyder.gltf`, "TurnTest");
                            break;
                        case 'GT':
                            Ui.prototype.loadModel(`${carsPath}/mazerati/GT.gltf`, "TurnTest");
                            break;
                        case 'mc12':
                            Ui.prototype.loadModel(`${carsPath}/mazerati/mc12.gltf`, "TurnTest");
                            break;
                        case 'quatroporte':
                            Ui.prototype.loadModel(`${carsPath}/mazerati/quatroporte.gltf`, "TurnTest");

                            break;

                        // merc
                        case 'amge gts':
                            Ui.prototype.loadModel(`${carsPath}/merc/amge-gts.gltf`, "TurnTest");
                            break;

                        case 'cl':
                            Ui.prototype.loadModel(`${carsPath}/merc/cl.gltf`, "TurnTest");

                            break;
                        case 'clk gtr':
                            Ui.prototype.loadModel(`${carsPath}/merc/clk-gtr.gltf`, "TurnTest");

                            break;
                        case 'slr maklaren':
                            Ui.prototype.loadModel(`${carsPath}/merc/slr-maklaren.gltf`, "TurnTest");

                            break;
                        case 'sls':
                            Ui.prototype.loadModel(`${carsPath}/merc/sls.gltf`, "TurnTest");
                        case 'sls amge':
                            Ui.prototype.loadModel(`${carsPath}/merc/sls-amge.gltf`, "TurnTest");
                            break;
                        // mitsushi
                        case '3000gt':
                            Ui.prototype.loadModel(`${carsPath}/mitsushi/3000gt.gltf`, "TurnTest");

                            break;
                        case 'eclipse':
                            Ui.prototype.loadModel(`${carsPath}/mitsushi/eclipse.gltf`, "TurnTest");

                            break;
                        case 'lancer evolution x':
                            Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-evolution-x.gltf`, "TurnTest");
                            break;

                        // nisan
                        case '370z':
                            Ui.prototype.loadModel(`${carsPath}/nisan/370z.gltf`, "TurnTest");

                            break;
                        case 'gtr nizmo':
                            Ui.prototype.loadModel(`${carsPath}/nisan/gtr-nizmo.gltf`, "TurnTest");
                            break;
                        case 'R35 GTR':
                            Ui.prototype.loadModel(`${carsPath}/nisan/R35-GTR.gltf`, "TurnTest");
                            break;
                        // other
                        case 'exotic car':
                            Ui.prototype.loadModel(`${carsPath}/other/exotic-car.gltf`, "TurnTest");
                            break;
                        case 'concept car 2009':
                            Ui.prototype.loadModel(`${carsPath}/other/concept-car-2009.gltf`, "TurnTest");
                            break;

                        case 'concept car 7':
                            Ui.prototype.loadModel(`${carsPath}/other/concept-car-7.gltf`, "TurnTest");

                            break;
                        case 'race car':
                            Ui.prototype.loadModel(`${carsPath}/other/race-car.gltf`, "TurnTest");

                            break;
                        case 'vm x1':
                            Ui.prototype.loadModel(`${carsPath}/other/vm-x1.gltf`, "TurnTest");

                            break;

                        // pahani
                        case 'zonda':
                            Ui.prototype.loadModel(`${carsPath}/pahani/zonda.gltf`, "TurnTest");

                            break;
                        case 'huayra':
                            Ui.prototype.loadModel(`${carsPath}/pahani/huayra.gltf`, "TurnTest");

                            break;
                        // porshe
                        case 'carrera gt':
                            Ui.prototype.loadModel(`${carsPath}/porshe/carrera-gt.gltf`, "TurnTest");

                            break;
                        case '911 turbo':
                            Ui.prototype.loadModel(`${carsPath}/porshe/911-turbo.gltf`, "TurnTest");

                            break;
                        case '996':
                            Ui.prototype.loadModel(`${carsPath}/porshe/996.gltf`, "TurnTest");

                            break;
                        case 'boxster':
                            Ui.prototype.loadModel(`${carsPath}/porshe/boxster.gltf`, "TurnTest");

                            break;
                        case 'boxster s':
                            Ui.prototype.loadModel(`${carsPath}/porshe/boxster-s.gltf`, "TurnTest");

                            break;
                        case 'panamera turbo':
                            Ui.prototype.loadModel(`${carsPath}/porshe/panamera-turbo.gltf`, "TurnTest");

                            break;
                        case 'cayman 2017':
                            Ui.prototype.loadModel(`${carsPath}/porshe/cayman-2017.gltf`, "TurnTest");

                            break;
                        case '918 r type':
                            Ui.prototype.loadModel(`${carsPath}/porshe/918-r-type.gltf`, "TurnTest");
                            break;
                        // rols-roys
                        case 'phantom':

                            Ui.prototype.loadModel(`${carsPath}/rols-roys/phantom.gltf`, "TurnTest");
                            break;

                        case 'rt 12s':
                            Ui.prototype.loadModel(`${carsPath}/rufe/rt-12s.gltf`, "TurnTest");

                            break;

                        // salen
                        case 's7':
                            Ui.prototype.loadModel(`${carsPath}/salen/s7.gltf`, "TurnTest");

                            break;
                        // shelbi
                        case 'cobra':
                            Ui.prototype.loadModel(`${carsPath}/shelbi/cobra.gltf`, "TurnTest");

                            break;
                        // tezla
                        case 'model s':
                            Ui.prototype.loadModel(`${carsPath}/tezla/model-s.gltf`, "TurnTest");

                            break;
                        // vendeta
                        case 'gtr 800':
                            Ui.prototype.loadModel(`${carsPath}/vendeta/gtr-800.gltf`, "TurnTest");

                            break;
                        // vw
                        case 'ego':
                            Ui.prototype.loadModel(`${carsPath}/vw/ego.gltf`, "TurnTest");

                            break;

                        case 'st1':
                            Ui.prototype.loadModel(`${carsPath}/zenwo/st1.gltf`, "TurnTest");

                            break;
                        //  zubaru
                        case 'impreza wrx zti':
                            Ui.prototype.loadModel(`${carsPath}/zubaru/impreza-wrx-zti.gltf`, "TurnTest");

                            break;
                        case 'b11s':
                            Ui.prototype.loadModel(`${carsPath}/zubaru/b11s.gltf`, "TurnTest");
                            break;
                        case 'impreza':
                            Ui.prototype.loadModel(`${carsPath}/zubaru/impreza.gltf`, "TurnTest");

                            break;

                    }

                    divApp.innerHTML = `<h6 class="fg-cobalt text-center">${modelName}</h6>
                            <button class="select-car tile-medium mx-auto my-4 p-1 text-center bg-cobalt border bd-cobalt outline ol-lightTeal fg-white">Select</button>`;

                    // for debugging
                    entity.addComponent("script");
                    // entity.script.create("firstPersonCamera");

                    function selectCar() {
                        modelEntity.removeComponent('script');
                        modelEntity.removeComponent('model');

                        modelEntity.addComponent('script');
                        modelEntity.script.create('TestDrive');

                        divApp.style.display = 'none';

                    }
                    document.querySelector('.select-car').addEventListener('click', selectCar);

                }
                // add click to models
                Array.from(models)
                    .map(model => model.addEventListener('click', getModel)
                    );

            }

            let trackName = (event.target).querySelector('.item-title').textContent;

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

            // hide temporary track model
            app.root.findByName('modelEntity').enabled = false;

            hideTracks();
            showMakes();

            const makes = document.querySelectorAll('.cars .row .col-100');

            // add click to makes
            Array.from(makes)
                .map(make => make.addEventListener('click', showModels)
                );

        }
        // add click to tracks
        Array.from(tracks)
            .map(track => track.addEventListener('click', trackSelect)
            );
    }

    function careerClick() {
        console.log('career');
    }
    btnFree.addEventListener('click', freeClick);

    btnCareer.addEventListener('click', careerClick);

}

btnPlay.addEventListener('click', playClick);

// model from firebase
// Ui.prototype.loadModel('https://firebasestorage.googleapis.com/v0/b/supercars-dream.appspot.com/o/tezla%2Fmodel-s.gltf?alt=media&token=876feba6-f593-4e5d-8fe0-343b75fc0b19', 'TestDrive');

// model.removeComponent("model");

/* test drive */

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

Ui.prototype.initialize = function () {

};
