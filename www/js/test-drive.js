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

        const modelsArr = [
            '3000gt.gltf',
            '300c.gltf',
            '370z.gltf',
            '430.gltf',
            '458-italia.gltf',
            '576-gt.gltf',
            '599.gltf',
            '7.gltf',
            '8-series-concept.gltf',
            '812-superfast.gltf',
            '8c-spider.gltf',
            '911-turbo.gltf',
            '918-r-type.gltf',
            '996.gltf',
            '997-gt3.gltf',
            'a8.gltf',
            'aero-x.gltf',
            'agera.gltf',
            'amge-gts.gltf',
            'asterion.gltf',
            'asterisk.gltf',
            'aventador.gltf',
            'aventador-roadster.gltf',
            'avus.gltf',
            'b11s.gltf',
            'boxster-s.gltf',
            'boxster.gltf',
            'gran-cabrio.gltf',
            'camaro-old.gltf',
            'camaro.gltf',
            'carrera-gt.gltf',
            'cayman-2017.gltf',
            'ccx.gltf',
            'charger.gltf',
            'chiron.gltf',
            'cien.gltf',
            'cl.gltf',
            'clk-dtm.gltf',
            'clk-gtr.gltf',
            'cobra.gltf',
            'concept-car-2009.gltf',
            'concept-car-7.gltf',
            'concept-car5.gltf',
            'continental-gt-supersports.gltf',
            'corvete-concept.gltf',
            'corvette-C7.gltf',
            'crossfire.gltf',
            'cts.gltf',
            'cx-75.gltf',
            'DBR9.gltf',
            'dbs-volante.gltf',
            'diablo-sv.gltf',
            'eclipse.gltf',
            'ego.gltf',
            'evora.gltf',
            'exelero.gltf',
            'exige-s.gltf',
            'exotic-car.gltf',
            'f-type.gltf',
            'f1.gltf',
            'f12.gltf',
            'firebird.gltf',
            'gallardo.gltf',
            'gs.gltf',
            'gt-90.gltf',
            'citron-gt.gltf',
            'fort-gt.gltf',
            'maklaren-GT.gltf',
            'mazerati-GT.gltf',
            'gto.gltf',
            'gtr-800.gltf',
            'gtr-nizmo.gltf',
            'huayra.gltf',
            'huracan.gltf',
            'i8.gltf',

            'impreza.gltf',
            'la-ferari.gltf',
            'lancer-evolution-x.gltf',
            'lancer-wrc.gltf',
            'lfa.gltf',
            'm3-e92.gltf',
            'M3-GTR.gltf',
            'm3.gltf',
            'm5-tuning.gltf',
            'm6.gltf',
            'mc12.gltf',
            'ME.gltf',
            'model-s.gltf',
            'modena.gltf',
            'monaro.gltf',
            'mp4-12c.gltf',
            'mp4.gltf',
            'murcielago.gltf',
            'mustang-salen.gltf',
            'mustang.gltf',
            'MX-5.gltf',
            'mx5-2016.gltf',
            'NZX TAKATA DOME.gltf',
            'NZX_GT3.gltf',
            'nzx.gltf',
            'one-77.gltf',
            'one1.gltf',
            'p1.gltf',
            'panamera-turbo.gltf',
            'phantom.gltf',
            'quatroporte.gltf',
            'r18.gltf',
            'R35-GTR.gltf',
            'r8-fsi.gltf',
            'r8-le-mans.gltf',
            'race-car.gltf',
            'rapide.gltf',
            'reventon.gltf',
            'rs7.gltf',
            'rsq.gltf',
            'rt-12s.gltf',
            'RX-7.gltf',
            'RX-8.gltf',
            's2000-tuned.gltf',
            's7.gltf',
            'sagaris.gltf',
            'skyline-gtr.gltf',
            'slr-maklaren.gltf',
            'sls-amge.gltf',
            'sls.gltf',
            'soarer.gltf',
            'speedster.gltf',
            'spyder.gltf',
            'st1.gltf',
            'SuperSport.gltf',
            'testarosa.gltf',
            'tt-clubsport.gltf',
            'urus.gltf',
            'v12-vanquish.gltf',
            'vanquish.gltf',
            'vantage.gltf',
            'veneno.gltf',
            'venom-gt.gltf',
            'veyron.gltf',
            'viper-gts.gltf',
            'viper-zrt.gltf',
            'viper.gltf',

            'vm-x1.gltf',
            'vulcan.gltf',
            'wizard-gt.gltf',
            'xkr.gltf',
            'xrx.gltf',
            'zagato-tz3-stradale.gltf',
            'zonda-f.gltf',
            'zonda.gltf',
            'zrt-challenger.gltf',

        ];
        const models = {
            nisan_3000gt: modelsArr[0],
            hrysler_300c: modelsArr[1],
            nisan_370z: modelsArr[2],
            ferari_430: modelsArr[3],
            ferari_458_italia: modelsArr[4],
            maklaren_576gt: modelsArr[5],
            ferari_599: modelsArr[6],
            bmv_7: modelsArr[7],
            bmv_8_series: modelsArr[8],
            ferari_812: modelsArr[9],
            alfa_8c: modelsArr[10],
            porshe_911: modelsArr[11],
            porshe_918: modelsArr[12],
            porshe_996: modelsArr[13],
            porshe_997: modelsArr[14],
            a8: modelsArr[15],
            aero_x: modelsArr[16],
            agera: modelsArr[17],
            amge: modelsArr[18],
            asterion: modelsArr[19],
            asterisk: modelsArr[20],
            aventador: modelsArr[21],
            aventador_roadster: modelsArr[22],
            avus: modelsArr[23],
            b11s: modelsArr[24],
            boxster_s: modelsArr[25],
            boxster: modelsArr[26],
            gran_cabrio: modelsArr[27],
            camaro_old: modelsArr[28],
            camaro: modelsArr[29],
            carrera: modelsArr[30],
            cayman: modelsArr[31],
            ccx: modelsArr[32],
            charger: modelsArr[33],
            chiron: modelsArr[34],
            cien: modelsArr[35],
            cl: modelsArr[36],
            clk_dtm: modelsArr[37],
            clk_gtr: modelsArr[38],
            cobra: modelsArr[39],
            concept_2009: modelsArr[40],
            concept_7: modelsArr[41],
            concept_5: modelsArr[42],
            continental: modelsArr[43],
            corvete_concept: modelsArr[44],
            corvete_c7: modelsArr[45],
            crossfire: modelsArr[46],
            cts: modelsArr[47],
            cx75: modelsArr[48],
            dbr9: modelsArr[49],
            dbs: modelsArr[50],
            diablo: modelsArr[51],
            eclipse: modelsArr[52],
            ego: modelsArr[53],
            evora: modelsArr[54],
            exelero: modelsArr[55],
            exige: modelsArr[56],
            exotic: modelsArr[57],
            f_type: modelsArr[58],
            f1: modelsArr[59],
            f12: modelsArr[60],
            firebird: modelsArr[61],
            gallardo: modelsArr[62],
            gs: modelsArr[63],
            gt90: modelsArr[64],
            citron_gt: modelsArr[65],
            fort_gt: modelsArr[66],
            maklaren_gt: modelsArr[67],
            mazerati_gt: modelsArr[68],
            gto: modelsArr[69],
            gtr800: modelsArr[70],
            gtr_nizmo: modelsArr[71],
            huayra: modelsArr[72],
            huracan: modelsArr[73],
            i8: modelsArr[74],
            impreza: modelsArr[75],
            laferari: modelsArr[76],
            lancer_evo: modelsArr[77],
            lancer_wrc: modelsArr[78],
            lfa: modelsArr[79],
            m3_e92: modelsArr[80],
            m3_gtr: modelsArr[81],
            m3: modelsArr[82],
            m5: modelsArr[83],
            m6: modelsArr[84],
            mc12: modelsArr[85],
            me: modelsArr[86],
            model_s: modelsArr[87],
            modena: modelsArr[88],
            monaro: modelsArr[89],
            mp4_12c: modelsArr[90],
            mp4: modelsArr[91],
            murcielago: modelsArr[92],
            mustang_salen: modelsArr[93],
            mustang: modelsArr[94],
            mx5: modelsArr[95],
            mx5_2016: modelsArr[96],
            nzx_takata: modelsArr[97],
            nzx_gt3: modelsArr[98],
            nzx: modelsArr[99],
            one77: modelsArr[100],
            one1: modelsArr[101],
            p1: modelsArr[102],
            panamera: modelsArr[103],
            phantom: modelsArr[104],
            quatroporte: modelsArr[105],
            r18: modelsArr[106],
            r35: modelsArr[107],
            r8_fsi: modelsArr[108],
            r8_le_mans: modelsArr[109],
            race_car: modelsArr[110],
            rapide: modelsArr[111],
            reventon: modelsArr[112],
            rs7: modelsArr[113],
            rsq: modelsArr[114],
            rt_12s: modelsArr[115],
            rx7: modelsArr[116],
            rx8: modelsArr[117],
            s2000: modelsArr[118],
            s7: modelsArr[119],
            sagaris: modelsArr[120],
            skyline: modelsArr[121],
            slr: modelsArr[122],
            sls_amge: modelsArr[123],
            sls: modelsArr[124],
            soarer: modelsArr[125],
            speedster: modelsArr[126],
            spyder: modelsArr[127],
            st1: modelsArr[128],
            supersport: modelsArr[129],
            testarosa: modelsArr[130],
            tt: modelsArr[131],
            urus: modelsArr[132],
            v12_vanquish: modelsArr[133],
            vanquish: modelsArr[134],
            vantage: modelsArr[135],
            veneno: modelsArr[136],
            venom: modelsArr[137],
            veyron: modelsArr[138],
            viper_gts: modelsArr[139],
            viper_zrt: modelsArr[140],
            viper: modelsArr[141],
            vm: modelsArr[142],
            vulcan: modelsArr[143],
            wizard: modelsArr[144],
            xkr: modelsArr[145],
            xrx: modelsArr[146],
            tz3: modelsArr[147],
            zonda_f: modelsArr[148],
            challenger: modelsArr[149]

        };

        // TODO: add topSpeeds

        if (app.assets.find(models.avus)) {

            topSpeed = cars.adi.avus.topSpeed;
        }
        else if (app.assets.find(models.nzx)) {

            topSpeed = cars.akura.nzx_r.topSpeed;
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

    accelerate(25, topSpeed);

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