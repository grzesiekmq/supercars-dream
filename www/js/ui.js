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

// Ui.prototype.loadModel(`${carsPath}/ferari/la-ferari.gltf`, turn);

// no materials ( to fixed - to replace)

// Ui.prototype.loadModel(`${carsPath}/adi/a8.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/adi/tt-clubsport.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/akura/xrx.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/bmv/m3-e92.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/bmv/m5-tuning.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/bmv/vision-efficient.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/hevrolet/corvete-concept.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/konigseg/ccx.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/merc/clk-dtm.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/maklaren/mp4-12c.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/nisan/skyline-gtr.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/other/concept-car5.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/other/wizard-gt.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/other/asterisk.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/pahani/zonda-f.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/pontiak/firebird.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/pontiak/gto.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/porshe/997-gt3.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/sab/aero-x.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/tojota/soarer.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/twr/sagaris.gltf`, turn);

// to fix

// Ui.prototype.loadModel(`${carsPath}/bmv/m6.gltf`, turn); // to fix

// Ui.prototype.loadModel(`${carsPath}/ferari/430.gltf`, turn);
// Ui.prototype.loadModel(`${carsPath}/ferari/458-italia.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/lambo/murcielago.gltf`, turn); // to fix

// Ui.prototype.loadModel(`${carsPath}/masda/mx5-2016.gltf`, turn); // to fix

//testing

// Ui.prototype.loadModel(`${tracksPath}/testing/barcelona.gltf`);

// Ui.prototype.loadModel(`${carsPath}/adi/avus.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/bmv/7.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/dodg/charger.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-wrc.gltf`, turn);

// Ui.prototype.loadModel(`${carsPath}/lambo/reventon.gltf`, turn);

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

        const tracksContainer = document.querySelector('.tracks');

        function hideTracks() {
            tracksContainer.style.display = 'none';

        }

        // todo
        const models = {
            adi: ['a8', 'avus', 'r18', 'r8 fsi', 'r8 le mans', 'rs7', 'rsq', 'tt clubsport'],
            akura: ['nzx', 'xrx', 'NZX GT3']
        };

        let makesTpl;

        function trackSelect() {
            let makes;
            function showMakes() {

                const tpl = loadTemplate('#template-makes', '#makes');

                const template = $$(tpl).html();
                const compiledTemplate = Template7.compile(template);
                const context = {
                    makes: [
                        'adi',
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
                        'opl',
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

                makesTpl = compiledTemplate(context);

                divApp.innerHTML = makesTpl;

                makes = document.querySelector('.cars .row');

            }
            showMakes();

            function showModels() {

                const tpl = loadTemplate('#template-models', '#models');

                const template = $$(tpl).html();
                const compiledTemplate = Template7.compile(template);

                let makeName = (event.target).textContent.trim();

                let make;
                function getMake() {
                    switch (makeName) {
                        case 'adi':
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
                                model: ['7',
                                    '8 series concept',
                                    'i8',
                                    'm3 e92',
                                    'M3 GTR',
                                    'm3',
                                    'm5 tuning',
                                    'm6'
                                ]
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
                            make = { model: ['citron gt'] };

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
                            make = { model: ['c-x75', 'f type', 'xkr'] };

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
                                    'reventon',
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
                                model: ['G Turismo',
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
                        case 'opl':
                            make = {
                                model: ['speedster']
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
                                    'zonda f'
                                ]
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
                            make = { model: ['b11s', 'impreza'] };

                            break;

                    }
                    return make;
                }

                getMake();

                const modelsTpl = compiledTemplate(make);

                divApp.innerHTML = modelsTpl;

                const models = document.querySelector('.inline-list');

                const back = document.querySelector('#back');

                function goBack() {
                    divApp.innerHTML = makesTpl;

                    console.log(makes);

                }
                back.addEventListener('click', goBack);

                function getModel() {

                    let modelName = (event.target).textContent.trim();

                    let acceleration, topSpeed;

                    /* function findModelInArr()
                    {
                       return make.model.find(el => el === modelName);
                    }
                        
                        console.log('found model',  findModelInArr()); 
                    */

                    // models arrays
                    const adiArr = ['a8.gltf', 'avus.gltf', 'r18.gltf', 'r8-fsi.gltf', 'r8-le-mans.gltf', 'rs7.gltf', 'rsq.gltf', 'tt-clubsport.gltf'];
                    const akuraArr = ['nzx.gltf', 'xrx.gltf', 'NZX_GT3.gltf'];
                    const alfaArr = ['8c-spider.gltf', 'zagato-tz3-stradale.gltf'];
                    const astonArr = [
                        'DBR9.gltf',
                        'dbs-volante.gltf',
                        'one-77.gltf',
                        'rapide.gltf',
                        'v12-vanquish.gltf',
                        'vanquish.gltf',
                        'vantage.gltf',
                        'vulcan.gltf'

                    ];
                    const bentleArr = ['continental-gt-supersports.gltf'];
                    const bmvArr = ['7.gltf',
                        '8-series-concept.gltf',
                        'i8.gltf',
                        'm3-e92.gltf',
                        'M3-GTR.gltf',
                        'm3.gltf',
                        'm5-tuning.gltf',
                        'm6.gltf'
                    ];

                    const bugatiArr = ['chiron.gltf', 'veyron.gltf'];
                    const cadilacArr = ['cien.gltf', 'cts.gltf'];
                    const chondaArr = ['NZX-TAKATA-DOME.gltf', 's2000-tuned.gltf'];
                    const citronArr = ['citron-gt.gltf'];
                    const dodgArr = ['charger.gltf', 'viper-gts.gltf',
                        'viper-zrt.gltf',
                        'viper.gltf',
                        'zrt-challenger.gltf'];
                    const ferariArr = ['430.gltf',
                        '458-italia.gltf',
                        '599.gltf',
                        '812-superfast.gltf',
                        'f12.gltf',
                        'la-ferari.gltf',
                        'modena.gltf',
                        'testarosa.gltf'];
                    const fortArr = ['gt-90.gltf',
                        'fort-gt.gltf',
                        'mustang-salen.gltf',
                        'mustang.gltf'];
                    const heneseyArr = ['venom-gt.gltf'];
                    const hevroletArr = ['camaro-old.gltf',
                        'camaro.gltf',
                        'corvete-concept.gltf',
                        'corvette-C7.gltf'];
                    const holdemArr = ['monaro.gltf'];
                    const hryslerArr = ['300c.gltf', 'crossfire.gltf', 'ME.gltf'];
                    const jagurArr = ['cx-75.gltf', 'f-type.gltf', 'xkr.gltf'];
                    const konigsegArr = ['agera.gltf', 'ccx.gltf', 'one1.gltf'];
                    const lamboArr = ['asterion.gltf',
                        'aventador.gltf',
                        'diablo-sv.gltf',
                        'gallardo.gltf',
                        'huracan.gltf',
                        'murcielago.gltf',
                        'reventon.gltf',
                        'urus.gltf',
                        'veneno.gltf'];
                    const lotuzArr = ['evora.gltf', 'exige-s.gltf'];
                    const luxusArr = ['gs.gltf', 'lfa.gltf'];
                    const maklarenArr = ['576-gt.gltf',
                        'f1.gltf',
                        'maklaren-GT.gltf',
                        'mp4-12c.gltf',
                        'mp4.gltf',
                        'p1.gltf'];
                    const masdaArr = ['MX-5.gltf',
                        'mx5-2016.gltf',
                        'RX-7.gltf',
                        'RX-8.gltf'];
                    const maybahArr = ['exelero.gltf'];
                    const mazeratiArr = ['G-Turismo.gltf',
                        'mc12.gltf',
                        'quatroporte.gltf',
                        'spyder.gltf'];
                    const mercArr = ['amge-gts.gltf',
                        'cl.gltf',
                        'clk-dtm.gltf',
                        'clk-gtr.gltf',
                        'slr-maklaren.gltf',
                        'sls-amge.gltf',
                        'sls.gltf'];

                    const mitsushiArr = ['3000gt.gltf',
                        'eclipse.gltf',
                        'lancer-evolution-x.gltf'
                    ];

                    const nisanArr = ['370z.gltf',
                        'gtr-nizmo.gltf',
                        'R35-GTR.gltf',
                        'skyline-gtr.gltf'];

                    const oplArr = ['speedster.gltf'];
                    const otherArr = ['asterisk.gltf',
                        'concept-car-2009.gltf',
                        'concept-car-7.gltf',
                        'concept-car5.gltf',
                        'exotic-car.gltf',
                        'race-car.gltf',
                        'vm-x1.gltf',
                        'wizard-gt.gltf'];
                    const pahaniArr = ['huayra.gltf',
                        'zonda-f.gltf'
                    ];
                    const pontiakArr = ['firebird.gltf', 'gto.gltf'];
                    const porsheArr = ['911-turbo.gltf',
                        '918-r-type.gltf',
                        '996.gltf',
                        '997-gt3.gltf',
                        'boxster-s.gltf',
                        'boxster.gltf',
                        'carrera-gt.gltf',
                        'cayman-2017.gltf',
                        'panamera-turbo.gltf'];
                    const rols_roysArr = ['phantom.gltf'];
                    const rufeArr = ['rt-12s.gltf'];
                    const sabArr = ['aero-x.gltf'];
                    const salenArr = ['s7.gltf'];
                    const shelbiArr = ['cobra.gltf'];
                    const tezlaArr = ['model-s.gltf'];
                    const tojotaArr = ['soarer.gltf'];
                    const twrArr = ['sagaris.gltf'];
                    const vendetaArr = ['gtr-800.gltf'];
                    const vwArr = ['ego.gltf'];
                    const zenwoArr = ['st1.gltf'];
                    const zubaruArr = ['b11s.gltf', 'impreza.gltf'];

                    // makes objects

                    const adi = {
                        a8: adiArr[0],
                        avus: adiArr[1],
                        r18: adiArr[2],
                        r8_fsi: adiArr[3],
                        r8_le_mans: adiArr[4],
                        rs7: adiArr[5],
                        rsq: adiArr[6],
                        tt: adiArr[7]

                    };

                    const akura = {
                        nzx: akuraArr[0],
                        xrx: akuraArr[1],
                        nzx_GT3: akuraArr[2]
                    };

                    const alfa = {
                        alfa_8c: alfaArr[0],
                        tz3: alfaArr[1]

                    };

                    const aston = {
                        dbr9: astonArr[0],
                        dbs: astonArr[1],
                        one77: astonArr[2],
                        rapide: astonArr[3],
                        v12_vanquish: astonArr[4],
                        vanquish: astonArr[5],
                        vantage: astonArr[6],
                        vulcan: astonArr[7]
                    };

                    const bentle = {
                        continental: bentleArr[0]
                    };
                    const bmv = {
                        bmv_7: bmvArr[0],
                        bmv_8_series: bmvArr[1],
                        i8: bmvArr[2],
                        m3_e92: bmvArr[3],
                        m3_gtr: bmvArr[4],
                        m3: bmvArr[5],
                        m5: bmvArr[6],
                        m6: bmvArr[7]
                    };

                    const bugati = {
                        chiron: bugatiArr[0],
                        veyron: bugatiArr[1]
                    };

                    const cadilac = {
                        cien: cadilacArr[0],
                        cts: cadilacArr[1]
                    };

                    const chonda = {
                        nzx: chondaArr[0],
                        s2000: chondaArr[1]
                    };

                    const citron = {
                        gt: citronArr[0]
                    };
                    const dodg = {
                        charger: dodgArr[0],
                        viper_gts: dodgArr[1],
                        viper_zrt: dodgArr[2],
                        viper: dodgArr[3],
                        challenger: dodgArr[4]
                    };

                    const ferari = {
                        f430: ferariArr[0],
                        f458: ferariArr[1],
                        f599: ferariArr[2],
                        f812: ferariArr[3],
                        f12: ferariArr[4],
                        laferari: ferariArr[5],
                        modena: ferariArr[6],
                        testarosa: ferariArr[7]
                    };

                    const fort = {
                        gt90: fortArr[0],
                        gt: fortArr[1],
                        mustang_salen: fortArr[2],
                        mustang: fortArr[3]
                    };

                    const henesey = {
                        venom: heneseyArr[0]
                    };

                    const hevrolet = {
                        camaro_old: hevroletArr[0],
                        camaro: hevroletArr[1],
                        corvete_concept: hevroletArr[2],
                        corvete_c7: hevroletArr[3]
                    };

                    const holdem = {
                        monaro: holdemArr[0]
                    };

                    const hrysler = {
                        hrysler_300c: hryslerArr[0],
                        crossfire: hryslerArr[1],
                        me: hryslerArr[2]
                    };

                    const jagur = {
                        cx75: jagurArr[0],
                        f_type: jagurArr[1],
                        xkr: jagurArr[2]
                    };

                    const konigseg = {
                        agera: konigsegArr[0],
                        ccx: konigsegArr[1],
                        one1: konigsegArr[2]
                    };

                    const lambo = {
                        asterion: lamboArr[0],
                        aventador: lamboArr[1],
                        diablo: lamboArr[2],
                        gallardo: lamboArr[3],
                        huracan: lamboArr[4],
                        murcielago: lamboArr[5],
                        reventon: lamboArr[6],
                        urus: lamboArr[7],
                        veneno: lamboArr[8]
                    };

                    const lotuz = {
                        evora: lotuzArr[0],
                        exige: lotuzArr[1]
                    };

                    const luxus = {
                        gs: luxusArr[0],
                        lfa: luxusArr[1]
                    };

                    const maklaren = {
                        maklaren_576: maklarenArr[0],
                        f1: maklarenArr[1],
                        gt: maklarenArr[2],
                        mp4_12c: maklarenArr[3],
                        mp4: maklarenArr[4],
                        p1: maklarenArr[5]
                    };

                    const masda = {
                        mx5: masdaArr[0],
                        mx5_2016: masdaArr[1],
                        rx7: masdaArr[2],
                        rx8: masdaArr[3]
                    };

                    const maybah = {
                        exelero: maybahArr[0]
                    };

                    const mazerati = {
                        gt: mazeratiArr[0],
                        mc12: mazeratiArr[1],
                        quatroporte: mazeratiArr[2],
                        spyder: mazeratiArr[3]
                    };

                    const merc = {
                        amge: mercArr[0],
                        cl: mercArr[1],
                        clk_dtm: mercArr[2],
                        clk_gtr: mercArr[3],
                        slr: mercArr[4],
                        sls_amge: mercArr[5],
                        sls: mercArr[6]
                    };

                    const mitsushi = {
                        mitsushi_3000gt: mitsushiArr[0],
                        eclipse: mitsushiArr[1],
                        lancer: mitsushiArr[2]
                    };

                    const nisan = {
                        nisan_370z: nisanArr[0],
                        gtr_nizmo: nisanArr[1],
                        r35: nisanArr[2],
                        skyline: nisanArr[3]
                    };

                    const opl = {
                        speedster: oplArr[0]
                    };

                    const other = {
                        asterisk: otherArr[0],
                        concept_2009: otherArr[1],
                        concept_7: otherArr[2],
                        concept_5: otherArr[3],
                        exotic: otherArr[4],
                        race_car: otherArr[5],
                        vm: otherArr[6],
                        wizard: otherArr[7]
                    };

                    const pahani = {
                        huayra: pahaniArr[0],
                        zonda: pahaniArr[1]
                    };

                    const pontiak = {
                        firebird: pontiakArr[0],
                        gto: pontiakArr[1]
                    };

                    const porshe = {
                        porshe_911: porsheArr[0],
                        porshe_918: porsheArr[1],
                        porshe_996: porsheArr[2],
                        porshe_997: porsheArr[3],
                        boxster_s: porsheArr[4],
                        boxster: porsheArr[5],
                        carrera: porsheArr[6],
                        cayman: porsheArr[7],
                        panamera: porsheArr[8]
                    };

                    const rols_roys = {
                        phantom: rols_roysArr[0]
                    };

                    const rufe = {
                        rt_12s: rufeArr[0]
                    };

                    const sab = {
                        aero: sabArr[0]
                    };

                    const salen = {
                        s7: salenArr[0]
                    };

                    const shelbi = {
                        cobra: shelbiArr[0]
                    };

                    const tezla = {
                        model_s: tezlaArr[0]
                    };

                    const tojota = {
                        soarer: tojotaArr[0]
                    };
                    const twr = {
                        sagaris: twrArr[0]
                    };

                    const vendeta = {
                        gtr_800: vendetaArr[0]
                    };

                    const vw = {
                        ego: vwArr[0]
                    };

                    const zenwo = {
                        st1: zenwoArr[0]
                    };

                    const zubaru = {
                        b11s: zubaruArr[0],
                        impreza: zubaruArr[1]
                    };

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

                    const turn = "Turn";

                    switch (modelName) {
                        // adi
                        case 'a8':
                            // if model is in assets except of selected model
                            hideOtherModel(adi.a8, adiArr);

                            Ui.prototype.loadModel(`${carsPath}/adi/${adi.a8}`, turn);
                            if (app.assets.find(adi.a8)) {
                                // app.assets.get
                            }
                            acceleration = 4.9;
                            topSpeed = 250;
                            break;
                        case 'avus':
                            hideOtherModel(adi.avus, adiArr);

                            Ui.prototype.loadModel(`${carsPath}/adi/${adi.avus}`, turn);
                            acceleration = 2.8;
                            topSpeed = 340;
                            break;
                        case 'r18':
                            hideOtherModel(adi.r18, adiArr);

                            Ui.prototype.loadModel(`${carsPath}/adi/${adi.r18}`, turn);
                            acceleration = 2.6;
                            topSpeed = 378;
                            break;
                        case 'r8 fsi':
                            hideOtherModel(adi.r8_fsi, adiArr);
                            Ui.prototype.loadModel(`${carsPath}/adi/${adi.r8_fsi}`, turn);
                            acceleration = 3.5;
                            topSpeed = 317;
                            break;
                        case 'r8 le mans':
                            hideOtherModel(adi.r8_le_mans, adiArr);
                            Ui.prototype.loadModel(`${carsPath}/adi/${adi.r8_le_mans}`, turn);
                            acceleration = 3.5;
                            topSpeed = 317;
                            break;
                        case 'rs7':
                            hideOtherModel(adi.rs7, adiArr);
                            Ui.prototype.loadModel(`${carsPath}/adi/${adi.rs7}`, turn);
                            acceleration = 3.9;
                            topSpeed = 250;

                            break;
                        case 'rsq':
                            hideOtherModel(adi.rsq, adiArr);
                            Ui.prototype.loadModel(`${carsPath}/adi/${adi.rsq}`, turn);
                            acceleration = 4.1;
                            topSpeed = 337;
                            break;
                        case 'tt clubsport':
                            hideOtherModel(adi.tt, adiArr);
                            Ui.prototype.loadModel(`${carsPath}/adi/${adi.tt}`, turn);
                            acceleration = 4;
                            topSpeed = 249;
                            break;

                        // akura
                        case 'nzx':
                            hideOtherModel(akura.nzx, akuraArr);
                            Ui.prototype.loadModel(`${carsPath}/akura/${akura.nzx}`, turn);
                            acceleration = 4.9;
                            topSpeed = 280;
                            break;

                        case 'xrx':
                            hideOtherModel(akura.xrx, akuraArr);
                            Ui.prototype.loadModel(`${carsPath}/akura/${akura.xrx}`, turn);
                            acceleration = 3.2;
                            topSpeed = 346;
                            break;
                        // alfa

                        case '8c spider':
                            hideOtherModel(alfa.alfa_8c, alfaArr);
                            Ui.prototype.loadModel(`${carsPath}/alfa/${alfa.alfa_8c}`, turn);
                            acceleration = 4.2;
                            topSpeed = 292;
                            break;
                        case 'zagato tz3 stradale':
                            hideOtherModel(alfa.tz3, alfaArr);
                            Ui.prototype.loadModel(`${carsPath}/alfa/${alfa.tz3}`, turn);
                            acceleration = 3.6;
                            topSpeed = 325;
                            break;
                        // aston
                        case 'DBR9':
                            hideOtherModel(aston.dbr9, astonArr);
                            Ui.prototype.loadModel(`${carsPath}/aston/DBR9.gltf`, turn);
                            acceleration = 4.5;
                            topSpeed = 294;
                            break;
                        case 'rapide':
                            hideOtherModel(aston.rapide, astonArr);
                            Ui.prototype.loadModel(`${carsPath}/aston/rapide.gltf`, turn);
                            acceleration = 4.8;
                            topSpeed = 295;
                            break;
                        case 'vantage':
                            hideOtherModel(aston.vantage, astonArr);
                            Ui.prototype.loadModel(`${carsPath}/aston/vantage.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 329;
                            break;
                        case 'dbs volante':
                            hideOtherModel(aston.dbs, astonArr);
                            Ui.prototype.loadModel(`${carsPath}/aston/dbs-volante.gltf`, turn);
                            acceleration = 4.3;
                            topSpeed = 308;
                            break;
                        case 'vanquish':
                            hideOtherModel(aston.vanquish, astonArr);
                            Ui.prototype.loadModel(`${carsPath}/aston/vanquish.gltf`, turn);
                            acceleration = 4;
                            topSpeed = 294;
                            break;
                        case 'one 77':
                            hideOtherModel(aston.one77, astonArr);
                            Ui.prototype.loadModel(`${carsPath}/aston/one-77.gltf`, turn);
                            acceleration = 3.5;
                            topSpeed = 354;
                            break;
                        case 'v12 vanquish':
                            hideOtherModel(aston.v12_vanquish, astonArr);
                            Ui.prototype.loadModel(`${carsPath}/aston/v12-vanquish.gltf`, turn);
                            acceleration = 3.4;
                            topSpeed = 329;
                            break;
                        case 'vulcan':
                            hideOtherModel(aston.vulcan, astonArr);
                            Ui.prototype.loadModel(`${carsPath}/aston/vulcan.gltf`, turn);
                            acceleration = 2.9;
                            topSpeed = 345;
                            break;

                        // bentle
                        case 'continental gt supersports':
                            hideOtherModel(bentle.continental, bentleArr);
                            Ui.prototype.loadModel(`${carsPath}/bentle/continental-gt-supersports.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 328;
                            break;
                        // bmv

                        case '7':
                            hideOtherModel(bmv.bmv_7, bmvArr);
                            Ui.prototype.loadModel(`${carsPath}/bmv/7.gltf`, turn);
                            acceleration = 7.8;
                            topSpeed = 244;
                            break;
                        case 'm3':
                            hideOtherModel(bmv.m3, bmvArr);
                            Ui.prototype.loadModel(`${carsPath}/bmv/m3.gltf`, turn);
                            acceleration = 4.5;
                            topSpeed = 249;
                            break;
                        case 'm3 e92':
                            hideOtherModel(bmv.m3_e92, bmvArr);
                            Ui.prototype.loadModel(`${carsPath}/bmv/m3-e92.gltf`, turn);
                            acceleration = 4.1;
                            topSpeed = 289;
                            break;
                        case 'M3 GTR':
                            hideOtherModel(bmv.m3_gtr, bmvArr);
                            Ui.prototype.loadModel(`${carsPath}/bmv/M3-GTR.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 322;
                            break;
                        case 'm5 tuning':
                            hideOtherModel(bmv.m5, bmvArr);
                            Ui.prototype.loadModel(`${carsPath}/bmv/m5-tuning.gltf`, turn);
                            acceleration = 5.1;
                            topSpeed = 250;
                            break;
                        case '8 series concept':
                            hideOtherModel(bmv.bmv_8_series, bmvArr);
                            Ui.prototype.loadModel(`${carsPath}/bmv/8-series-concept.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 250;
                            break;

                        case 'i8':
                            hideOtherModel(bmv.i8, bmvArr);
                            Ui.prototype.loadModel(`${carsPath}/bmv/i8.gltf`, turn);
                            acceleration = 4.1;
                            topSpeed = 250;
                            break;

                        //  bugati
                        case 'chiron':
                            hideOtherModel(bugati.chiron, bugatiArr);
                            Ui.prototype.loadModel(`${carsPath}/bugati/chiron.gltf`, turn);
                            acceleration = 2.4;
                            topSpeed = 420;
                            break;
                        case 'veyron':
                            hideOtherModel(bugati.veyron, bugatiArr);
                            Ui.prototype.loadModel(`${carsPath}/bugati/veyron.gltf`, turn);
                            acceleration = 2.7;
                            topSpeed = 407;
                            break;
                        // cadilac
                        case 'cien':
                            hideOtherModel(cadilac.cien, cadilacArr);
                            Ui.prototype.loadModel(`${carsPath}/cadilac/cien.gltf`, turn);
                            acceleration = 4;
                            topSpeed = 370;
                            break;
                        case 'cts':
                            hideOtherModel(cadilac.cts, cadilacArr);
                            Ui.prototype.loadModel(`${carsPath}/cadilac/cts.gltf`, turn);
                            acceleration = 4.2;
                            topSpeed = 308;
                            break;

                        // chonda
                        case 's2000 tuned':
                            hideOtherModel(chonda.s2000, chondaArr);
                            Ui.prototype.loadModel(`${carsPath}/chonda/s2000-tuned.gltf`, turn);
                            acceleration = 5.8;
                            topSpeed = 239;
                            break;
                        case 'NZX TAKATA DOME':
                            hideOtherModel(chonda.nzx, chondaArr);
                            Ui.prototype.loadModel(`${carsPath}/chonda/NZX TAKATA DOME.gltf`, turn);
                            acceleration = 3.5;
                            topSpeed = 270;
                            break;
                        // citron
                        case 'citron gt':
                            hideOtherModel(citron.gt, citronArr);
                            Ui.prototype.loadModel(`${carsPath}/citron/citron-gt.gltf`, turn);
                            acceleration = 4;
                            topSpeed = 289;
                            break;

                        // dodg

                        case 'charger':
                            hideOtherModel(dodg.charger, dodgArr);
                            Ui.prototype.loadModel(`${carsPath}/dodg/charger.gltf`, turn);
                            acceleration = 4.8;
                            topSpeed = 267;
                            break;
                        case 'viper':
                            hideOtherModel(dodg.viper, dodgArr);
                            Ui.prototype.loadModel(`${carsPath}/dodg/viper.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 330;
                            break;
                        case 'viper zrt':
                            hideOtherModel(dodg.viper_zrt, dodgArr);
                            Ui.prototype.loadModel(`${carsPath}/dodg/viper-zrt.gltf`, turn);
                            acceleration = 3.6;
                            topSpeed = 329;
                            break;
                        case 'viper gts':
                            hideOtherModel(dodg.viper_gts, dodgArr);
                            Ui.prototype.loadModel(`${carsPath}/dodg/viper-gts.gltf`, turn);
                            acceleration = 4.3;
                            topSpeed = 284;
                            break;

                        case 'zrt challenger':
                            hideOtherModel(dodg.challenger, dodgArr);
                            Ui.prototype.loadModel(`${carsPath}/dodg/zrt-challenger.gltf`, turn);
                            acceleration = 5;
                            topSpeed = 273;
                            break;

                        // ferari

                        case '599':
                            hideOtherModel(ferari.f599, ferariArr);
                            Ui.prototype.loadModel(`${carsPath}/ferari/599.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 334;
                            break;
                        case 'modena':
                            hideOtherModel(ferari.modena, ferariArr);
                            Ui.prototype.loadModel(`${carsPath}/ferari/modena.gltf`, turn);
                            acceleration = 4.3;
                            topSpeed = 296;
                            break;
                        case '458 italia':
                            hideOtherModel(ferari.f458, ferariArr);
                            Ui.prototype.loadModel(`${carsPath}/ferari/458-italia.gltf`, turn);
                            acceleration = 3.4;
                            topSpeed = 325;
                            break;
                        case 'testarosa':
                            hideOtherModel(ferari.testarosa, ferariArr);
                            Ui.prototype.loadModel(`${carsPath}/ferari/testarosa.gltf`, turn);
                            acceleration = 5;
                            topSpeed = 289;
                            break;

                        case '812 superfast':
                            hideOtherModel(ferari.f812, ferariArr);
                            Ui.prototype.loadModel(`${carsPath}/ferari/812-superfast.gltf`, turn);
                            acceleration = 2.9;
                            topSpeed = 355;
                            break;
                        case 'f12':
                            hideOtherModel(ferari.f12, ferariArr);
                            Ui.prototype.loadModel(`${carsPath}/ferari/f12.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 339;
                            break;
                        case 'la ferari':
                            hideOtherModel(ferari.laferari, ferariArr);
                            Ui.prototype.loadModel(`${carsPath}/ferari/la-ferari.gltf`, turn);
                            acceleration = 2.9;
                            topSpeed = 349;
                            break;

                        // fort
                        case 'gt 90':
                            hideOtherModel(fort.gt90, fortArr);
                            Ui.prototype.loadModel(`${carsPath}/fort/gt-90.gltf`, turn);
                            acceleration = 3.1;
                            topSpeed = 378;
                            break;
                        case 'mustang salen':
                            hideOtherModel(fort.mustang_salen, fortArr);
                            Ui.prototype.loadModel(`${carsPath}/fort/mustang-salen.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 289;
                            break;

                        case 'gt':
                            hideOtherModel(fort.gt, fortArr);
                            Ui.prototype.loadModel(`${carsPath}/fort/fort-gt.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 347;
                            break;
                        case 'mustang':
                            hideOtherModel(fort.mustang, fortArr);
                            Ui.prototype.loadModel(`${carsPath}/fort/mustang.gltf`, turn);
                            acceleration = 4.5;
                            topSpeed = 263;
                            break;

                        // henesey
                        case 'venom gt':
                            hideOtherModel(henesey.venom, heneseyArr);
                            Ui.prototype.loadModel(`${carsPath}/henesey/venom-gt.gltf`, turn);
                            acceleration = 2.7;
                            topSpeed = 434;
                            break;

                        // hevrolet
                        case 'camaro old':
                            hideOtherModel(hevrolet.camaro_old, hevroletArr);
                            Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro-old.gltf`, turn);
                            acceleration = 3.5;
                            topSpeed = 305;
                            break;

                        case 'camaro':
                            hideOtherModel(hevrolet.camaro, hevroletArr);
                            Ui.prototype.loadModel(`${carsPath}/hevrolet/camaro.gltf`, turn);
                            acceleration = 4;
                            topSpeed = 289;
                            break;
                        case 'corvette C7':
                            hideOtherModel(hevrolet.corvete_c7, hevroletArr);
                            Ui.prototype.loadModel(`${carsPath}/hevrolet/corvette-C7.gltf`, turn);
                            acceleration = 2.9;
                            topSpeed = 321;
                            break;
                        case 'corvette concept':
                            hideOtherModel(hevrolet.corvete_concept, hevroletArr);
                            Ui.prototype.loadModel(`${carsPath}/hevrolet/corvette-concept.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 300;
                            break;

                        // holdem
                        case 'monaro':
                            hideOtherModel(holdem.monaro, holdemArr);
                            Ui.prototype.loadModel(`${carsPath}/holdem/monaro.gltf`, turn);
                            acceleration = 6;
                            topSpeed = 278;
                            break;

                        // hrysler
                        case '300c':
                            hideOtherModel(hrysler.hrysler_300c, hryslerArr);
                            Ui.prototype.loadModel(`${carsPath}/hrysler/300c.gltf`, turn);
                            acceleration = 6.2;
                            topSpeed = 240;
                            break;

                        case 'crossfire':
                            hideOtherModel(hrysler.crossfire, hryslerArr);
                            Ui.prototype.loadModel(`${carsPath}/hrysler/crossfire.gltf`, turn);
                            acceleration = 6.5;
                            topSpeed = 244;
                            break;

                        case 'ME':
                            hideOtherModel(hrysler.me, hryslerArr);
                            Ui.prototype.loadModel(`${carsPath}/hrysler/ME.gltf`, turn);
                            acceleration = 2.9;
                            topSpeed = 399;
                            break;

                        // jagur

                        case 'c-x75':
                            hideOtherModel(jagur.cx75, jagurArr);
                            Ui.prototype.loadModel(`${carsPath}/jagur/cx-75.gltf`, turn);
                            acceleration = 2.9;
                            topSpeed = 354;
                            break;
                        case 'f type':
                            hideOtherModel(jagur.f_type, jagurArr);
                            Ui.prototype.loadModel(`${carsPath}/jagur/f-type.gltf`, turn);
                            acceleration = 3.5;
                            topSpeed = 321;
                            break;
                        case 'xkr':
                            hideOtherModel(jagur.xkr, jagurArr);
                            Ui.prototype.loadModel(`${carsPath}/jagur/xkr.gltf`, turn);
                            acceleration = 4.9;
                            topSpeed = 280;
                            break;

                        // konigseg

                        case 'one1':
                            hideOtherModel(konigseg.one1, konigsegArr);
                            Ui.prototype.loadModel(`${carsPath}/konigseg/one1.gltf`, turn);
                            acceleration = 2.5;
                            topSpeed = 439;
                            break;

                        case 'agera':
                            hideOtherModel(konigseg.agera, konigsegArr);
                            Ui.prototype.loadModel(`${carsPath}/konigseg/agera.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 432;
                            break;
                        case 'ccx':
                            hideOtherModel(konigseg.ccx, konigsegArr);
                            Ui.prototype.loadModel(`${carsPath}/konigseg/ccx.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 402;
                            break;
                        // lambo

                        case 'huracan':
                            hideOtherModel(lambo.huracan, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/huracan.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 325;
                            break;
                        case 'diablo sv':
                            hideOtherModel(lambo.diablo, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/diablo-sv.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 328;
                            break;
                        case 'gallardo':
                            hideOtherModel(lambo.gallardo, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/gallardo.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 325;
                            break;
                        case 'urus':
                            hideOtherModel(lambo.urus, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/urus.gltf`, turn);
                            acceleration = 3.6;
                            topSpeed = 305;
                            break;

                        case 'reventon':
                            hideOtherModel(lambo.reventon, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/reventon.gltf`, turn);
                            acceleration = 3.4;
                            topSpeed = 346;
                            break;
                        case 'murcielago':
                            hideOtherModel(lambo.murcielago, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/murcielago.gltf`, turn);
                            acceleration = 2.7;
                            topSpeed = 355;
                            break;

                        case 'veneno':
                            hideOtherModel(lambo.veneno, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/veneno.gltf`, turn);
                            acceleration = 2.7;
                            topSpeed = 354;
                            break;
                        case 'aventador':
                            hideOtherModel(lambo.aventador, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/aventador.gltf`, turn);
                            acceleration = 2.9;
                            topSpeed = 349;
                            break;
                        case 'asterion':
                            hideOtherModel(lambo.asterion, lamboArr);
                            Ui.prototype.loadModel(`${carsPath}/lambo/asterion.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 320;
                            break;

                        // lotuz

                        case 'evora':
                            hideOtherModel(lotuz.evora, lotuzArr);
                            Ui.prototype.loadModel(`${carsPath}/lotuz/evora.gltf`, turn);
                            acceleration = 4.1;
                            topSpeed = 299;
                            break;
                        case 'exige s':
                            hideOtherModel(lotuz.exige, lotuzArr);
                            Ui.prototype.loadModel(`${carsPath}/lotuz/exige-s.gltf`, turn);
                            acceleration = 3.5;
                            topSpeed = 273;
                            break;
                        //  luxus
                        case 'gs':
                            hideOtherModel(luxus.gs, luxusArr);
                            Ui.prototype.loadModel(`${carsPath}/luxus/gs.gltf`, turn);
                            acceleration = 6;
                            topSpeed = 250;
                            break;
                        case 'lfa':
                            hideOtherModel(luxus.lfa, luxusArr);
                            Ui.prototype.loadModel(`${carsPath}/luxus/lfa.gltf`, turn);
                            acceleration = 3.5;
                            topSpeed = 325;
                            break;

                        // maklaren
                        case 'f1':
                            hideOtherModel(maklaren.f1, maklarenArr);
                            Ui.prototype.loadModel(`${carsPath}/maklaren/f1.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 376;
                            break;

                        case 'mp4':
                            hideOtherModel(maklaren.mp4, maklarenArr);
                            Ui.prototype.loadModel(`${carsPath}/maklaren/mp4.gltf`, turn);
                            acceleration = 2.9;
                            topSpeed = 329;
                            break;

                        case 'p1':
                            hideOtherModel(maklaren.p1, maklarenArr);
                            Ui.prototype.loadModel(`${carsPath}/maklaren/p1.gltf`, turn);
                            acceleration = 2.7;
                            topSpeed = 350;
                            break;

                        case '576 gt':
                            hideOtherModel(maklaren.maklaren_576, maklarenArr);
                            Ui.prototype.loadModel(`${carsPath}/maklaren/576-gt.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 328;
                            break;
                        case 'GT':
                            hideOtherModel(maklaren.gt, maklarenArr);
                            Ui.prototype.loadModel(`${carsPath}/maklaren/maklaren-GT.gltf`, turn);
                            acceleration = 3.1;
                            topSpeed = 326;
                            break;

                        // masda
                        case 'MX 5':
                            hideOtherModel(masda.mx5, masdaArr);
                            Ui.prototype.loadModel(`${carsPath}/masda/MX-5.gltf`, turn);
                            acceleration = 6.5;
                            topSpeed = 219;
                            break;
                        case 'mx5 2016':
                            hideOtherModel(masda.mx5_2016, masdaArr);
                            Ui.prototype.loadModel(`${carsPath}/masda/mx5-2016.gltf`, turn);
                            acceleration = 6.4;
                            topSpeed = 219;
                            break;
                        case 'RX 7':
                            hideOtherModel(masda.rx7, masdaArr);
                            Ui.prototype.loadModel(`${carsPath}/masda/RX-7.gltf`, turn);
                            acceleration = 4.8;
                            topSpeed = 255;
                            break;

                        case 'RX 8':
                            hideOtherModel(masda.rx8, masdaArr);
                            Ui.prototype.loadModel(`${carsPath}/masda/RX-8.gltf`, turn);
                            acceleration = 6.5;
                            topSpeed = 240;
                            break;

                        // maybah

                        case 'exelero':
                            hideOtherModel(maybah.exelero, maybahArr);
                            Ui.prototype.loadModel(`${carsPath}/maybah/exelero.gltf`, turn);
                            acceleration = 4.4;
                            topSpeed = 350;
                            break;

                        // mazerati
                        case 'spyder':
                            hideOtherModel(mazerati.spyder, mazeratiArr);
                            Ui.prototype.loadModel(`${carsPath}/mazerati/spyder.gltf`, turn);
                            acceleration = 4.8;
                            topSpeed = 283;
                            break;
                        case 'G Turismo':
                            hideOtherModel(mazerati.gt, mazeratiArr);
                            Ui.prototype.loadModel(`${carsPath}/mazerati/mazerati-GT.gltf`, turn);
                            acceleration = 4.3;
                            topSpeed = 302;
                            break;
                        case 'mc12':
                            hideOtherModel(mazerati.mc12, mazeratiArr);
                            Ui.prototype.loadModel(`${carsPath}/mazerati/mc12.gltf`, turn);
                            acceleration = 3.8;
                            topSpeed = 330;
                            break;
                        case 'quatroporte':
                            hideOtherModel(mazerati.quatroporte, mazeratiArr);
                            Ui.prototype.loadModel(`${carsPath}/mazerati/quatroporte.gltf`, turn);
                            acceleration = 5.1;
                            topSpeed = 285;
                            break;

                        // merc
                        case 'amge gts':
                            hideOtherModel(merc.amge, mercArr);
                            Ui.prototype.loadModel(`${carsPath}/merc/amge-gts.gltf`, turn);
                            acceleration = 3.3;
                            topSpeed = 313;
                            break;

                        case 'cl':
                            hideOtherModel(merc.cl, mercArr);
                            Ui.prototype.loadModel(`${carsPath}/merc/cl.gltf`, turn);
                            acceleration = 4.2;
                            topSpeed = 250;
                            break;

                        case 'clk gtr':
                            hideOtherModel(merc.clk_gtr, mercArr);
                            Ui.prototype.loadModel(`${carsPath}/merc/clk-gtr.gltf`, turn);
                            acceleration = 3.4;
                            topSpeed = 323;
                            break;
                        case 'slr maklaren':
                            hideOtherModel(merc.slr, mercArr);
                            Ui.prototype.loadModel(`${carsPath}/merc/slr-maklaren.gltf`, turn);
                            acceleration = 3.5;
                            topSpeed = 337;
                            break;
                        case 'sls':
                            hideOtherModel(merc.sls, mercArr);
                            Ui.prototype.loadModel(`${carsPath}/merc/sls.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 323;
                            break;
                        case 'sls amge':
                            hideOtherModel(merc.sls_amge, mercArr);
                            Ui.prototype.loadModel(`${carsPath}/merc/sls-amge.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 317;
                            break;

                        case 'clk dtm':
                            hideOtherModel(merc.clk_dtm, mercArr);
                            Ui.prototype.loadModel(`${carsPath}/merc/clk-dtm.gltf`, turn);
                            acceleration = 3.9;
                            topSpeed = 320;
                            break;

                        // mitsushi
                        case '3000gt':
                            hideOtherModel(mitsushi.mitsushi_3000gt, mitsushiArr);
                            Ui.prototype.loadModel(`${carsPath}/mitsushi/3000gt.gltf`, turn);
                            acceleration = 6;
                            topSpeed = 250;
                            break;
                        case 'eclipse':
                            hideOtherModel(mitsushi.eclipse, mitsushiArr);
                            Ui.prototype.loadModel(`${carsPath}/mitsushi/eclipse.gltf`, turn);
                            acceleration = 6.8;
                            topSpeed = 226;
                            break;
                        case 'lancer evolution x':
                            hideOtherModel(mitsushi.lancer, mitsushiArr);
                            Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-evolution-x.gltf`, turn);
                            acceleration = 3.8;
                            topSpeed = 250;
                            break;
                        case 'lancer wrc':
                            hideOtherModel(mitsushi.lancer_wrc, mitsushiArr);
                            Ui.prototype.loadModel(`${carsPath}/mitsushi/lancer-wrc.gltf`, turn);
                            acceleration = 4.9;
                            topSpeed = 220;
                            break;

                        // nisan
                        case '370z':
                            hideOtherModel(nisan.nisan_370z, nisanArr);
                            Ui.prototype.loadModel(`${carsPath}/nisan/370z.gltf`, turn);
                            acceleration = 5;
                            topSpeed = 275;
                            break;
                        case 'gtr nizmo':
                            hideOtherModel(nisan.gtr_nizmo, nisanArr);
                            Ui.prototype.loadModel(`${carsPath}/nisan/gtr-nizmo.gltf`, turn);
                            acceleration = 2.8;
                            topSpeed = 315;
                            break;
                        case 'R35 GTR':
                            hideOtherModel(nisan.r35, nisanArr);
                            Ui.prototype.loadModel(`${carsPath}/nisan/R35-GTR.gltf`, turn);
                            acceleration = 2.6;
                            topSpeed = 316;
                            break;

                        case 'skyline gtr':
                            hideOtherModel(nisan.skyline, nisanArr);
                            Ui.prototype.loadModel(`${carsPath}/nisan/skyline-gtr.gltf`, turn);
                            acceleration = 5.2;
                            topSpeed = 250;
                            break;

                        // opl
                        case 'speedster':
                            hideOtherModel(opl.speedster, oplArr);
                            Ui.prototype.loadModel(`${carsPath}/opl/speedster.gltf`, turn);
                            acceleration = 6.7;
                            topSpeed = 217;
                            break;

                        // other

                        case 'asterisk':
                            hideOtherModel(other.asterisk, otherArr);
                            Ui.prototype.loadModel(`${carsPath}/other/asterisk.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 290;
                            break;

                        case 'exotic car':
                            hideOtherModel(other.exotic, otherArr);
                            Ui.prototype.loadModel(`${carsPath}/other/exotic-car.gltf`, turn);
                            acceleration = 4;
                            topSpeed = 290;
                            break;
                        case 'concept car 2009':
                            hideOtherModel(other.concept_2009, otherArr);
                            Ui.prototype.loadModel(`${carsPath}/other/concept-car-2009.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 320;
                            break;

                        case 'concept car5':
                            hideOtherModel(other.concept_5, otherArr);
                            Ui.prototype.loadModel(`${carsPath}/other/concept-car5.gltf`, turn);
                            acceleration = 4;
                            topSpeed = 300;
                            break;

                        case 'concept car 7':
                            hideOtherModel(other.concept_7, otherArr);
                            Ui.prototype.loadModel(`${carsPath}/other/concept-car-7.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 290;
                            break;
                        case 'race car':
                            hideOtherModel(other.race_car, otherArr);
                            Ui.prototype.loadModel(`${carsPath}/other/race-car.gltf`, turn);
                            acceleration = 4;
                            topSpeed = 310;
                            break;
                        case 'vm x1':
                            hideOtherModel(other.vm, otherArr);
                            Ui.prototype.loadModel(`${carsPath}/other/vm-x1.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 280;
                            break;

                        case 'wizard gt':
                            hideOtherModel(other.wizard, otherArr);
                            Ui.prototype.loadModel(`${carsPath}/other/wizard-gt.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 350;
                            break;

                        // pahani
                        case 'zonda f':
                            hideOtherModel(pahani.zonda, pahaniArr);
                            Ui.prototype.loadModel(`${carsPath}/pahani/zonda-f.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 366;
                            break;
                        case 'huayra':
                            hideOtherModel(pahani.huayra, pahaniArr);
                            Ui.prototype.loadModel(`${carsPath}/pahani/huayra.gltf`, turn);
                            acceleration = 2.7;
                            topSpeed = 370;
                            break;

                        // pontiak

                        case 'firebird':
                            hideOtherModel(pontiak.firebird, pontiakArr);
                            Ui.prototype.loadModel(`${carsPath}/pontiak/firebird.gltf`, turn);
                            acceleration = 5.3;
                            topSpeed = 239;
                            break;
                        case 'gto':
                            hideOtherModel(pontiak.gto, pontiakArr);
                            Ui.prototype.loadModel(`${carsPath}/pontiak/gto.gltf`, turn);
                            acceleration = 4.6;
                            topSpeed = 274;
                            break;

                        // porshe
                        case 'carrera gt':
                            hideOtherModel(porshe.carrera, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/carrera-gt.gltf`, turn);
                            acceleration = 3.3;
                            topSpeed = 345;
                            break;
                        case '911 turbo':
                            hideOtherModel(porshe.porshe_911, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/911-turbo.gltf`, turn);
                            acceleration = 2.4;
                            topSpeed = 349;
                            break;
                        case '996':
                            hideOtherModel(porshe.porshe_996, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/996.gltf`, turn);
                            acceleration = 3.9;
                            topSpeed = 319;
                            break;
                        case 'boxster':
                            hideOtherModel(porshe.boxster, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/boxster.gltf`, turn);
                            acceleration = 6.5;
                            topSpeed = 256;
                            break;
                        case 'boxster s':
                            hideOtherModel(porshe.boxster_s, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/boxster-s.gltf`, turn);
                            acceleration = 3.5;
                            topSpeed = 321;
                            break;
                        case 'panamera turbo':
                            hideOtherModel(porshe.panamera, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/panamera-turbo.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 306;
                            break;
                        case 'cayman 2017':
                            hideOtherModel(porshe.cayman, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/cayman-2017.gltf`, turn);
                            acceleration = 3.4;
                            topSpeed = 321;
                            break;
                        case '918 r type':
                            hideOtherModel(porshe.porshe_918, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/918-r-type.gltf`, turn);
                            acceleration = 2.5;
                            topSpeed = 350;
                            break;

                        case '997 gt3':
                            hideOtherModel(porshe.porshe_997, porsheArr);
                            Ui.prototype.loadModel(`${carsPath}/porshe/997-gt3.gltf`, turn);
                            acceleration = 2.5;
                            topSpeed = 350;
                            break;

                        // rols-roys
                        case 'phantom':
                            // hideOtherModel(rols_roys.phantom);
                            Ui.prototype.loadModel(`${carsPath}/rols-roys/phantom.gltf`, turn);
                            acceleration = 5.9;
                            topSpeed = 240;
                            break;
                        //  rufe
                        case 'rt 12s':
                            // hideOtherModel(rufe.rt_12s);
                            Ui.prototype.loadModel(`${carsPath}/rufe/rt-12s.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 362;
                            break;

                        // sab
                        case 'aero x':
                            // hideOtherModel(sab.aero);
                            Ui.prototype.loadModel(`${carsPath}/sab/aero-x.gltf`, turn);
                            acceleration = 4.9;
                            topSpeed = 255;
                            break;

                        // salen
                        case 's7':
                            // hideOtherModel(salen.s7);
                            Ui.prototype.loadModel(`${carsPath}/salen/s7.gltf`, turn);
                            acceleration = 3.3;
                            topSpeed = 322;
                            break;
                        // shelbi
                        case 'cobra':
                            // hideOtherModel(shelbi.cobra);
                            Ui.prototype.loadModel(`${carsPath}/shelbi/cobra.gltf`, turn);
                            acceleration = 3.8;
                            topSpeed = 300;
                            break;
                        // tezla
                        case 'model s':
                            // hideOtherModel(tezla.model_s);
                            Ui.prototype.loadModel(`${carsPath}/tezla/model-s.gltf`, turn);
                            acceleration = 2.5;
                            topSpeed = 249;
                            break;
                        // tojota
                        case 'soarer':
                            // hideOtherModel(tojota.soarer);
                            Ui.prototype.loadModel(`${carsPath}/tojota/soarer.gltf`, turn);
                            acceleration = 5.8;
                            topSpeed = 252;
                            break;

                        // twr
                        case 'sagaris':
                            // hideOtherModel(twr.sagaris);
                            Ui.prototype.loadModel(`${carsPath}/twr/sagaris.gltf`, turn);
                            acceleration = 3.7;
                            topSpeed = 295;
                            break;

                        // vendeta
                        case 'gtr 800':
                            // hideOtherModel(vendeta.gtr_800);
                            Ui.prototype.loadModel(`${carsPath}/vendeta/gtr-800.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 360;
                            break;
                        // vw
                        case 'ego':
                            // hideOtherModel(vw.ego);
                            Ui.prototype.loadModel(`${carsPath}/vw/ego.gltf`, turn);
                            acceleration = 4;
                            topSpeed = 300;
                            break;

                        case 'st1':
                            // hideOtherModel(zenwo.st1);
                            Ui.prototype.loadModel(`${carsPath}/zenwo/st1.gltf`, turn);
                            acceleration = 3.2;
                            topSpeed = 375;
                            break;
                        //  zubaru

                        case 'b11s':
                            hideOtherModel(zubaru.b11s, zubaruArr);
                            Ui.prototype.loadModel(`${carsPath}/zubaru/b11s.gltf`, turn);
                            acceleration = 3;
                            topSpeed = 270;
                            break;
                        case 'impreza':
                            hideOtherModel(zubaru.impreza, zubaruArr);
                            Ui.prototype.loadModel(`${carsPath}/zubaru/impreza.gltf`, turn);
                            acceleration = 5.5;
                            topSpeed = 255;
                            break;

                    }

                    const tpl = loadTemplate('#template-car-info', '#car-info');

                    const template = $$(tpl).html();
                    const compiledTemplate = Template7.compile(template);

                    const model = {
                        modelName,
                        acceleration,
                        topSpeed

                    };

                    const carInfoTpl = compiledTemplate(model);

                    const divInfo = document.querySelector('.info');

                    divInfo.innerHTML = carInfoTpl;

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
                models.addEventListener('click', getModel);

            }

            // add click to makes
            makes.addEventListener('click', showModels);

            let trackName = event.target.id || (event.target).textContent;

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

        }
        // add click to tracks
        tracksContainer.addEventListener('click', trackSelect);

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

/* test drive */

// issue with textures path
// Ui.prototype.loadModel(`${carsPath}/akura/NZX_GT3/NZX_GT3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/aventador-roadster/aventador.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mazerati/gran-cabrio/gran-cabrio.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/green-super-sport/SuperSport.gltf`, "TestDrive");

Ui.prototype.initialize = function () {

};
