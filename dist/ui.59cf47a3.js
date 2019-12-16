// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/ui.js":[function(require,module,exports) {
var Ui = pc.createScript('Ui');
var carsPath = 'assets/models/cars';
var tracksPath = 'assets/models/tracks';
var modelEntity;
entity.addComponent("script");
entity.script.create(Ui);

Ui.prototype.loadModel = function (modelUrl, scriptName) {
  function callback(err, asset) {
    var json = asset.resource;
    var gltf = JSON.parse(json);

    function afterLoad(err, res) {
      console.log('err', err);
      asset.resource = res.model;
      asset.loaded = true;
      app.assets.add(asset);
      modelEntity = new pc.Entity('modelEntity');
      var options = {
        type: "asset",
        asset: asset
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
}; // turn test - has model materials?
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


var divApp = document.querySelector('#view');

function playClick() {
  var $$ = Dom7;

  function loadTemplate(iframeId, id) {
    var iFrame = document.querySelector(iframeId);

    if (!iFrame || !iFrame.contentDocument) {
      console.log('missing iframe or iframe can not be retrieved ' + iframeId);
      return "";
    }

    var el = iFrame.contentDocument.querySelector(id);

    if (!el) {
      console.log('iframe element can not be located ' + id);
      return "";
    }

    return el;
  }

  var tpl = loadTemplate('#template-modes', '#modes');
  var template = $$(tpl).html();
  var compiledTemplate = Template7.compile(template);
  var modes = compiledTemplate(); // add modes

  divApp.innerHTML = modes;
  var btnFree = document.querySelector('#free');
  var btnCareer = document.querySelector('#career');

  function freeClick() {
    var tpl = loadTemplate('#template-tracks', '#tracks');
    var trackImages = 'assets/models/tracks/images/';
    var context = {
      tracks: [{
        name: 'Barcelona',
        image: "".concat(trackImages, "Barcelona.jpg")
      }, {
        name: 'Bathurst',
        image: "".concat(trackImages, "Bathurst.jpg")
      }, {
        name: 'Brands Hatch',
        image: "".concat(trackImages, "Brands_Hatch.jpg")
      },
      /* {
          name: 'Circuit de la Sarthe',
          image: `${trackImages}Circuit_DeLa_Sarthe.jpg`
      }, */
      {
        name: 'Hungaroring',
        image: "".concat(trackImages, "Hungaroring.jpg")
      }, {
        name: 'Indianapolis',
        image: "".concat(trackImages, "Indianapolis.jpg")
      }, {
        name: 'Interlagos',
        image: "".concat(trackImages, "Interlagos.jpg")
      }, {
        name: 'Isle of Man',
        image: "".concat(trackImages, "Isle_of_Man.jpg")
      }, {
        name: 'Kyalami',
        image: "".concat(trackImages, "Kyalami.jpg")
      }, {
        name: 'Laguna Seca',
        image: "".concat(trackImages, "Laguna_Seca.jpg")
      }, {
        name: 'Le Mans',
        image: "".concat(trackImages, "Le_Mans.jpg")
      }, {
        name: 'Magny Cours',
        image: "".concat(trackImages, "Magny_Cours.jpg")
      }, {
        name: 'Monaco',
        image: "".concat(trackImages, "Monaco.jpg")
      }, {
        name: 'Montreal',
        image: "".concat(trackImages, "Montreal.jpg")
      }, {
        name: 'Monza',
        image: "".concat(trackImages, "Monza.jpg")
      }, {
        name: 'Nurburgring',
        image: "".concat(trackImages, "Nurburgring.jpg")
      }, {
        name: 'Red Bull Ring',
        image: "".concat(trackImages, "Red_Bull_Ring.jpg")
      }, {
        name: 'Silverstone',
        image: "".concat(trackImages, "Silverstone.jpg")
      }, {
        name: 'Spa-Francorchamps',
        image: "".concat(trackImages, "Spa-Francorchamps.jpg")
      }, {
        name: 'Suzuka',
        image: "".concat(trackImages, "Suzuka.jpg")
      }, {
        name: 'Zandvoort',
        image: "".concat(trackImages, "Zandvoort.jpg")
      }]
    };
    var template = $$(tpl).html();
    var compiledTemplate = Template7.compile(template);
    var tracksTpl = compiledTemplate(context); // add tracks

    divApp.innerHTML = tracksTpl; // HIDDEN TRACKS JUST FOR DEBUG!!!

    var tracksContainer = document.querySelector('.tracks');

    function hideTracks() {
      tracksContainer.style.display = 'none';
    }

    var makesTpl;

    function trackSelect() {
      var makes;

      function showMakes() {
        var tpl = loadTemplate('#template-makes', '#makes');
        var template = $$(tpl).html();
        var compiledTemplate = Template7.compile(template);
        var context = {
          makes: ['adi', 'akura', 'alfa', 'aston', 'bentle', 'bmv', 'bugati', 'cadilac', 'chonda', 'citron', 'dodg', 'ferari', 'fort', 'henesey', 'hevrolet', 'holdem', 'hrysler', 'jagur', 'konigseg', 'lambo', 'lotuz', 'luxus', 'maklaren', 'masda', 'maybah', 'mazerati', 'merc', 'mitsushi', 'nisan', 'opl', 'other', 'pahani', 'pontiak', 'porshe', 'rols-roys', 'rufe', 'sab', 'salen', 'shelbi', 'tezla', 'tojota', 'twr', 'vendeta', 'vw', 'zenwo', 'zubaru']
        }; // console.log(cars.adi.length);

        makesTpl = compiledTemplate(context);
        divApp.innerHTML = makesTpl;
        makes = document.querySelector('.cars .row');
      }

      showMakes();

      function showModels() {
        getCars();
        var tpl = loadTemplate('#template-models', '#models');
        var template = $$(tpl).html();
        var compiledTemplate = Template7.compile(template);
        var makeName = event.target.textContent.trim();

        function getMake() {
          var cars = {
            'adi': {
              model: ['a8', 'avus', 'r18', 'r8 fsi', 'r8 le mans', 'rs7', 'rsq', 'tt clubsport']
            },
            'akura': {
              model: ['nzx', 'xrx', 'NZX GT3']
            },
            'alfa': {
              model: ['8c spider', 'zagato tz3 stradale']
            },
            'aston': {
              model: ['DBR9', 'dbs volante', 'one 77', 'rapide', 'v12 vanquish', 'vanquish', 'vantage', 'vulcan']
            },
            'bentle': {
              model: ['continental gt supersports']
            },
            'bmv': {
              model: ['7', '8 series concept', 'i8', 'm3 e92', 'M3 GTR', 'm3', 'm5 tuning', 'm6']
            },
            'bugati': {
              model: ['chiron', 'veyron']
            },
            'cadilac': {
              model: ['cien', 'cts']
            },
            'chonda': {
              model: ['NZX TAKATA DOME', 's2000 tuned']
            },
            'citron': {
              model: ['citron gt']
            },
            'dodg': {
              model: ['viper gts', 'viper zrt', 'viper', 'zrt challenger']
            },
            'ferari': {
              model: ['430', '458 italia', '599', '812 superfast', 'f12', 'la ferari', 'modena', 'testarosa']
            },
            'fort': {
              model: ['gt 90', 'gt', 'mustang salen', 'mustang']
            },
            'henesey': {
              model: ['venom gt']
            },
            'hevrolet': {
              model: ['camaro old', 'camaro', 'corvete concept', 'corvette C7']
            },
            'holdem': {
              model: ['monaro']
            },
            'hrysler': {
              model: ['300c', 'crossfire', 'ME']
            },
            'jagur': {
              model: ['c-x75', 'f type', 'xkr']
            },
            'konigseg': {
              model: ['agera', 'ccx', 'one1']
            },
            'lambo': {
              model: ['asterion', 'aventador', 'diablo sv', 'gallardo', 'huracan', 'murcielago', 'reventon', 'urus', 'veneno']
            },
            'lotuz': {
              model: ['evora', 'exige s']
            },
            'luxus': {
              model: ['gs', 'lfa']
            },
            'maklaren': {
              model: ['576 gt', 'f1', 'GT', 'mp4 12c', 'mp4', 'p1']
            },
            'masda': {
              model: ['MX 5', 'mx5 2016', 'RX 7', 'RX 8']
            },
            'maybah': {
              model: ['exelero']
            },
            'mazerati': {
              model: ['G Turismo', 'mc12', 'quatroporte', 'spyder']
            },
            'merc': {
              model: ['amge gts', 'cl', 'clk dtm', 'clk gtr', 'slr maklaren', 'sls amge', 'sls']
            },
            'mitsushi': {
              model: ['3000gt', 'eclipse', 'lancer evolution x']
            },
            'nisan': {
              model: ['370z', 'gtr nizmo', 'R35 GTR', 'skyline gtr']
            },
            'opl': {
              model: ['speedster']
            },
            'other': {
              model: ['asterisk', 'concept car 2009', 'concept car 7', 'concept car5', 'exotic car', 'race car', 'vm x1', 'wizard gt']
            },
            'pahani': {
              model: ['huayra', 'zonda f']
            },
            'pontiak': {
              model: ['firebird', 'gto']
            },
            'porshe': {
              model: ['911 turbo', '918 r type', '996', '997 gt3', 'boxster s', 'boxster', 'carrera gt', 'cayman 2017', 'panamera turbo']
            },
            'rols-roys': {
              model: ['phantom']
            },
            'rufe': {
              model: ['rt 12s']
            },
            'sab': {
              model: ['aero x']
            },
            'salen': {
              model: ['s7']
            },
            'shelbi': {
              model: ['cobra']
            },
            'tezla': {
              model: ['model s']
            },
            'tojota': {
              model: ['soarer']
            },
            'twr': {
              model: ['sagaris']
            },
            'vendeta': {
              model: ['gtr 800']
            },
            'vw': {
              model: ['ego']
            },
            'zenwo': {
              model: ['st1']
            },
            'zubaru': {
              model: ['b11s', 'impreza']
            }
          };
          return cars;
        }

        getMake();
        var modelsTpl = compiledTemplate(cars);
        divApp.innerHTML = modelsTpl;
        var models = document.querySelector('.inline-list');
        var back = document.querySelector('#back');

        function goBack() {
          divApp.innerHTML = makesTpl;
          console.log(makes);
        }

        function getModel() {
          var modelName = event.target.textContent.trim();
          var acceleration, topSpeed;
          /* function findModelInArr()
          {
             return make.model.find(el => el === modelName);
          }
              
              console.log('found model',  findModelInArr()); 
          */
          // models arrays

          var adiArr = ['a8.gltf', 'avus.gltf', 'r18.gltf', 'r8-fsi.gltf', 'r8-le-mans.gltf', 'rs7.gltf', 'rsq.gltf', 'tt-clubsport.gltf'];
          var akuraArr = ['nzx.gltf', 'xrx.gltf', 'NZX_GT3.gltf'];
          var alfaArr = ['8c-spider.gltf', 'zagato-tz3-stradale.gltf'];
          var astonArr = ['DBR9.gltf', 'dbs-volante.gltf', 'one-77.gltf', 'rapide.gltf', 'v12-vanquish.gltf', 'vanquish.gltf', 'vantage.gltf', 'vulcan.gltf'];
          var bentleArr = ['continental-gt-supersports.gltf'];
          var bmvArr = ['7.gltf', '8-series-concept.gltf', 'i8.gltf', 'm3-e92.gltf', 'M3-GTR.gltf', 'm3.gltf', 'm5-tuning.gltf', 'm6.gltf'];
          var bugatiArr = ['chiron.gltf', 'veyron.gltf'];
          var cadilacArr = ['cien.gltf', 'cts.gltf'];
          var chondaArr = ['NZX-TAKATA-DOME.gltf', 's2000-tuned.gltf'];
          var citronArr = ['citron-gt.gltf'];
          var dodgArr = ['charger.gltf', 'viper-gts.gltf', 'viper-zrt.gltf', 'viper.gltf', 'zrt-challenger.gltf'];
          var ferariArr = ['430.gltf', '458-italia.gltf', '599.gltf', '812-superfast.gltf', 'f12.gltf', 'la-ferari.gltf', 'modena.gltf', 'testarosa.gltf'];
          var fortArr = ['gt-90.gltf', 'fort-gt.gltf', 'mustang-salen.gltf', 'mustang.gltf'];
          var heneseyArr = ['venom-gt.gltf'];
          var hevroletArr = ['camaro-old.gltf', 'camaro.gltf', 'corvete-concept.gltf', 'corvette-C7.gltf'];
          var holdemArr = ['monaro.gltf'];
          var hryslerArr = ['300c.gltf', 'crossfire.gltf', 'ME.gltf'];
          var jagurArr = ['cx-75.gltf', 'f-type.gltf', 'xkr.gltf'];
          var konigsegArr = ['agera.gltf', 'ccx.gltf', 'one1.gltf'];
          var lamboArr = ['asterion.gltf', 'aventador.gltf', 'diablo-sv.gltf', 'gallardo.gltf', 'huracan.gltf', 'murcielago.gltf', 'reventon.gltf', 'urus.gltf', 'veneno.gltf'];
          var lotuzArr = ['evora.gltf', 'exige-s.gltf'];
          var luxusArr = ['gs.gltf', 'lfa.gltf'];
          var maklarenArr = ['576-gt.gltf', 'f1.gltf', 'maklaren-GT.gltf', 'mp4-12c.gltf', 'mp4.gltf', 'p1.gltf'];
          var masdaArr = ['MX-5.gltf', 'mx5-2016.gltf', 'RX-7.gltf', 'RX-8.gltf'];
          var maybahArr = ['exelero.gltf'];
          var mazeratiArr = ['G-Turismo.gltf', 'mc12.gltf', 'quatroporte.gltf', 'spyder.gltf'];
          var mercArr = ['amge-gts.gltf', 'cl.gltf', 'clk-dtm.gltf', 'clk-gtr.gltf', 'slr-maklaren.gltf', 'sls-amge.gltf', 'sls.gltf'];
          var mitsushiArr = ['3000gt.gltf', 'eclipse.gltf', 'lancer-evolution-x.gltf'];
          var nisanArr = ['370z.gltf', 'gtr-nizmo.gltf', 'R35-GTR.gltf', 'skyline-gtr.gltf'];
          var oplArr = ['speedster.gltf'];
          var otherArr = ['asterisk.gltf', 'concept-car-2009.gltf', 'concept-car-7.gltf', 'concept-car5.gltf', 'exotic-car.gltf', 'race-car.gltf', 'vm-x1.gltf', 'wizard-gt.gltf'];
          var pahaniArr = ['huayra.gltf', 'zonda-f.gltf'];
          var pontiakArr = ['firebird.gltf', 'gto.gltf'];
          var porsheArr = ['911-turbo.gltf', '918-r-type.gltf', '996.gltf', '997-gt3.gltf', 'boxster-s.gltf', 'boxster.gltf', 'carrera-gt.gltf', 'cayman-2017.gltf', 'panamera-turbo.gltf'];
          var rols_roysArr = ['phantom.gltf'];
          var rufeArr = ['rt-12s.gltf'];
          var sabArr = ['aero-x.gltf'];
          var salenArr = ['s7.gltf'];
          var shelbiArr = ['cobra.gltf'];
          var tezlaArr = ['model-s.gltf'];
          var tojotaArr = ['soarer.gltf'];
          var twrArr = ['sagaris.gltf'];
          var vendetaArr = ['gtr-800.gltf'];
          var vwArr = ['ego.gltf'];
          var zenwoArr = ['st1.gltf'];
          var zubaruArr = ['b11s.gltf', 'impreza.gltf']; // makes objects

          var adi = {
            a8: adiArr[0],
            avus: adiArr[1],
            r18: adiArr[2],
            r8_fsi: adiArr[3],
            r8_le_mans: adiArr[4],
            rs7: adiArr[5],
            rsq: adiArr[6],
            tt: adiArr[7]
          };
          var akura = {
            nzx: akuraArr[0],
            xrx: akuraArr[1],
            nzx_GT3: akuraArr[2]
          };
          var alfa = {
            alfa_8c: alfaArr[0],
            tz3: alfaArr[1]
          };
          var aston = {
            dbr9: astonArr[0],
            dbs: astonArr[1],
            one77: astonArr[2],
            rapide: astonArr[3],
            v12_vanquish: astonArr[4],
            vanquish: astonArr[5],
            vantage: astonArr[6],
            vulcan: astonArr[7]
          };
          var bentle = {
            continental: bentleArr[0]
          };
          var bmv = {
            bmv_7: bmvArr[0],
            bmv_8_series: bmvArr[1],
            i8: bmvArr[2],
            m3_e92: bmvArr[3],
            m3_gtr: bmvArr[4],
            m3: bmvArr[5],
            m5: bmvArr[6],
            m6: bmvArr[7]
          };
          var bugati = {
            chiron: bugatiArr[0],
            veyron: bugatiArr[1]
          };
          var cadilac = {
            cien: cadilacArr[0],
            cts: cadilacArr[1]
          };
          var chonda = {
            nzx: chondaArr[0],
            s2000: chondaArr[1]
          };
          var citron = {
            gt: citronArr[0]
          };
          var dodg = {
            charger: dodgArr[0],
            viper_gts: dodgArr[1],
            viper_zrt: dodgArr[2],
            viper: dodgArr[3],
            challenger: dodgArr[4]
          };
          var ferari = {
            f430: ferariArr[0],
            f458: ferariArr[1],
            f599: ferariArr[2],
            f812: ferariArr[3],
            f12: ferariArr[4],
            laferari: ferariArr[5],
            modena: ferariArr[6],
            testarosa: ferariArr[7]
          };
          var fort = {
            gt90: fortArr[0],
            gt: fortArr[1],
            mustang_salen: fortArr[2],
            mustang: fortArr[3]
          };
          var henesey = {
            venom: heneseyArr[0]
          };
          var hevrolet = {
            camaro_old: hevroletArr[0],
            camaro: hevroletArr[1],
            corvete_concept: hevroletArr[2],
            corvete_c7: hevroletArr[3]
          };
          var holdem = {
            monaro: holdemArr[0]
          };
          var hrysler = {
            hrysler_300c: hryslerArr[0],
            crossfire: hryslerArr[1],
            me: hryslerArr[2]
          };
          var jagur = {
            cx75: jagurArr[0],
            f_type: jagurArr[1],
            xkr: jagurArr[2]
          };
          var konigseg = {
            agera: konigsegArr[0],
            ccx: konigsegArr[1],
            one1: konigsegArr[2]
          };
          var lambo = {
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
          var lotuz = {
            evora: lotuzArr[0],
            exige: lotuzArr[1]
          };
          var luxus = {
            gs: luxusArr[0],
            lfa: luxusArr[1]
          };
          var maklaren = {
            maklaren_576: maklarenArr[0],
            f1: maklarenArr[1],
            gt: maklarenArr[2],
            mp4_12c: maklarenArr[3],
            mp4: maklarenArr[4],
            p1: maklarenArr[5]
          };
          var masda = {
            mx5: masdaArr[0],
            mx5_2016: masdaArr[1],
            rx7: masdaArr[2],
            rx8: masdaArr[3]
          };
          var maybah = {
            exelero: maybahArr[0]
          };
          var mazerati = {
            gt: mazeratiArr[0],
            mc12: mazeratiArr[1],
            quatroporte: mazeratiArr[2],
            spyder: mazeratiArr[3]
          };
          var merc = {
            amge: mercArr[0],
            cl: mercArr[1],
            clk_dtm: mercArr[2],
            clk_gtr: mercArr[3],
            slr: mercArr[4],
            sls_amge: mercArr[5],
            sls: mercArr[6]
          };
          var mitsushi = {
            mitsushi_3000gt: mitsushiArr[0],
            eclipse: mitsushiArr[1],
            lancer: mitsushiArr[2]
          };
          var nisan = {
            nisan_370z: nisanArr[0],
            gtr_nizmo: nisanArr[1],
            r35: nisanArr[2],
            skyline: nisanArr[3]
          };
          var opl = {
            speedster: oplArr[0]
          };
          var other = {
            asterisk: otherArr[0],
            concept_2009: otherArr[1],
            concept_7: otherArr[2],
            concept_5: otherArr[3],
            exotic: otherArr[4],
            race_car: otherArr[5],
            vm: otherArr[6],
            wizard: otherArr[7]
          };
          var pahani = {
            huayra: pahaniArr[0],
            zonda: pahaniArr[1]
          };
          var pontiak = {
            firebird: pontiakArr[0],
            gto: pontiakArr[1]
          };
          var porshe = {
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
          var rols_roys = {
            phantom: rols_roysArr[0]
          };
          var rufe = {
            rt_12s: rufeArr[0]
          };
          var sab = {
            aero: sabArr[0]
          };
          var salen = {
            s7: salenArr[0]
          };
          var shelbi = {
            cobra: shelbiArr[0]
          };
          var tezla = {
            model_s: tezlaArr[0]
          };
          var tojota = {
            soarer: tojotaArr[0]
          };
          var twr = {
            sagaris: twrArr[0]
          };
          var vendeta = {
            gtr_800: vendetaArr[0]
          };
          var vw = {
            ego: vwArr[0]
          };
          var zenwo = {
            st1: zenwoArr[0]
          };
          var zubaru = {
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
            if (makesArr.filter(function (el) {
              return el !== name;
            }).some(function (el) {
              return app.assets.find(el);
            })) {
              hideModel();
            }
          }

          var turn = "Turn";

          function getModelName(modelName) {
            var models = {
              // adi
              'a8': function a8() {
                // if model is in assets except of selected model
                hideOtherModel(adi.a8, adiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/adi/").concat(adi.a8), turn);

                if (app.assets.find(adi.a8)) {// app.assets.get
                }

                acceleration = 4.9;
                topSpeed = 250;
              },
              'avus': function avus() {
                hideOtherModel(adi.avus, adiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/adi/").concat(adi.avus), turn);
                acceleration = 2.8;
                topSpeed = 340;
              },
              'r18': function r18() {
                hideOtherModel(adi.r18, adiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/adi/").concat(adi.r18), turn);
                acceleration = 2.6;
                topSpeed = 378;
              },
              'r8 fsi': function r8Fsi() {
                hideOtherModel(adi.r8_fsi, adiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/adi/").concat(adi.r8_fsi), turn);
                acceleration = 3.5;
                topSpeed = 317;
              },
              'r8 le mans': function r8LeMans() {
                hideOtherModel(adi.r8_le_mans, adiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/adi/").concat(adi.r8_le_mans), turn);
                acceleration = 3.5;
                topSpeed = 317;
              },
              'rs7': function rs7() {
                hideOtherModel(adi.rs7, adiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/adi/").concat(adi.rs7), turn);
                acceleration = 3.9;
                topSpeed = 250;
              },
              'rsq': function rsq() {
                hideOtherModel(adi.rsq, adiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/adi/").concat(adi.rsq), turn);
                acceleration = 4.1;
                topSpeed = 337;
              },
              'tt clubsport': function ttClubsport() {
                hideOtherModel(adi.tt, adiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/adi/").concat(adi.tt), turn);
                acceleration = 4;
                topSpeed = 249;
              },
              // akura
              'nzx': function nzx() {
                hideOtherModel(akura.nzx, akuraArr);
                Ui.prototype.loadModel("".concat(carsPath, "/akura/").concat(akura.nzx), turn);
                acceleration = 4.9;
                topSpeed = 280;
              },
              'xrx': function xrx() {
                hideOtherModel(akura.xrx, akuraArr);
                Ui.prototype.loadModel("".concat(carsPath, "/akura/").concat(akura.xrx), turn);
                acceleration = 3.2;
                topSpeed = 346;
              },
              // alfa
              '8c spider': function cSpider() {
                hideOtherModel(alfa.alfa_8c, alfaArr);
                Ui.prototype.loadModel("".concat(carsPath, "/alfa/").concat(alfa.alfa_8c), turn);
                acceleration = 4.2;
                topSpeed = 292;
              },
              'zagato tz3 stradale': function zagatoTz3Stradale() {
                hideOtherModel(alfa.tz3, alfaArr);
                Ui.prototype.loadModel("".concat(carsPath, "/alfa/").concat(alfa.tz3), turn);
                acceleration = 3.6;
                topSpeed = 325;
              },
              // aston
              'DBR9': function DBR9() {
                hideOtherModel(aston.dbr9, astonArr);
                Ui.prototype.loadModel("".concat(carsPath, "/aston/DBR9.gltf"), turn);
                acceleration = 4.5;
                topSpeed = 294;
              },
              'rapide': function rapide() {
                hideOtherModel(aston.rapide, astonArr);
                Ui.prototype.loadModel("".concat(carsPath, "/aston/rapide.gltf"), turn);
                acceleration = 4.8;
                topSpeed = 295;
              },
              'vantage': function vantage() {
                hideOtherModel(aston.vantage, astonArr);
                Ui.prototype.loadModel("".concat(carsPath, "/aston/vantage.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 329;
              },
              'dbs volante': function dbsVolante() {
                hideOtherModel(aston.dbs, astonArr);
                Ui.prototype.loadModel("".concat(carsPath, "/aston/dbs-volante.gltf"), turn);
                acceleration = 4.3;
                topSpeed = 308;
              },
              'vanquish': function vanquish() {
                hideOtherModel(aston.vanquish, astonArr);
                Ui.prototype.loadModel("".concat(carsPath, "/aston/vanquish.gltf"), turn);
                acceleration = 4;
                topSpeed = 294;
              },
              'one 77': function one77() {
                hideOtherModel(aston.one77, astonArr);
                Ui.prototype.loadModel("".concat(carsPath, "/aston/one-77.gltf"), turn);
                acceleration = 3.5;
                topSpeed = 354;
              },
              'v12 vanquish': function v12Vanquish() {
                hideOtherModel(aston.v12_vanquish, astonArr);
                Ui.prototype.loadModel("".concat(carsPath, "/aston/v12-vanquish.gltf"), turn);
                acceleration = 3.4;
                topSpeed = 329;
              },
              'vulcan': function vulcan() {
                hideOtherModel(aston.vulcan, astonArr);
                Ui.prototype.loadModel("".concat(carsPath, "/aston/vulcan.gltf"), turn);
                acceleration = 2.9;
                topSpeed = 345;
              },
              // bentle
              'continental gt supersports': function continentalGtSupersports() {
                hideOtherModel(bentle.continental, bentleArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bentle/continental-gt-supersports.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 328;
              },
              // bmv
              '7': function _() {
                hideOtherModel(bmv.bmv_7, bmvArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bmv/7.gltf"), turn);
                acceleration = 7.8;
                topSpeed = 244;
              },
              'm3': function m3() {
                hideOtherModel(bmv.m3, bmvArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bmv/m3.gltf"), turn);
                acceleration = 4.5;
                topSpeed = 249;
              },
              'm3 e92': function m3E92() {
                hideOtherModel(bmv.m3_e92, bmvArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bmv/m3-e92.gltf"), turn);
                acceleration = 4.1;
                topSpeed = 289;
              },
              'M3 GTR': function M3GTR() {
                hideOtherModel(bmv.m3_gtr, bmvArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bmv/M3-GTR.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 322;
              },
              'm5 tuning': function m5Tuning() {
                hideOtherModel(bmv.m5, bmvArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bmv/m5-tuning.gltf"), turn);
                acceleration = 5.1;
                topSpeed = 250;
              },
              '8 series concept': function seriesConcept() {
                hideOtherModel(bmv.bmv_8_series, bmvArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bmv/8-series-concept.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 250;
              },
              'i8': function i8() {
                hideOtherModel(bmv.i8, bmvArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bmv/i8.gltf"), turn);
                acceleration = 4.1;
                topSpeed = 250;
              },
              //  bugati
              'chiron': function chiron() {
                hideOtherModel(bugati.chiron, bugatiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bugati/chiron.gltf"), turn);
                acceleration = 2.4;
                topSpeed = 420;
              },
              'veyron': function veyron() {
                hideOtherModel(bugati.veyron, bugatiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/bugati/veyron.gltf"), turn);
                acceleration = 2.7;
                topSpeed = 407;
              },
              // cadilac
              'cien': function cien() {
                hideOtherModel(cadilac.cien, cadilacArr);
                Ui.prototype.loadModel("".concat(carsPath, "/cadilac/cien.gltf"), turn);
                acceleration = 4;
                topSpeed = 370;
              },
              'cts': function cts() {
                hideOtherModel(cadilac.cts, cadilacArr);
                Ui.prototype.loadModel("".concat(carsPath, "/cadilac/cts.gltf"), turn);
                acceleration = 4.2;
                topSpeed = 308;
              },
              // chonda
              's2000 tuned': function s2000Tuned() {
                hideOtherModel(chonda.s2000, chondaArr);
                Ui.prototype.loadModel("".concat(carsPath, "/chonda/s2000-tuned.gltf"), turn);
                acceleration = 5.8;
                topSpeed = 239;
              },
              'NZX TAKATA DOME': function NZXTAKATADOME() {
                hideOtherModel(chonda.nzx, chondaArr);
                Ui.prototype.loadModel("".concat(carsPath, "/chonda/NZX TAKATA DOME.gltf"), turn);
                acceleration = 3.5;
                topSpeed = 270;
              },
              // citron
              'citron gt': function citronGt() {
                hideOtherModel(citron.gt, citronArr);
                Ui.prototype.loadModel("".concat(carsPath, "/citron/citron-gt.gltf"), turn);
                acceleration = 4;
                topSpeed = 289;
              },
              // dodg
              'charger': function charger() {
                hideOtherModel(dodg.charger, dodgArr);
                Ui.prototype.loadModel("".concat(carsPath, "/dodg/charger.gltf"), turn);
                acceleration = 4.8;
                topSpeed = 267;
              },
              'viper': function viper() {
                hideOtherModel(dodg.viper, dodgArr);
                Ui.prototype.loadModel("".concat(carsPath, "/dodg/viper.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 330;
              },
              'viper zrt': function viperZrt() {
                hideOtherModel(dodg.viper_zrt, dodgArr);
                Ui.prototype.loadModel("".concat(carsPath, "/dodg/viper-zrt.gltf"), turn);
                acceleration = 3.6;
                topSpeed = 329;
              },
              'viper gts': function viperGts() {
                hideOtherModel(dodg.viper_gts, dodgArr);
                Ui.prototype.loadModel("".concat(carsPath, "/dodg/viper-gts.gltf"), turn);
                acceleration = 4.3;
                topSpeed = 284;
              },
              'zrt challenger': function zrtChallenger() {
                hideOtherModel(dodg.challenger, dodgArr);
                Ui.prototype.loadModel("".concat(carsPath, "/dodg/zrt-challenger.gltf"), turn);
                acceleration = 5;
                topSpeed = 273;
              },
              // ferari
              '599': function _() {
                hideOtherModel(ferari.f599, ferariArr);
                Ui.prototype.loadModel("".concat(carsPath, "/ferari/599.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 334;
              },
              'modena': function modena() {
                hideOtherModel(ferari.modena, ferariArr);
                Ui.prototype.loadModel("".concat(carsPath, "/ferari/modena.gltf"), turn);
                acceleration = 4.3;
                topSpeed = 296;
              },
              '458 italia': function italia() {
                hideOtherModel(ferari.f458, ferariArr);
                Ui.prototype.loadModel("".concat(carsPath, "/ferari/458-italia.gltf"), turn);
                acceleration = 3.4;
                topSpeed = 325;
              },
              'testarosa': function testarosa() {
                hideOtherModel(ferari.testarosa, ferariArr);
                Ui.prototype.loadModel("".concat(carsPath, "/ferari/testarosa.gltf"), turn);
                acceleration = 5;
                topSpeed = 289;
              },
              '812 superfast': function superfast() {
                hideOtherModel(ferari.f812, ferariArr);
                Ui.prototype.loadModel("".concat(carsPath, "/ferari/812-superfast.gltf"), turn);
                acceleration = 2.9;
                topSpeed = 355;
              },
              'f12': function f12() {
                hideOtherModel(ferari.f12, ferariArr);
                Ui.prototype.loadModel("".concat(carsPath, "/ferari/f12.gltf"), turn);
                acceleration = 3;
                topSpeed = 339;
              },
              'la ferari': function laFerari() {
                hideOtherModel(ferari.laferari, ferariArr);
                Ui.prototype.loadModel("".concat(carsPath, "/ferari/la-ferari.gltf"), turn);
                acceleration = 2.9;
                topSpeed = 349;
              },
              // fort
              'gt 90': function gt90() {
                hideOtherModel(fort.gt90, fortArr);
                Ui.prototype.loadModel("".concat(carsPath, "/fort/gt-90.gltf"), turn);
                acceleration = 3.1;
                topSpeed = 378;
              },
              'mustang salen': function mustangSalen() {
                hideOtherModel(fort.mustang_salen, fortArr);
                Ui.prototype.loadModel("".concat(carsPath, "/fort/mustang-salen.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 289;
              },
              'gt': function gt() {
                hideOtherModel(fort.gt, fortArr);
                Ui.prototype.loadModel("".concat(carsPath, "/fort/fort-gt.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 347;
              },
              'mustang': function mustang() {
                hideOtherModel(fort.mustang, fortArr);
                Ui.prototype.loadModel("".concat(carsPath, "/fort/mustang.gltf"), turn);
                acceleration = 4.5;
                topSpeed = 263;
              },
              // henesey
              'venom gt': function venomGt() {
                hideOtherModel(henesey.venom, heneseyArr);
                Ui.prototype.loadModel("".concat(carsPath, "/henesey/venom-gt.gltf"), turn);
                acceleration = 2.7;
                topSpeed = 434;
              },
              // hevrolet
              'camaro old': function camaroOld() {
                hideOtherModel(hevrolet.camaro_old, hevroletArr);
                Ui.prototype.loadModel("".concat(carsPath, "/hevrolet/camaro-old.gltf"), turn);
                acceleration = 3.5;
                topSpeed = 305;
              },
              'camaro': function camaro() {
                hideOtherModel(hevrolet.camaro, hevroletArr);
                Ui.prototype.loadModel("".concat(carsPath, "/hevrolet/camaro.gltf"), turn);
                acceleration = 4;
                topSpeed = 289;
              },
              'corvette C7': function corvetteC7() {
                hideOtherModel(hevrolet.corvete_c7, hevroletArr);
                Ui.prototype.loadModel("".concat(carsPath, "/hevrolet/corvette-C7.gltf"), turn);
                acceleration = 2.9;
                topSpeed = 321;
              },
              'corvette concept': function corvetteConcept() {
                hideOtherModel(hevrolet.corvete_concept, hevroletArr);
                Ui.prototype.loadModel("".concat(carsPath, "/hevrolet/corvette-concept.gltf"), turn);
                acceleration = 3;
                topSpeed = 300;
              },
              // holdem
              'monaro': function monaro() {
                hideOtherModel(holdem.monaro, holdemArr);
                Ui.prototype.loadModel("".concat(carsPath, "/holdem/monaro.gltf"), turn);
                acceleration = 6;
                topSpeed = 278;
              },
              // hrysler
              '300c': function c() {
                hideOtherModel(hrysler.hrysler_300c, hryslerArr);
                Ui.prototype.loadModel("".concat(carsPath, "/hrysler/300c.gltf"), turn);
                acceleration = 6.2;
                topSpeed = 240;
              },
              'crossfire': function crossfire() {
                hideOtherModel(hrysler.crossfire, hryslerArr);
                Ui.prototype.loadModel("".concat(carsPath, "/hrysler/crossfire.gltf"), turn);
                acceleration = 6.5;
                topSpeed = 244;
              },
              'ME': function ME() {
                hideOtherModel(hrysler.me, hryslerArr);
                Ui.prototype.loadModel("".concat(carsPath, "/hrysler/ME.gltf"), turn);
                acceleration = 2.9;
                topSpeed = 399;
              },
              // jagur
              'c-x75': function cX75() {
                hideOtherModel(jagur.cx75, jagurArr);
                Ui.prototype.loadModel("".concat(carsPath, "/jagur/cx-75.gltf"), turn);
                acceleration = 2.9;
                topSpeed = 354;
              },
              'f type': function fType() {
                hideOtherModel(jagur.f_type, jagurArr);
                Ui.prototype.loadModel("".concat(carsPath, "/jagur/f-type.gltf"), turn);
                acceleration = 3.5;
                topSpeed = 321;
              },
              'xkr': function xkr() {
                hideOtherModel(jagur.xkr, jagurArr);
                Ui.prototype.loadModel("".concat(carsPath, "/jagur/xkr.gltf"), turn);
                acceleration = 4.9;
                topSpeed = 280;
              },
              // konigseg
              'one1': function one1() {
                hideOtherModel(konigseg.one1, konigsegArr);
                Ui.prototype.loadModel("".concat(carsPath, "/konigseg/one1.gltf"), turn);
                acceleration = 2.5;
                topSpeed = 439;
              },
              'agera': function agera() {
                hideOtherModel(konigseg.agera, konigsegArr);
                Ui.prototype.loadModel("".concat(carsPath, "/konigseg/agera.gltf"), turn);
                acceleration = 3;
                topSpeed = 432;
              },
              'ccx': function ccx() {
                hideOtherModel(konigseg.ccx, konigsegArr);
                Ui.prototype.loadModel("".concat(carsPath, "/konigseg/ccx.gltf"), turn);
                acceleration = 3;
                topSpeed = 402;
              },
              // lambo
              'huracan': function huracan() {
                hideOtherModel(lambo.huracan, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/huracan.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 325;
              },
              'diablo sv': function diabloSv() {
                hideOtherModel(lambo.diablo, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/diablo-sv.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 328;
              },
              'gallardo': function gallardo() {
                hideOtherModel(lambo.gallardo, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/gallardo.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 325;
              },
              'urus': function urus() {
                hideOtherModel(lambo.urus, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/urus.gltf"), turn);
                acceleration = 3.6;
                topSpeed = 305;
              },
              'reventon': function reventon() {
                hideOtherModel(lambo.reventon, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/reventon.gltf"), turn);
                acceleration = 3.4;
                topSpeed = 346;
              },
              'murcielago': function murcielago() {
                hideOtherModel(lambo.murcielago, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/murcielago.gltf"), turn);
                acceleration = 2.7;
                topSpeed = 355;
              },
              'veneno': function veneno() {
                hideOtherModel(lambo.veneno, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/veneno.gltf"), turn);
                acceleration = 2.7;
                topSpeed = 354;
              },
              'aventador': function aventador() {
                hideOtherModel(lambo.aventador, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/aventador.gltf"), turn);
                acceleration = 2.9;
                topSpeed = 349;
              },
              'asterion': function asterion() {
                hideOtherModel(lambo.asterion, lamboArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lambo/asterion.gltf"), turn);
                acceleration = 3;
                topSpeed = 320;
              },
              // lotuz
              'evora': function evora() {
                hideOtherModel(lotuz.evora, lotuzArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lotuz/evora.gltf"), turn);
                acceleration = 4.1;
                topSpeed = 299;
              },
              'exige s': function exigeS() {
                hideOtherModel(lotuz.exige, lotuzArr);
                Ui.prototype.loadModel("".concat(carsPath, "/lotuz/exige-s.gltf"), turn);
                acceleration = 3.5;
                topSpeed = 273;
              },
              //  luxus
              'gs': function gs() {
                hideOtherModel(luxus.gs, luxusArr);
                Ui.prototype.loadModel("".concat(carsPath, "/luxus/gs.gltf"), turn);
                acceleration = 6;
                topSpeed = 250;
              },
              'lfa': function lfa() {
                hideOtherModel(luxus.lfa, luxusArr);
                Ui.prototype.loadModel("".concat(carsPath, "/luxus/lfa.gltf"), turn);
                acceleration = 3.5;
                topSpeed = 325;
              },
              // maklaren
              'f1': function f1() {
                hideOtherModel(maklaren.f1, maklarenArr);
                Ui.prototype.loadModel("".concat(carsPath, "/maklaren/f1.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 376;
              },
              'mp4': function mp4() {
                hideOtherModel(maklaren.mp4, maklarenArr);
                Ui.prototype.loadModel("".concat(carsPath, "/maklaren/mp4.gltf"), turn);
                acceleration = 2.9;
                topSpeed = 329;
              },
              'p1': function p1() {
                hideOtherModel(maklaren.p1, maklarenArr);
                Ui.prototype.loadModel("".concat(carsPath, "/maklaren/p1.gltf"), turn);
                acceleration = 2.7;
                topSpeed = 350;
              },
              '576 gt': function gt() {
                hideOtherModel(maklaren.maklaren_576, maklarenArr);
                Ui.prototype.loadModel("".concat(carsPath, "/maklaren/576-gt.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 328;
              },
              'GT': function GT() {
                hideOtherModel(maklaren.gt, maklarenArr);
                Ui.prototype.loadModel("".concat(carsPath, "/maklaren/maklaren-GT.gltf"), turn);
                acceleration = 3.1;
                topSpeed = 326;
              },
              // masda
              'MX 5': function MX5() {
                hideOtherModel(masda.mx5, masdaArr);
                Ui.prototype.loadModel("".concat(carsPath, "/masda/MX-5.gltf"), turn);
                acceleration = 6.5;
                topSpeed = 219;
              },
              'mx5 2016': function mx52016() {
                hideOtherModel(masda.mx5_2016, masdaArr);
                Ui.prototype.loadModel("".concat(carsPath, "/masda/mx5-2016.gltf"), turn);
                acceleration = 6.4;
                topSpeed = 219;
              },
              'RX 7': function RX7() {
                hideOtherModel(masda.rx7, masdaArr);
                Ui.prototype.loadModel("".concat(carsPath, "/masda/RX-7.gltf"), turn);
                acceleration = 4.8;
                topSpeed = 255;
              },
              'RX 8': function RX8() {
                hideOtherModel(masda.rx8, masdaArr);
                Ui.prototype.loadModel("".concat(carsPath, "/masda/RX-8.gltf"), turn);
                acceleration = 6.5;
                topSpeed = 240;
              },
              // maybah
              'exelero': function exelero() {
                hideOtherModel(maybah.exelero, maybahArr);
                Ui.prototype.loadModel("".concat(carsPath, "/maybah/exelero.gltf"), turn);
                acceleration = 4.4;
                topSpeed = 350;
              },
              // mazerati
              'spyder': function spyder() {
                hideOtherModel(mazerati.spyder, mazeratiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/mazerati/spyder.gltf"), turn);
                acceleration = 4.8;
                topSpeed = 283;
              },
              'G Turismo': function GTurismo() {
                hideOtherModel(mazerati.gt, mazeratiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/mazerati/mazerati-GT.gltf"), turn);
                acceleration = 4.3;
                topSpeed = 302;
              },
              'mc12': function mc12() {
                hideOtherModel(mazerati.mc12, mazeratiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/mazerati/mc12.gltf"), turn);
                acceleration = 3.8;
                topSpeed = 330;
              },
              'quatroporte': function quatroporte() {
                hideOtherModel(mazerati.quatroporte, mazeratiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/mazerati/quatroporte.gltf"), turn);
                acceleration = 5.1;
                topSpeed = 285;
              },
              // merc
              'amge gts': function amgeGts() {
                hideOtherModel(merc.amge, mercArr);
                Ui.prototype.loadModel("".concat(carsPath, "/merc/amge-gts.gltf"), turn);
                acceleration = 3.3;
                topSpeed = 313;
              },
              'cl': function cl() {
                hideOtherModel(merc.cl, mercArr);
                Ui.prototype.loadModel("".concat(carsPath, "/merc/cl.gltf"), turn);
                acceleration = 4.2;
                topSpeed = 250;
              },
              'clk gtr': function clkGtr() {
                hideOtherModel(merc.clk_gtr, mercArr);
                Ui.prototype.loadModel("".concat(carsPath, "/merc/clk-gtr.gltf"), turn);
                acceleration = 3.4;
                topSpeed = 323;
              },
              'slr maklaren': function slrMaklaren() {
                hideOtherModel(merc.slr, mercArr);
                Ui.prototype.loadModel("".concat(carsPath, "/merc/slr-maklaren.gltf"), turn);
                acceleration = 3.5;
                topSpeed = 337;
              },
              'sls': function sls() {
                hideOtherModel(merc.sls, mercArr);
                Ui.prototype.loadModel("".concat(carsPath, "/merc/sls.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 323;
              },
              'sls amge': function slsAmge() {
                hideOtherModel(merc.sls_amge, mercArr);
                Ui.prototype.loadModel("".concat(carsPath, "/merc/sls-amge.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 317;
              },
              'clk dtm': function clkDtm() {
                hideOtherModel(merc.clk_dtm, mercArr);
                Ui.prototype.loadModel("".concat(carsPath, "/merc/clk-dtm.gltf"), turn);
                acceleration = 3.9;
                topSpeed = 320;
              },
              // mitsushi
              '3000gt': function gt() {
                hideOtherModel(mitsushi.mitsushi_3000gt, mitsushiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/mitsushi/3000gt.gltf"), turn);
                acceleration = 6;
                topSpeed = 250;
              },
              'eclipse': function eclipse() {
                hideOtherModel(mitsushi.eclipse, mitsushiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/mitsushi/eclipse.gltf"), turn);
                acceleration = 6.8;
                topSpeed = 226;
              },
              'lancer evolution x': function lancerEvolutionX() {
                hideOtherModel(mitsushi.lancer, mitsushiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/mitsushi/lancer-evolution-x.gltf"), turn);
                acceleration = 3.8;
                topSpeed = 250;
              },
              'lancer wrc': function lancerWrc() {
                hideOtherModel(mitsushi.lancer_wrc, mitsushiArr);
                Ui.prototype.loadModel("".concat(carsPath, "/mitsushi/lancer-wrc.gltf"), turn);
                acceleration = 4.9;
                topSpeed = 220;
              },
              // nisan
              '370z': function z() {
                hideOtherModel(nisan.nisan_370z, nisanArr);
                Ui.prototype.loadModel("".concat(carsPath, "/nisan/370z.gltf"), turn);
                acceleration = 5;
                topSpeed = 275;
              },
              'gtr nizmo': function gtrNizmo() {
                hideOtherModel(nisan.gtr_nizmo, nisanArr);
                Ui.prototype.loadModel("".concat(carsPath, "/nisan/gtr-nizmo.gltf"), turn);
                acceleration = 2.8;
                topSpeed = 315;
              },
              'R35 GTR': function R35GTR() {
                hideOtherModel(nisan.r35, nisanArr);
                Ui.prototype.loadModel("".concat(carsPath, "/nisan/R35-GTR.gltf"), turn);
                acceleration = 2.6;
                topSpeed = 316;
              },
              'skyline gtr': function skylineGtr() {
                hideOtherModel(nisan.skyline, nisanArr);
                Ui.prototype.loadModel("".concat(carsPath, "/nisan/skyline-gtr.gltf"), turn);
                acceleration = 5.2;
                topSpeed = 250;
              },
              // opl
              'speedster': function speedster() {
                hideOtherModel(opl.speedster, oplArr);
                Ui.prototype.loadModel("".concat(carsPath, "/opl/speedster.gltf"), turn);
                acceleration = 6.7;
                topSpeed = 217;
              },
              // other
              'asterisk': function asterisk() {
                hideOtherModel(other.asterisk, otherArr);
                Ui.prototype.loadModel("".concat(carsPath, "/other/asterisk.gltf"), turn);
                acceleration = 3;
                topSpeed = 290;
              },
              'exotic car': function exoticCar() {
                hideOtherModel(other.exotic, otherArr);
                Ui.prototype.loadModel("".concat(carsPath, "/other/exotic-car.gltf"), turn);
                acceleration = 4;
                topSpeed = 290;
              },
              'concept car 2009': function conceptCar2009() {
                hideOtherModel(other.concept_2009, otherArr);
                Ui.prototype.loadModel("".concat(carsPath, "/other/concept-car-2009.gltf"), turn);
                acceleration = 3;
                topSpeed = 320;
              },
              'concept car5': function conceptCar5() {
                hideOtherModel(other.concept_5, otherArr);
                Ui.prototype.loadModel("".concat(carsPath, "/other/concept-car5.gltf"), turn);
                acceleration = 4;
                topSpeed = 300;
              },
              'concept car 7': function conceptCar7() {
                hideOtherModel(other.concept_7, otherArr);
                Ui.prototype.loadModel("".concat(carsPath, "/other/concept-car-7.gltf"), turn);
                acceleration = 3;
                topSpeed = 290;
              },
              'race car': function raceCar() {
                hideOtherModel(other.race_car, otherArr);
                Ui.prototype.loadModel("".concat(carsPath, "/other/race-car.gltf"), turn);
                acceleration = 4;
                topSpeed = 310;
              },
              'vm x1': function vmX1() {
                hideOtherModel(other.vm, otherArr);
                Ui.prototype.loadModel("".concat(carsPath, "/other/vm-x1.gltf"), turn);
                acceleration = 3;
                topSpeed = 280;
              },
              'wizard gt': function wizardGt() {
                hideOtherModel(other.wizard, otherArr);
                Ui.prototype.loadModel("".concat(carsPath, "/other/wizard-gt.gltf"), turn);
                acceleration = 3;
                topSpeed = 350;
              },
              // pahani
              'zonda f': function zondaF() {
                hideOtherModel(pahani.zonda, pahaniArr);
                Ui.prototype.loadModel("".concat(carsPath, "/pahani/zonda-f.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 366;
              },
              'huayra': function huayra() {
                hideOtherModel(pahani.huayra, pahaniArr);
                Ui.prototype.loadModel("".concat(carsPath, "/pahani/huayra.gltf"), turn);
                acceleration = 2.7;
                topSpeed = 370;
              },
              // pontiak
              'firebird': function firebird() {
                hideOtherModel(pontiak.firebird, pontiakArr);
                Ui.prototype.loadModel("".concat(carsPath, "/pontiak/firebird.gltf"), turn);
                acceleration = 5.3;
                topSpeed = 239;
              },
              'gto': function gto() {
                hideOtherModel(pontiak.gto, pontiakArr);
                Ui.prototype.loadModel("".concat(carsPath, "/pontiak/gto.gltf"), turn);
                acceleration = 4.6;
                topSpeed = 274;
              },
              // porshe
              'carrera gt': function carreraGt() {
                hideOtherModel(porshe.carrera, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/carrera-gt.gltf"), turn);
                acceleration = 3.3;
                topSpeed = 345;
              },
              '911 turbo': function turbo() {
                hideOtherModel(porshe.porshe_911, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/911-turbo.gltf"), turn);
                acceleration = 2.4;
                topSpeed = 349;
              },
              '996': function _() {
                hideOtherModel(porshe.porshe_996, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/996.gltf"), turn);
                acceleration = 3.9;
                topSpeed = 319;
              },
              'boxster': function boxster() {
                hideOtherModel(porshe.boxster, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/boxster.gltf"), turn);
                acceleration = 6.5;
                topSpeed = 256;
              },
              'boxster s': function boxsterS() {
                hideOtherModel(porshe.boxster_s, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/boxster-s.gltf"), turn);
                acceleration = 3.5;
                topSpeed = 321;
              },
              'panamera turbo': function panameraTurbo() {
                hideOtherModel(porshe.panamera, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/panamera-turbo.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 306;
              },
              'cayman 2017': function cayman2017() {
                hideOtherModel(porshe.cayman, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/cayman-2017.gltf"), turn);
                acceleration = 3.4;
                topSpeed = 321;
              },
              '918 r type': function rType() {
                hideOtherModel(porshe.porshe_918, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/918-r-type.gltf"), turn);
                acceleration = 2.5;
                topSpeed = 350;
              },
              '997 gt3': function gt3() {
                hideOtherModel(porshe.porshe_997, porsheArr);
                Ui.prototype.loadModel("".concat(carsPath, "/porshe/997-gt3.gltf"), turn);
                acceleration = 2.5;
                topSpeed = 350;
              },
              // rols-roys
              'phantom': function phantom() {
                // hideOtherModel(rols_roys.phantom);
                Ui.prototype.loadModel("".concat(carsPath, "/rols-roys/phantom.gltf"), turn);
                acceleration = 5.9;
                topSpeed = 240;
              },
              //  rufe
              'rt 12s': function rt12s() {
                // hideOtherModel(rufe.rt_12s);
                Ui.prototype.loadModel("".concat(carsPath, "/rufe/rt-12s.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 362;
              },
              // sab
              'aero x': function aeroX() {
                // hideOtherModel(sab.aero);
                Ui.prototype.loadModel("".concat(carsPath, "/sab/aero-x.gltf"), turn);
                acceleration = 4.9;
                topSpeed = 255;
              },
              // salen
              's7': function s7() {
                // hideOtherModel(salen.s7);
                Ui.prototype.loadModel("".concat(carsPath, "/salen/s7.gltf"), turn);
                acceleration = 3.3;
                topSpeed = 322;
              },
              // shelbi
              'cobra': function cobra() {
                // hideOtherModel(shelbi.cobra);
                Ui.prototype.loadModel("".concat(carsPath, "/shelbi/cobra.gltf"), turn);
                acceleration = 3.8;
                topSpeed = 300;
              },
              // tezla
              'model s': function modelS() {
                // hideOtherModel(tezla.model_s);
                Ui.prototype.loadModel("".concat(carsPath, "/tezla/model-s.gltf"), turn);
                acceleration = 2.5;
                topSpeed = 249;
              },
              // tojota
              'soarer': function soarer() {
                // hideOtherModel(tojota.soarer);
                Ui.prototype.loadModel("".concat(carsPath, "/tojota/soarer.gltf"), turn);
                acceleration = 5.8;
                topSpeed = 252;
              },
              // twr
              'sagaris': function sagaris() {
                // hideOtherModel(twr.sagaris);
                Ui.prototype.loadModel("".concat(carsPath, "/twr/sagaris.gltf"), turn);
                acceleration = 3.7;
                topSpeed = 295;
              },
              // vendeta
              'gtr 800': function gtr800() {
                // hideOtherModel(vendeta.gtr_800);
                Ui.prototype.loadModel("".concat(carsPath, "/vendeta/gtr-800.gltf"), turn);
                acceleration = 3;
                topSpeed = 360;
              },
              // vw
              'ego': function ego() {
                // hideOtherModel(vw.ego);
                Ui.prototype.loadModel("".concat(carsPath, "/vw/ego.gltf"), turn);
                acceleration = 4;
                topSpeed = 300;
              },
              'st1': function st1() {
                // hideOtherModel(zenwo.st1);
                Ui.prototype.loadModel("".concat(carsPath, "/zenwo/st1.gltf"), turn);
                acceleration = 3.2;
                topSpeed = 375;
              },
              //  zubaru
              'b11s': function b11s() {
                hideOtherModel(zubaru.b11s, zubaruArr);
                Ui.prototype.loadModel("".concat(carsPath, "/zubaru/b11s.gltf"), turn);
                acceleration = 3;
                topSpeed = 270;
              },
              'impreza': function impreza() {
                hideOtherModel(zubaru.impreza, zubaruArr);
                Ui.prototype.loadModel("".concat(carsPath, "/zubaru/impreza.gltf"), turn);
                acceleration = 5.5;
                topSpeed = 255;
              }
            };
            return models;
          }

          getModelName();
          var tpl = loadTemplate('#template-car-info', '#car-info');
          var template = $$(tpl).html();
          var compiledTemplate = Template7.compile(template);
          var model = {
            modelName: modelName,
            acceleration: acceleration,
            topSpeed: topSpeed
          };
          var carInfoTpl = compiledTemplate(model);
          var divInfo = document.querySelector('.info');
          divInfo.innerHTML = carInfoTpl; // for debugging

          entity.addComponent("script"); // entity.script.create("firstPersonCamera");

          function selectCar() {
            // remove Turn Test
            modelEntity.removeComponent('script'); // add test drive

            modelEntity.addComponent('script');
            modelEntity.script.create('TestDrive');
            divApp.style.display = 'none';
          }

          document.querySelector('.select-car').addEventListener('click', selectCar);
        } // add click to models


        models.addEventListener('click', getModel);
      } // add click to makes


      makes.addEventListener('click', showModels);
      var trackName = event.target.id || event.target.textContent;

      switch (trackName) {
        case 'Barcelona':
          Ui.prototype.loadModel("".concat(tracksPath, "/testing/barcelona.gltf"));
          break;

        case 'Bathurst':
          Ui.prototype.loadModel("".concat(tracksPath, "/Bathurst.gltf"));
          break;

        case 'Brands Hatch':
          Ui.prototype.loadModel("".concat(tracksPath, "/Brands-Hatch.gltf"));
          break;

        case 'Hungaroring':
          Ui.prototype.loadModel("".concat(tracksPath, "/Hungaroring.gltf"));
          break;

        case 'Indianapolis':
          Ui.prototype.loadModel("".concat(tracksPath, "/Indianapolis.gltf"));
          break;

        case 'Interlagos':
          Ui.prototype.loadModel("".concat(tracksPath, "/Interlagos.gltf"));
          break;

        case 'Isle of Man':
          Ui.prototype.loadModel("".concat(tracksPath, "/Isle-of-Man.gltf"));
          break;

        case 'Kyalami':
          Ui.prototype.loadModel("".concat(tracksPath, "/Kyalami.gltf"));
          break;

        case 'Laguna Seca':
          Ui.prototype.loadModel("".concat(tracksPath, "/Laguna-Seca.gltf"));
          break;

        case 'Le Mans':
          Ui.prototype.loadModel("".concat(tracksPath, "/Le-Mans.gltf"));
          break;

        case 'Magny Cours':
          Ui.prototype.loadModel("".concat(tracksPath, "/Magny-Cours.gltf"));
          break;

        case 'Monaco':
          Ui.prototype.loadModel("".concat(tracksPath, "/Monaco.gltf"));
          break;

        case 'Montreal':
          Ui.prototype.loadModel("".concat(tracksPath, "/Montreal.gltf"));
          break;

        case 'Monza':
          Ui.prototype.loadModel("".concat(tracksPath, "/Monza.gltf"));
          break;

        case 'Nurburgring':
          Ui.prototype.loadModel("".concat(tracksPath, "/Nurburgring.gltf"));
          break;

        case 'Red Bull Ring':
          Ui.prototype.loadModel("".concat(tracksPath, "/Red-Bull-Ring.gltf"));
          break;

        case 'Silverstone':
          Ui.prototype.loadModel("".concat(tracksPath, "/Silverstone.gltf"));
          break;

        case 'Spa-Francorchamps':
          Ui.prototype.loadModel("".concat(tracksPath, "/Spa-Francorchamps.gltf"));
          break;

        case 'Suzuka':
          Ui.prototype.loadModel("".concat(tracksPath, "/Suzuka.gltf"));
          break;

        case 'Zandvoort':
          Ui.prototype.loadModel("".concat(tracksPath, "/Zandvoort.gltf"));
          break;
        // case 'Circuit de la Sarthe':
        //    Ui.prototype.loadModel(`${tracksPath}/Circuit-de-la-Sarthe.gltf`);
        //    break; 
      } // hide temporary track model


      app.root.findByName('modelEntity').enabled = false;
      hideTracks();
    } // add click to tracks


    tracksContainer.addEventListener('click', trackSelect);
  }

  function careerClick() {
    console.log('career');
  }

  btnFree.addEventListener('click', freeClick);
  btnCareer.addEventListener('click', careerClick);
} // btnPlay.addEventListener('click', playClick);
// model from firebase
// Ui.prototype.loadModel('https://firebasestorage.googleapis.com/v0/b/supercars-dream.appspot.com/o/tezla%2Fmodel-s.gltf?alt=media&token=876feba6-f593-4e5d-8fe0-343b75fc0b19', 'TestDrive');

/* test drive */
// issue with textures path
// Ui.prototype.loadModel(`${carsPath}/akura/NZX_GT3/NZX_GT3.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/lambo/aventador-roadster/aventador.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/mazerati/gran-cabrio/gran-cabrio.gltf`, "TestDrive");
// Ui.prototype.loadModel(`${carsPath}/other/green-super-sport/SuperSport.gltf`, "TestDrive");


Ui.prototype.initialize = function () {};
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62537" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/ui.js"], null)
//# sourceMappingURL=/ui.59cf47a3.js.map