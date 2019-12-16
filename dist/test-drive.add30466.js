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
})({"js/test-drive.js":[function(require,module,exports) {
var TestDrive = pc.createScript('TestDrive');
var btnBrake = document.createElement('button');
var btnSteerLeft = document.createElement('button');
var btnSteerRight = document.createElement('button');
var btnAcc = document.createElement('button');
var pos;
var topSpeed;

TestDrive.prototype.initialize = function () {
  getCars(); // TODO: add topSpeeds

  var adi = cars.adi;
  var akura = cars.akura;
  var alfa = cars.alfa;
  var aston = cars.aston;
  var bentle = cars.bentle;
  var bmv = cars.bmv;
  var bugati = cars.bugati;
  var cadilac = cars.cadilac;
  var chonda = cars.chonda;
  var citron = cars.citron;
  var dodg = cars.dodg;
  var ferari = cars.ferari;
  var fort = cars.fort;
  var henesey = cars.henesey;
  var hevrolet = cars.hevrolet;
  var holdem = cars.holdem;
  var hrysler = cars.hrysler;
  var jagur = cars.jagur;
  var konigseg = cars.konigseg;
  var lambo = cars.lambo;
  var lotuz = cars.lotuz;
  var luxus = cars.luxus;
  var maklaren = cars.maklaren;
  var masda = cars.masda;
  var maybah = cars.maybah;
  var mazerati = cars.mazerati;
  var merc = cars.merc;
  var mitsushi = cars.mitsushi;
  var nisan = cars.nisan;
  var opl = cars.opl;
  var other = cars.other;
  var pahani = cars.pahani;
  var pontiak = cars.pontiak;
  var porshe = cars.porshe;
  var rols_roys = cars.rols_roys;
  var rufe = cars.rufe;
  var sab = cars.sab;
  var salen = cars.salen;
  var shelbi = cars.shelbi;
  var tezla = cars.tezla;
  var tojota = cars.tojota;
  var twr = cars.twr;
  var vendeta = cars.vendeta;
  var vw = cars.vw;
  var zenwo = cars.zenwo;
  var zubaru = cars.zubaru; // adi
  // TO MODIFY!!!

  if (app.assets.find(models.a8)) {
    topSpeed = adi.a8.topSpeed;
  } else if (app.assets.find(models.avus)) {
    topSpeed = adi.avus.topSpeed;
  } else if (app.assets.find(models.r18)) {
    topSpeed = adi.r18.topSpeed;
  } else if (app.assets.find(models.r8_fsi)) {
    topSpeed = adi.r8_fsi.topSpeed;
  } else if (app.assets.find(models.r8_le_mans)) {
    topSpeed = adi.r8_le_mans.topSpeed;
  } else if (app.assets.find(models.rs7)) {
    topSpeed = adi.rs7.topSpeed;
  } else if (app.assets.find(models.rsq)) {
    topSpeed = adi.rsq.topSpeed;
  } else if (app.assets.find(models.tt)) {
    topSpeed = adi.tt.topSpeed;
  } // akura
  else if (app.assets.find(models.nzx)) {
      topSpeed = akura.nzx.topSpeed;
    } else if (app.assets.find(models.xrx)) {
      topSpeed = akura.xrx.topSpeed;
    } else if (app.assets.find(models.nzx_gt3)) {
      topSpeed = akura.nzx_gt3.topSpeed;
    } // alfa
    else if (app.assets.find(models.alfa_8c)) {
        topSpeed = alfa.alfa_8c.topSpeed;
      } else if (app.assets.find(models.tz3)) {
        topSpeed = alfa.tz3.topSpeed;
      } // aston
      else if (app.assets.find(models.dbr9)) {
          topSpeed = aston.dbr9.topSpeed;
        } else if (app.assets.find(models.rapide)) {
          topSpeed = aston.rapide.topSpeed;
        } else if (app.assets.find(models.vantage)) {
          topSpeed = aston.vantage.topSpeed;
        } else if (app.assets.find(models.dbs)) {
          topSpeed = aston.dbs.topSpeed;
        } else if (app.assets.find(models.vanquish)) {
          topSpeed = aston.vanquish.topSpeed;
        } else if (app.assets.find(models.one77)) {
          topSpeed = aston.one77.topSpeed;
        } else if (app.assets.find(models.v12_vanquish)) {
          topSpeed = aston.v12_vanquish.topSpeed;
        } else if (app.assets.find(models.vulcan)) {
          topSpeed = aston.vulcan.topSpeed;
        } // bentle
        else if (app.assets.find(models.continental)) {
            topSpeed = bentle.continental.topSpeed;
          } // bmv
          else if (app.assets.find(models.bmv_7)) {
              topSpeed = bmv.bmv_7.topSpeed;
            } else if (app.assets.find(models.m3)) {
              topSpeed = bmv.m3.topSpeed;
            } else if (app.assets.find(models.m3_e92)) {
              topSpeed = bmv.m3_e92.topSpeed;
            } else if (app.assets.find(models.m3_gtr)) {
              topSpeed = bmv.m3_gtr.topSpeed;
            } else if (app.assets.find(models.m5)) {
              topSpeed = bmv.m5.topSpeed;
            } else if (app.assets.find(models.bmv_8_series)) {
              topSpeed = bmv.bmv_8_series.topSpeed;
            } else if (app.assets.find(models.i8)) {
              topSpeed = bmv.i8.topSpeed;
            } // bugati
            else if (app.assets.find(models.chiron)) {
                topSpeed = bugati.chiron.topSpeed;
              } else if (app.assets.find(models.veyron)) {
                topSpeed = bugati.veyron.topSpeed;
              } // cadilac
              else if (app.assets.find(models.cien)) {
                  topSpeed = cadilac.cien.topSpeed;
                } else if (app.assets.find(models.cts)) {
                  topSpeed = cadilac.cts.topSpeed;
                } // chonda
                else if (app.assets.find(models.s2000)) {
                    topSpeed = chonda.s2000.topSpeed;
                  } else if (app.assets.find(models.nzx_takata)) {
                    topSpeed = chonda.nzx_takata.topSpeed;
                  } // citron
                  else if (app.assets.find(models.citron_gt)) {
                      topSpeed = citron.citron_gt.topSpeed;
                    } // dodg
                    else if (app.assets.find(models.charger)) {
                        topSpeed = dodg.charger.topSpeed;
                      } else if (app.assets.find(models.viper)) {
                        topSpeed = dodg.viper.topSpeed;
                      } else if (app.assets.find(models.viper_zrt)) {
                        topSpeed = dodg.viper_zrt.topSpeed;
                      } else if (app.assets.find(models.viper_gts)) {
                        topSpeed = dodg.viper_gts.topSpeed;
                      } else if (app.assets.find(models.challenger)) {
                        topSpeed = dodg.challenger.topSpeed;
                      } // ferari
                      else if (app.assets.find(models.ferari_430)) {
                          topSpeed = ferari.ferari_430.topSpeed;
                        } else if (app.assets.find(models.ferari_599)) {
                          topSpeed = ferari.ferari_599.topSpeed;
                        } else if (app.assets.find(models.modena)) {
                          topSpeed = ferari.modena.topSpeed;
                        } else if (app.assets.find(models.ferari_458_italia)) {
                          topSpeed = ferari.ferari_458_italia.topSpeed;
                        } else if (app.assets.find(models.testarosa)) {
                          topSpeed = ferari.testarosa.topSpeed;
                        } else if (app.assets.find(models.ferari_812)) {
                          topSpeed = ferari.ferari_812.topSpeed;
                        } else if (app.assets.find(models.f12)) {
                          topSpeed = ferari.f12.topSpeed;
                        } else if (app.assets.find(models.laferari)) {
                          topSpeed = ferari.laferari.topSpeed;
                        } // fort
                        else if (app.assets.find(models.gt90)) {
                            topSpeed = fort.gt90.topSpeed;
                          } else if (app.assets.find(models.mustang_salen)) {
                            topSpeed = fort.mustang_salen.topSpeed;
                          } else if (app.assets.find(models.fort_gt)) {
                            topSpeed = fort.fort_gt.topSpeed;
                          } else if (app.assets.find(models.mustang)) {
                            topSpeed = fort.mustang.topSpeed;
                          } // henesey
                          else if (app.assets.find(models.venom)) {
                              topSpeed = henesey.venom.topSpeed;
                            } // hevrolet
                            else if (app.assets.find(models.camaro_old)) {
                                topSpeed = hevrolet.camaro_old.topSpeed;
                              } else if (app.assets.find(models.camaro)) {
                                topSpeed = hevrolet.camaro.topSpeed;
                              } else if (app.assets.find(models.corvete_c7)) {
                                topSpeed = hevrolet.corvete_c7.topSpeed;
                              } else if (app.assets.find(models.corvete_concept)) {
                                topSpeed = hevrolet.corvete_concept.topSpeed;
                              } // holdem
                              else if (app.assets.find(models.monaro)) {
                                  topSpeed = holdem.monaro.topSpeed;
                                } // hrysler
                                else if (app.assets.find(models.hrysler_300c)) {
                                    topSpeed = hrysler.hrysler_300c.topSpeed;
                                  } else if (app.assets.find(models.crossfire)) {
                                    topSpeed = hrysler.crossfire.topSpeed;
                                  } else if (app.assets.find(models.me)) {
                                    topSpeed = hrysler.me.topSpeed;
                                  } // jagur
                                  else if (app.assets.find(models.cx75)) {
                                      topSpeed = jagur.cx75.topSpeed;
                                    } else if (app.assets.find(models.f_type)) {
                                      topSpeed = jagur.f_type.topSpeed;
                                    } else if (app.assets.find(models.xkr)) {
                                      topSpeed = jagur.xkr.topSpeed;
                                    } // konigseg
                                    else if (app.assets.find(models.one1)) {
                                        topSpeed = konigseg.one1.topSpeed;
                                      } else if (app.assets.find(models.agera)) {
                                        topSpeed = konigseg.agera.topSpeed;
                                      } else if (app.assets.find(models.ccx)) {
                                        topSpeed = konigseg.ccx.topSpeed;
                                      } // lambo
                                      else if (app.assets.find(models.huracan)) {
                                          topSpeed = lambo.huracan.topSpeed;
                                        } else if (app.assets.find(models.diablo)) {
                                          topSpeed = lambo.diablo.topSpeed;
                                        } else if (app.assets.find(models.gallardo)) {
                                          topSpeed = lambo.gallardo.topSpeed;
                                        } else if (app.assets.find(models.urus)) {
                                          topSpeed = lambo.urus.topSpeed;
                                        } else if (app.assets.find(models.reventon)) {
                                          topSpeed = lambo.reventon.topSpeed;
                                        } else if (app.assets.find(models.murcielago)) {
                                          topSpeed = lambo.murcielago.topSpeed;
                                        } else if (app.assets.find(models.veneno)) {
                                          topSpeed = lambo.veneno.topSpeed;
                                        } else if (app.assets.find(models.aventador)) {
                                          topSpeed = lambo.aventador.topSpeed;
                                        } else if (app.assets.find(models.aventador_roadster)) {
                                          topSpeed = lambo.aventador_roadster.topSpeed;
                                        } else if (app.assets.find(models.asterion)) {
                                          topSpeed = lambo.asterion.topSpeed;
                                        } // lotuz
                                        else if (app.assets.find(models.evora)) {
                                            topSpeed = lotuz.evora.topSpeed;
                                          } else if (app.assets.find(models.exige)) {
                                            topSpeed = lotuz.exige.topSpeed;
                                          } // luxus
                                          else if (app.assets.find(models.gs)) {
                                              topSpeed = luxus.gs.topSpeed;
                                            } else if (app.assets.find(models.lfa)) {
                                              topSpeed = luxus.lfa.topSpeed;
                                            } // maklaren
                                            else if (app.assets.find(models.f1)) {
                                                topSpeed = maklaren.f1.topSpeed;
                                              } else if (app.assets.find(models.mp4)) {
                                                topSpeed = maklaren.mp4.topSpeed;
                                              } else if (app.assets.find(models.p1)) {
                                                topSpeed = maklaren.p1.topSpeed;
                                              } else if (app.assets.find(models.maklaren_576gt)) {
                                                topSpeed = maklaren.maklaren_576gt.topSpeed;
                                              } else if (app.assets.find(models.maklaren_gt)) {
                                                topSpeed = maklaren.maklaren_gt.topSpeed;
                                              } // masda
                                              else if (app.assets.find(models.mx5)) {
                                                  topSpeed = masda.mx5.topSpeed;
                                                } else if (app.assets.find(models.mx5_2016)) {
                                                  topSpeed = masda.mx5_2016.topSpeed;
                                                } else if (app.assets.find(models.rx7)) {
                                                  topSpeed = masda.rx7.topSpeed;
                                                } else if (app.assets.find(models.rx8)) {
                                                  topSpeed = masda.rx8.topSpeed;
                                                } // maybah
                                                else if (app.assets.find(models.exelero)) {
                                                    topSpeed = maybah.exelero.topSpeed;
                                                  } // mazerati
                                                  else if (app.assets.find(models.spyder)) {
                                                      topSpeed = mazerati.spyder.topSpeed;
                                                    } else if (app.assets.find(models.mazerati_gt)) {
                                                      topSpeed = mazerati.mazerati_gt.topSpeed;
                                                    } else if (app.assets.find(models.mc12)) {
                                                      topSpeed = mazerati.mc12.topSpeed;
                                                    } else if (app.assets.find(models.quatroporte)) {
                                                      topSpeed = mazerati.quatroporte.topSpeed;
                                                    } else if (app.assets.find(models.gran_cabrio)) {
                                                      topSpeed = mazerati.gran_cabrio.topSpeed;
                                                    } // merc
                                                    else if (app.assets.find(models.amge)) {
                                                        topSpeed = merc.amge.topSpeed;
                                                      } else if (app.assets.find(models.cl)) {
                                                        topSpeed = merc.cl.topSpeed;
                                                      } else if (app.assets.find(models.clk_gtr)) {
                                                        topSpeed = merc.clk_gtr.topSpeed;
                                                      } else if (app.assets.find(models.slr)) {
                                                        topSpeed = merc.slr.topSpeed;
                                                      } else if (app.assets.find(models.sls)) {
                                                        topSpeed = merc.sls.topSpeed;
                                                      } else if (app.assets.find(models.sls_amge)) {
                                                        topSpeed = merc.sls_amge.topSpeed;
                                                      } else if (app.assets.find(models.clk_dtm)) {
                                                        topSpeed = merc.clk_dtm.topSpeed;
                                                      } // mitsushi
                                                      else if (app.assets.find(models.mitsushi_3000gt)) {
                                                          topSpeed = mitsushi.mitsushi_3000gt.topSpeed;
                                                        } else if (app.assets.find(models.eclipse)) {
                                                          topSpeed = mitsushi.eclipse.topSpeed;
                                                        } else if (app.assets.find(models.lancer_evo)) {
                                                          topSpeed = mitsushi.lancer_evo.topSpeed;
                                                        } else if (app.assets.find(models.lancer_wrc)) {
                                                          topSpeed = mitsushi.lancer_wrc.topSpeed;
                                                        } // nisan
                                                        else if (app.assets.find(models.nisan_370z)) {
                                                            topSpeed = nisan.nisan_370z.topSpeed;
                                                          } else if (app.assets.find(models.gtr_nizmo)) {
                                                            topSpeed = nisan.gtr_nizmo.topSpeed;
                                                          } else if (app.assets.find(models.r35)) {
                                                            topSpeed = nisan.r35.topSpeed;
                                                          } else if (app.assets.find(models.skyline)) {
                                                            topSpeed = nisan.skyline.topSpeed;
                                                          } // opl
                                                          else if (app.assets.find(models.speedster)) {
                                                              topSpeed = opl.speedster.topSpeed;
                                                            } // other
                                                            else if (app.assets.find(models.asterisk)) {
                                                                topSpeed = other.asterisk.topSpeed;
                                                              } else if (app.assets.find(models.exotic)) {
                                                                topSpeed = other.exotic.topSpeed;
                                                              } else if (app.assets.find(models.concept_2009)) {
                                                                topSpeed = other.concept_2009.topSpeed;
                                                              } else if (app.assets.find(models.concept_5)) {
                                                                topSpeed = other.concept_5.topSpeed;
                                                              } else if (app.assets.find(models.concept_7)) {
                                                                topSpeed = other.concept_7.topSpeed;
                                                              } else if (app.assets.find(models.race_car)) {
                                                                topSpeed = other.race_car.topSpeed;
                                                              } else if (app.assets.find(models.vm)) {
                                                                topSpeed = other.vm.topSpeed;
                                                              } else if (app.assets.find(models.wizard)) {
                                                                topSpeed = other.wizard.topSpeed;
                                                              } else if (app.assets.find(models.supersport)) {
                                                                topSpeed = other.supersport.topSpeed;
                                                              } // pahani
                                                              else if (app.assets.find(models.zonda_f)) {
                                                                  topSpeed = pahani.zonda_f.topSpeed;
                                                                } else if (app.assets.find(models.huayra)) {
                                                                  topSpeed = pahani.huayra.topSpeed;
                                                                } // pontiak
                                                                else if (app.assets.find(models.firebird)) {
                                                                    topSpeed = pontiak.firebird.topSpeed;
                                                                  } else if (app.assets.find(models.gto)) {
                                                                    topSpeed = pontiak.gto.topSpeed;
                                                                  } // porshe
                                                                  else if (app.assets.find(models.carrera)) {
                                                                      topSpeed = porshe.carrera.topSpeed;
                                                                    } else if (app.assets.find(models.porshe_911)) {
                                                                      topSpeed = porshe.porshe_911.topSpeed;
                                                                    } else if (app.assets.find(models.porshe_996)) {
                                                                      topSpeed = porshe.porshe_996.topSpeed;
                                                                    } else if (app.assets.find(models.boxster)) {
                                                                      topSpeed = porshe.boxster.topSpeed;
                                                                    } else if (app.assets.find(models.boxster_s)) {
                                                                      topSpeed = porshe.boxster_s.topSpeed;
                                                                    } else if (app.assets.find(models.panamera)) {
                                                                      topSpeed = porshe.panamera.topSpeed;
                                                                    } else if (app.assets.find(models.cayman)) {
                                                                      topSpeed = porshe.cayman.topSpeed;
                                                                    } else if (app.assets.find(models.porshe_918)) {
                                                                      topSpeed = porshe.porshe_918.topSpeed;
                                                                    } else if (app.assets.find(models.porshe_997)) {
                                                                      topSpeed = porshe.porshe_997.topSpeed;
                                                                    } // rols-roys
                                                                    else if (app.assets.find(models.phantom)) {
                                                                        topSpeed = rols_roys.phantom.topSpeed;
                                                                      } // rufe
                                                                      else if (app.assets.find(models.rt_12s)) {
                                                                          topSpeed = rufe.rt_12s.topSpeed;
                                                                        } // sab
                                                                        else if (app.assets.find(models.aero_x)) {
                                                                            topSpeed = sab.aero_x.topSpeed;
                                                                          } // salen
                                                                          else if (app.assets.find(models.s7)) {
                                                                              topSpeed = salen.s7.topSpeed;
                                                                            } // shelbi
                                                                            else if (app.assets.find(models.cobra)) {
                                                                                topSpeed = shelbi.cobra.topSpeed;
                                                                              } // tezla
                                                                              else if (app.assets.find(models.model_s)) {
                                                                                  topSpeed = tezla.model_s.topSpeed;
                                                                                } // tojota
                                                                                else if (app.assets.find(models.soarer)) {
                                                                                    topSpeed = tojota.soarer.topSpeed;
                                                                                  } // twr
                                                                                  else if (app.assets.find(models.sagaris)) {
                                                                                      topSpeed = twr.sagaris.topSpeed;
                                                                                    } // vendeta
                                                                                    else if (app.assets.find(models.gtr800)) {
                                                                                        topSpeed = vendeta.gtr800.topSpeed;
                                                                                      } // vw
                                                                                      else if (app.assets.find(models.ego)) {
                                                                                          topSpeed = vw.ego.topSpeed;
                                                                                        } // zenwo
                                                                                        else if (app.assets.find(models.st1)) {
                                                                                            topSpeed = zenwo.st1.topSpeed;
                                                                                          } // zubaru
                                                                                          else if (app.assets.find(models.b11s)) {
                                                                                              topSpeed = zubaru.b11s.topSpeed;
                                                                                            } else if (app.assets.find(models.impreza)) {
                                                                                              topSpeed = zubaru.impreza.topSpeed;
                                                                                            } // follow a car


  var followCamera = new pc.Entity('followCam');
  var camOptions = {
    fov: 10,
    nearClip: 100,
    farClip: 10000,
    clearColor: new pc.Color(0.1, 0.2, 0.3)
  };
  followCamera.addComponent('camera', camOptions); // followCamera.setPosition(0, 100, -600);

  followCamera.setPosition(0, 0, -150);
  followCamera.addComponent("script");
  followCamera.script.create("firstPersonCamera");
  followCamera.rotate(0, 180, 0);
  followCamera.lookAt(this.entity.model);
  this.entity.addChild(followCamera);
  /*
  const upCam = new pc.Entity('upCam');
  const camOptions = {
      fov: 10,
      nearClip: 100,
      farClip: 10000,
      clearColor: new pc.Color(0.1, 0.2, 0.3)
  };
      upCam.addComponent('camera', camOptions);
  
  // upCam.setPosition(0, 14 * 100, -3 * 1000);
  
  upCam.setPosition(0, 0, -150);
  
  upCam.rotate(0, 180, 0);
  upCam.lookAt(this.entity.model);
  this.entity.addChild(upCam);
  */

  this.entity.addComponent('rigidbody', {
    type: 'dynamic'
  });
  this.entity.rigidbody.activate();
  console.log(this.entity.rigidbody); // this.entity.translate(0, -150, 0);

  function makeBtn(name, text, btn) {
    btn.className = name;
    btn.textContent = text;
    document.body.appendChild(btn);
  }

  makeBtn('brake', 'brake', btnBrake);
  makeBtn('left', 'left', btnSteerLeft);
  makeBtn('right', 'right', btnSteerRight);
  makeBtn('acc', 'accelerate', btnAcc);
  var barcelonaTrack = app.root.findByName("Barcelona.stl");
  console.log('barcelona', barcelonaTrack); // barcelonaTrack.setLocalPosition(-100, -50, 20);
}; // update code called every frame
// Add rotation script to car


TestDrive.prototype.update = function (dt) {
  pos = this.entity.getPosition();
  var distance = pos.z;
  var posZ = document.querySelector('.z');
  var self = this; //huracan
  // accelerate(acceleration + 1.9, 325);
  // tezla
  // accelerate(2.5 + 1.9, 249);
  // i8

  function accelerate(acceleration, topSpeed) {
    /* 
    
    function accelerate(acceleration, topSpeed) {
        
        const accelerationKph = 100 / acceleration;
        
        if (speedKph <= topSpeed) {
            speed += accelerationKph;
            
        }
        
        */
    var seconds = 0;
    var secContainer = document.querySelector('#s');
    var kphMultiplier = 3.6;
    var linearVelocity = self.entity.rigidbody.linearVelocity;
    var speed = Math.round(linearVelocity.z * kphMultiplier);

    if (speed <= topSpeed) {
      var timer = function timer() {
        seconds++;
      };

      self.entity.rigidbody.linearVelocity.z += acceleration * dt;
      posZ.innerHTML = "z ".concat(Math.floor(pos.z), "\n        \n        distance ").concat(Math.floor(distance), " speed: ").concat(speed, " kph");

      var elapsedTime = function elapsedTime() {
        return setInterval(timer, 1000);
      };

      elapsedTime = Math.round(elapsedTime());

      if (speed === 100) {
        alert("acceleration 00:".concat(elapsedTime));
      }

      secContainer.innerHTML = "".concat(elapsedTime);
      setTimeout(function () {
        return posZ.innerHTML = "".concat(topSpeed, " kph");
      }, acceleration);
    } //    event.preventDefault();


    console.log('accelerate', speed);
  } // accelerate(25, topSpeed);


  function brake() {
    self.entity.translate(0, 0, -1 * dt);
  }

  function steerLeft() {
    self.entity.rotate(0, -10 * dt, 0);
    console.log('left');
  }

  function steerRight() {
    self.entity.rotate(0, 10 * dt, 0);
    console.log('right');
  } // accelerate(4.1 + 1.9, 250);


  btnBrake.addEventListener('click', brake);
  btnSteerLeft.addEventListener('click', steerLeft);
  btnSteerRight.addEventListener('click', steerRight);
  btnAcc.addEventListener('click', accelerate);
};
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/test-drive.js"], null)
//# sourceMappingURL=/test-drive.add30466.js.map