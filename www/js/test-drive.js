const TestDrive = pc.createScript('TestDrive');

const btnBrake = document.createElement('button');
const btnSteerLeft = document.createElement('button');
const btnSteerRight = document.createElement('button');
const btnAcc = document.createElement('button');

let pos;

TestDrive.prototype.loadJsonFromRemote = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        callback(JSON.parse(this.response));
    });
    xhr.open("GET", url);
    xhr.send();
};
let topSpeed;
TestDrive.prototype.initialize = function () {
    this.loadJsonFromRemote("/www/data/carProps.json", function (cars) {

        const modelsArr = cars.modelsArr;

        console.log(modelsArr);

        
            
           
            
        
    
            

        // TODO: add topSpeeds
        const adi = cars.adi;
        const akura = cars.akura;
        const alfa = cars.alfa;
        const aston = cars.aston
        const bentle = cars.bentle
        const bmv = cars.bmv
        const bugati = cars.bugati
        const cadilac = cars.cadilac
        const chonda = cars.chonda
        const citron = cars.citron
        const dodg = cars.dodg
        const ferari = cars.ferari
        const fort = cars.fort
        const henesey = cars.henesey
        const hevrolet = cars.hevrolet
        const holdem = cars.holdem
        const hrysler = cars.hrysler
        const jagur = cars.jagur
        const konigseg = cars.konigseg
        const lambo = cars.lambo
        const lotuz = cars.lotuz
        const luxus = cars.luxus
        const maklaren = cars.maklaren
        const masda = cars.masda
        const maybah = cars.maybah
        const mazerati = cars.mazerati
        const merc = cars.merc
        const mitsushi = cars.mitsushi
        const nisan = cars.nisan
        const opl = cars.opl
        const other = cars.other
        const pahani = cars.pahani
        const pontiak = cars.pontiak
        const porshe = cars.porshe
        const rols_roys = cars.rols_roys
        const rufe = cars.rufe
        const sab = cars.sab
        const salen = cars.salen
        const shelbi = cars.shelbi
        const tezla = cars.tezla
        const tojota = cars.tojota
        const twr = cars.twr
        const vendeta = cars.vendeta
        const vw = cars.vw
        const zenwo = cars.zenwo
        const zubaru = cars.zubaru;

        // adi
    
        // TO MODIFY!!!
        if (app.assets.find(models.a8)) {
            topSpeed = adi.a8.topSpeed;
        }

        else if (app.assets.find(models.avus)) {

            topSpeed = adi.avus.topSpeed;
        }

        else if (app.assets.find(models.r18)) {
            topSpeed = adi.r18.topSpeed;
        }
        else if (app.assets.find(models.r8_fsi)) {
            topSpeed = adi.r8_fsi.topSpeed;
        }
        else if (app.assets.find(models.r8_le_mans)) {
            topSpeed = adi.r8_le_mans.topSpeed;
        }
        else if (app.assets.find(models.rs7)) {
            topSpeed = adi.rs7.topSpeed;
        }
        else if (app.assets.find(models.rsq)) {
            topSpeed = adi.rsq.topSpeed;
        }
        else if (app.assets.find(models.tt)) {
            topSpeed = adi.tt.topSpeed;
        }

        // akura

        else if (app.assets.find(models.nzx)) {

            topSpeed = akura.nzx.topSpeed;
        }
        else if (app.assets.find(models.xrx)) {
            topSpeed = akura.xrx.topSpeed;
        }

        else if (app.assets.find(models.nzx_gt3)) {
            topSpeed = akura.nzx_gt3.topSpeed;
        }

        // alfa

        else if (app.assets.find(models.alfa_8c)) {
            topSpeed = alfa.alfa_8c.topSpeed;
        }
        else if (app.assets.find(models.tz3)) {
            topSpeed = alfa.tz3.topSpeed;
        }

        // aston
        else if (app.assets.find(models.dbr9)) {
            topSpeed = aston.dbr9.topSpeed;
        }
        else if (app.assets.find(models.rapide)) {
            topSpeed = aston.rapide.topSpeed;
        } else if (app.assets.find(models.vantage)) {
            topSpeed = aston.vantage.topSpeed;
        }
        else if (app.assets.find(models.dbs)) {
            topSpeed = aston.dbs.topSpeed;
        } else if (app.assets.find(models.vanquish)) {
            topSpeed = aston.vanquish.topSpeed;
        }
        else if (app.assets.find(models.one77)) {
            topSpeed = aston.one77.topSpeed;

        } else if (app.assets.find(models.v12_vanquish)) {
            topSpeed = aston.v12_vanquish.topSpeed;
        }
        else if (app.assets.find(models.vulcan)) {
            topSpeed = aston.vulcan.topSpeed;

        }

        // bentle

        else if (app.assets.find(models.continental)) {
            topSpeed = bentle.continental.topSpeed;
        }
        // bmv

        else if (app.assets.find(models.bmv_7)) {
            topSpeed = bmv.bmv_7.topSpeed;
        } else if (app.assets.find(models.m3)) {
            topSpeed = bmv.m3.topSpeed;
        }
        else if (app.assets.find(models.m3_e92)) {
            topSpeed = bmv.m3_e92.topSpeed;
        } else if (app.assets.find(models.m3_gtr)) {
            topSpeed = bmv.m3_gtr.topSpeed;
        }
        else if (app.assets.find(models.m5)) {
            topSpeed = bmv.m5.topSpeed;
        } else if (app.assets.find(models.bmv_8_series)) {
            topSpeed = bmv.bmv_8_series.topSpeed;
        }
        else if (app.assets.find(models.i8)) {
            topSpeed = bmv.i8.topSpeed;

        }
        // bugati
        else if (app.assets.find(models.chiron)) {
            topSpeed = bugati.chiron.topSpeed;
        }
        else if (app.assets.find(models.veyron)) {
            topSpeed = bugati.veyron.topSpeed;

        }

        // cadilac

        else if (app.assets.find(models.cien)) {
            topSpeed = cadilac.cien.topSpeed;
        }
        else if (app.assets.find(models.cts)) {
            topSpeed = cadilac.cts.topSpeed;

        }

        // chonda

        else if (app.assets.find(models.s2000)) {
            topSpeed = chonda.s2000.topSpeed;
        }
        else if (app.assets.find(models.nzx_takata)) {
            topSpeed = chonda.nzx_takata.topSpeed;
        }

        // citron

        else if (app.assets.find(models.citron_gt)) {
            topSpeed = citron.citron_gt.topSpeed;
        }

        // dodg

        else if (app.assets.find(models.charger)) {
            topSpeed = dodg.charger.topSpeed;
        }
        else if (app.assets.find(models.viper)) {
            topSpeed = dodg.viper.topSpeed;
        }
        else if (app.assets.find(models.viper_zrt)) {
            topSpeed = dodg.viper_zrt.topSpeed;
        } else if (app.assets.find(models.viper_gts)) {
            topSpeed = dodg.viper_gts.topSpeed;
        }
        else if (app.assets.find(models.challenger)) {
            topSpeed = dodg.challenger.topSpeed;
        }

        // ferari

        else if(app.assets.find(models.ferari_430)){
            topSpeed = ferari.ferari_430.topSpeed;
        }

        else if (app.assets.find(models.ferari_599)) {
            topSpeed = ferari.ferari_599.topSpeed;
        }
        else if (app.assets.find(models.modena)) {
            topSpeed = ferari.modena.topSpeed;
        } else if (app.assets.find(models.ferari_458_italia)) {
            topSpeed = ferari.ferari_458_italia.topSpeed;
        }
        else if (app.assets.find(models.testarosa)) {
            topSpeed = ferari.testarosa.topSpeed;
        } else if (app.assets.find(models.ferari_812)) {
            topSpeed = ferari.ferari_812.topSpeed;
        }
        else if (app.assets.find(models.f12)) {
            topSpeed = ferari.f12.topSpeed;
        } else if (app.assets.find(models.laferari)) {
            topSpeed = ferari.laferari.topSpeed;
        }

        // fort

        else if (app.assets.find(models.gt90)) {
            topSpeed = fort.gt90.topSpeed;
        } else if (app.assets.find(models.mustang_salen)) {
            topSpeed = fort.mustang_salen.topSpeed;
        }
        else if (app.assets.find(models.fort_gt)) {
            topSpeed = fort.fort_gt.topSpeed;
        } else if (app.assets.find(models.mustang)) {
            topSpeed = fort.mustang.topSpeed;
        }
        // henesey
        else if (app.assets.find(models.venom)) {
            topSpeed = henesey.venom.topSpeed;
        }
        // hevrolet
        else if (app.assets.find(models.camaro_old)) {
            topSpeed = hevrolet.camaro_old.topSpeed;
        }
        else if (app.assets.find(models.camaro)) {
            topSpeed = hevrolet.camaro.topSpeed;
        } else if (app.assets.find(models.corvete_c7)) {
            topSpeed = hevrolet.corvete_c7.topSpeed;
        }
        else if (app.assets.find(models.corvete_concept)) {
            topSpeed = hevrolet.corvete_concept.topSpeed;
        }
        // holdem
        else if (app.assets.find(models.monaro)) {
            topSpeed = holdem.monaro.topSpeed;
        }
        // hrysler
        else if (app.assets.find(models.hrysler_300c)) {
            topSpeed = hrysler.hrysler_300c.topSpeed;
        } else if (app.assets.find(models.crossfire)) {
            topSpeed = hrysler.crossfire.topSpeed;
        }
        else if (app.assets.find(models.me)) {
            topSpeed = hrysler.me.topSpeed;
        }
        // jagur
        else if (app.assets.find(models.cx75)) {
            topSpeed = jagur.cx75.topSpeed;
        }
        else if (app.assets.find(models.f_type)) {
            topSpeed = jagur.f_type.topSpeed;
        } else if (app.assets.find(models.xkr)) {
            topSpeed = jagur.xkr.topSpeed;
        }
        // konigseg
        else if (app.assets.find(models.one1)) {
            topSpeed = konigseg.one1.topSpeed;
        } else if (app.assets.find(models.agera)) {
            topSpeed = konigseg.agera.topSpeed;
        }
        else if (app.assets.find(models.ccx)) {
            topSpeed = konigseg.ccx.topSpeed;
        }
        // lambo
        else if (app.assets.find(models.huracan)) {
            topSpeed = lambo.huracan.topSpeed;
        }
        else if (app.assets.find(models.diablo)) {
            topSpeed = lambo.diablo.topSpeed;
        } else if (app.assets.find(models.gallardo)) {
            topSpeed = lambo.gallardo.topSpeed;
        }
        else if (app.assets.find(models.urus)) {
            topSpeed = lambo.urus.topSpeed;
        } else if (app.assets.find(models.reventon)) {
            topSpeed = lambo.reventon.topSpeed;
        }
        else if (app.assets.find(models.murcielago)) {
            topSpeed = lambo.murcielago.topSpeed;
        } else if (app.assets.find(models.veneno)) {
            topSpeed = lambo.veneno.topSpeed;
        }
        else if (app.assets.find(models.aventador)) {
            topSpeed = lambo.aventador.topSpeed;
        }
        else if(app.assets.find(models.aventador_roadster)){
            topSpeed = lambo.aventador_roadster.topSpeed;
        }

        else if (app.assets.find(models.asterion)) {
            topSpeed = lambo.asterion.topSpeed;
        }

        // lotuz
        else if (app.assets.find(models.evora)) {
            topSpeed = lotuz.evora.topSpeed;
        } else if (app.assets.find(models.exige)) {
            topSpeed = lotuz.exige.topSpeed;
        }
        // luxus
        else if (app.assets.find(models.gs)) {
            topSpeed = luxus.gs.topSpeed;
        } else if (app.assets.find(models.lfa)) {
            topSpeed = luxus.lfa.topSpeed;
        }

        // maklaren
        else if (app.assets.find(models.f1)) {
            topSpeed = maklaren.f1.topSpeed;
        } else if (app.assets.find(models.mp4)) {
            topSpeed = maklaren.mp4.topSpeed;
        }
        else if (app.assets.find(models.p1)) {
            topSpeed = maklaren.p1.topSpeed;
        }
        else if (app.assets.find(models.maklaren_576gt)) {
            topSpeed = maklaren.maklaren_576gt.topSpeed;
        }
        else if (app.assets.find(models.maklaren_gt)) {
            topSpeed = maklaren.maklaren_gt.topSpeed;
        }

        // masda
        else if (app.assets.find(models.mx5)) {
            topSpeed = masda.mx5.topSpeed;
        }
        else if (app.assets.find(models.mx5_2016)) {
            topSpeed = masda.mx5_2016.topSpeed;
        } else if (app.assets.find(models.rx7)) {
            topSpeed = masda.rx7.topSpeed;
        }
        else if (app.assets.find(models.rx8)) {
            topSpeed = masda.rx8.topSpeed;
        }

        // maybah
        else if (app.assets.find(models.exelero)) {
            topSpeed = maybah.exelero.topSpeed;
        }

        // mazerati
        else if (app.assets.find(models.spyder)) {
            topSpeed = mazerati.spyder.topSpeed;
        } else if (app.assets.find(models.mazerati_gt)) {
            topSpeed = mazerati.mazerati_gt.topSpeed;
        }
        else if (app.assets.find(models.mc12)) {
            topSpeed = mazerati.mc12.topSpeed;
        } else if (app.assets.find(models.quatroporte)) {
            topSpeed = mazerati.quatroporte.topSpeed;
        }
        else if(app.assets.find(models.gran_cabrio)){
            topSpeed = mazerati.gran_cabrio.topSpeed;
        }
        

        // merc
        else if (app.assets.find(models.amge)) {
            topSpeed = merc.amge.topSpeed;
        } else if (app.assets.find(models.cl)) {
            topSpeed = merc.cl.topSpeed;
        }
        else if (app.assets.find(models.clk_gtr)) {
            topSpeed = merc.clk_gtr.topSpeed;
        } else if (app.assets.find(models.slr)) {
            topSpeed = merc.slr.topSpeed;
        }
        else if (app.assets.find(models.sls)) {
            topSpeed = merc.sls.topSpeed;
        } else if (app.assets.find(models.sls_amge)) {
            topSpeed = merc.sls_amge.topSpeed;
        }
        else if (app.assets.find(models.clk_dtm)) {
            topSpeed = merc.clk_dtm.topSpeed;
        }

        // mitsushi
        else if (app.assets.find(models.mitsushi_3000gt)) {
            topSpeed = mitsushi.mitsushi_3000gt.topSpeed;
        }
        else if (app.assets.find(models.eclipse)) {
            topSpeed = mitsushi.eclipse.topSpeed;
        } else if (app.assets.find(models.lancer_evo)) {
            topSpeed = mitsushi.lancer_evo.topSpeed;
        }
        else if (app.assets.find(models.lancer_wrc)) {
            topSpeed = mitsushi.lancer_wrc.topSpeed;
        }

        // nisan
        else if (app.assets.find(models.nisan_370z)) {
            topSpeed = nisan.nisan_370z.topSpeed;
        }
        else if (app.assets.find(models.gtr_nizmo)) {
            topSpeed = nisan.gtr_nizmo.topSpeed;
        } else if (app.assets.find(models.r35)) {
            topSpeed = nisan.r35.topSpeed;
        }
        else if (app.assets.find(models.skyline)) {
            topSpeed = nisan.skyline.topSpeed;
        }

        // opl
        else if (app.assets.find(models.speedster)) {
            topSpeed = opl.speedster.topSpeed;
        }

        // other
        else if (app.assets.find(models.asterisk)) {
            topSpeed = other.asterisk.topSpeed;
        } else if (app.assets.find(models.exotic)) {
            topSpeed = other.exotic.topSpeed;
        }
        else if (app.assets.find(models.concept_2009)) {
            topSpeed = other.concept_2009.topSpeed;
        } else if (app.assets.find(models.concept_5)) {
            topSpeed = other.concept_5.topSpeed;
        }
        else if (app.assets.find(models.concept_7)) {
            topSpeed = other.concept_7.topSpeed;
        } else if (app.assets.find(models.race_car)) {
            topSpeed = other.race_car.topSpeed;
        }
        else if (app.assets.find(models.vm)) {
            topSpeed = other.vm.topSpeed;
        } else if (app.assets.find(models.wizard)) {
            topSpeed = other.wizard.topSpeed;
        }

        else if(app.assets.find(models.supersport)){
            topSpeed = other.supersport.topSpeed;
        }

        // pahani
        else if (app.assets.find(models.zonda_f)) {
            topSpeed = pahani.zonda_f.topSpeed;
        } else if (app.assets.find(models.huayra)) {
            topSpeed = pahani.huayra.topSpeed;
        }

        // pontiak
        else if (app.assets.find(models.firebird)) {
            topSpeed = pontiak.firebird.topSpeed;
        } else if (app.assets.find(models.gto)) {
            topSpeed = pontiak.gto.topSpeed;
        }

        // porshe
        else if (app.assets.find(models.carrera)) {
            topSpeed = porshe.carrera.topSpeed;
        } else if (app.assets.find(models.porshe_911)) {
            topSpeed = porshe.porshe_911.topSpeed;
        }
        else if (app.assets.find(models.porshe_996)) {
            topSpeed = porshe.porshe_996.topSpeed;
        } else if (app.assets.find(models.boxster)) {
            topSpeed = porshe.boxster.topSpeed;
        }
        else if (app.assets.find(models.boxster_s)) {
            topSpeed = porshe.boxster_s.topSpeed;
        } else if (app.assets.find(models.panamera)) {
            topSpeed = porshe.panamera.topSpeed;
        }
        else if (app.assets.find(models.cayman)) {
            topSpeed = porshe.cayman.topSpeed;
        } else if (app.assets.find(models.porshe_918)) {
            topSpeed = porshe.porshe_918.topSpeed;
        }
        else if (app.assets.find(models.porshe_997)) {
            topSpeed = porshe.porshe_997.topSpeed;
        }

        // rols-roys
        else if (app.assets.find(models.phantom)) {
            topSpeed = rols_roys.phantom.topSpeed;
        }

        // rufe
        else if (app.assets.find(models.rt_12s)) {
            topSpeed = rufe.rt_12s.topSpeed;
        }

        // sab
        else if (app.assets.find(models.aero_x)) {
            topSpeed = sab.aero_x.topSpeed;
        }

        // salen
        else if (app.assets.find(models.s7)) {
            topSpeed = salen.s7.topSpeed;
        }

        // shelbi
        else if (app.assets.find(models.cobra)) {
            topSpeed = shelbi.cobra.topSpeed;
        }

        // tezla
        else if (app.assets.find(models.model_s)) {
            topSpeed = tezla.model_s.topSpeed;
        }

        // tojota
        else if (app.assets.find(models.soarer)) {
            topSpeed = tojota.soarer.topSpeed;
        }

        // twr
        else if (app.assets.find(models.sagaris)) {
            topSpeed = twr.sagaris.topSpeed;
        }

        // vendeta
        else if (app.assets.find(models.gtr800)) {
            topSpeed = vendeta.gtr800.topSpeed;
        }

        // vw
        else if (app.assets.find(models.ego)) {
            topSpeed = vw.ego.topSpeed;
        }

        // zenwo
        else if (app.assets.find(models.st1)) {
            topSpeed = zenwo.st1.topSpeed;
        }

        // zubaru
        else if (app.assets.find(models.b11s)) {
            topSpeed = zubaru.b11s.topSpeed;
        }
        else if (app.assets.find(models.impreza)) {
            topSpeed = zubaru.impreza.topSpeed;
        }

    });

    // follow a car

    const followCamera = new pc.Entity('followCam');
    const camOptions = {
        fov: 10,
        nearClip: 100,
        farClip: 10000,
        clearColor: new pc.Color(0.1, 0.2, 0.3)
    };
    followCamera.addComponent('camera', camOptions);

    // followCamera.setPosition(0, 100, -600);
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

    this.entity.addComponent('rigidbody', { type: 'dynamic' });
    this.entity.rigidbody.activate();
    console.log(this.entity.rigidbody);

    // this.entity.translate(0, -150, 0);

    function makeBtn(name, text, btn) {
        btn.className = name;
        btn.textContent = text;
        document.body.appendChild(btn);
    }

    makeBtn('brake', 'brake', btnBrake);
    makeBtn('left', 'left', btnSteerLeft);
    makeBtn('right', 'right', btnSteerRight);
    makeBtn('acc', 'accelerate', btnAcc);

    const barcelonaTrack = app.root.findByName("Barcelona.stl");
    console.log('barcelona', barcelonaTrack);

    // barcelonaTrack.setLocalPosition(-100, -50, 20);

};

// update code called every frame
// Add rotation script to car
TestDrive.prototype.update = function (dt) {
    pos = this.entity.getPosition();
    const distance = pos.z;
    const posZ = document.querySelector('.z');
    const self = this;

    //huracan
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

        let seconds = 0;
        const secContainer = document.querySelector('#s');
        const kphMultiplier = 3.6;

        const linearVelocity = self.entity.rigidbody.linearVelocity;
        let speed = Math.round(linearVelocity.z * kphMultiplier);
        if (speed <= topSpeed) {
            self.entity.rigidbody.linearVelocity.z += acceleration * dt;
            posZ.innerHTML = `z ${Math.floor(pos.z)}
        
        distance ${Math.floor(distance)} speed: ${speed} kph`;

            function timer() {
                seconds++;
            }

            let elapsedTime = () => setInterval(timer, 1000);
            elapsedTime = Math.round(elapsedTime());
            if (speed === 100) {
                alert(`acceleration 00:${elapsedTime}`);
            }

            secContainer.innerHTML = `${elapsedTime}`;

            setTimeout(() => posZ.innerHTML = `${topSpeed} kph`, acceleration);
        }

        //    event.preventDefault();

        console.log('accelerate', speed);
    }

    // accelerate(25, topSpeed);

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

    }
    // accelerate(4.1 + 1.9, 250);

    btnBrake.addEventListener('click', brake);

    btnSteerLeft.addEventListener('click', steerLeft);
    btnSteerRight.addEventListener('click', steerRight);

    btnAcc.addEventListener('click', accelerate);

};