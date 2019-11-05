const TestDrive = pc.createScript('TestDrive');

const btnBrake = document.createElement('button');
const btnSteerLeft = document.createElement('button');
const btnSteerRight = document.createElement('button');

let pos;

TestDrive.prototype.loadJsonFromRemote = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        callback(JSON.parse(this.response));
    });
    xhr.open("GET", url);
    xhr.send();
};

TestDrive.prototype.initialize = function() {
    this.loadJsonFromRemote("/www/data/carProps.json", function(cars) {

        console.log(cars.akura.nzx_r.topSpeed);
    });

    // follow a car

    const followCamera = new pc.Entity('followCam');
    const camOptions = {
        fov: 40,
        nearClip: 100,
        farClip: 10000,
        clearColor: new pc.Color(0.1, 0.2, 0.3)
    };
    followCamera.addComponent('camera', camOptions);


    followCamera.setPosition(0, 100, -600);



    followCamera.addComponent("script");
    followCamera.script.create("firstPersonCamera");


    // followCamera.setPosition(0, 0, 150);

    // followCamera.rotate(0, 180, 0);


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


    console.log('pos', this.entity);
    // this.entity.translate(0, -150, 0);

    function makeBtn(name, text, btn) {
        btn.className = name;
        btn.textContent = text;
        document.body.appendChild(btn);
    }



    makeBtn('brake', 'brake', btnBrake);
    makeBtn('left', 'left', btnSteerLeft);
    makeBtn('right', 'right', btnSteerRight);

    const barcelonaTrack = app.root.findByName("Barcelona.stl");
    console.log('barcelona', barcelonaTrack);

    // barcelonaTrack.setLocalPosition(-100, -50, 20);

};

// update code called every frame
// Add rotation script to car
TestDrive.prototype.update = function(dt) {
    pos = this.entity.getPosition();
    const distance = pos.z;
    const posZ = document.querySelector('.z');
    const self = this;
    let speed = 0;

    //huracan
    // accelerate(acceleration + 1.9, 325);

    // tezla
    // accelerate(2.5 + 1.9, 249);

    // i8
    function accelerate(acceleration, topSpeed) {

        const kphMultiplier = 3.6;
        let speedKph = Math.floor(distance * kphMultiplier);

        const accelerationKph = 100 / acceleration;

        let seconds = 0;
        const secContainer = document.querySelector('#s');

        if (speedKph <= topSpeed) {
        speed += accelerationKph;

        function timer() {
            seconds++;
        }
        let elapsedTime = () => setInterval(timer, 1000);
        elapsedTime = Math.round(elapsedTime());

        secContainer.innerHTML = `${elapsedTime}`;

        posZ.innerHTML = `z ${Math.floor(pos.z)}
             speed ${speedKph} kph
              distance ${Math.floor(distance)}`;

        // console.log('drive');

        self.entity.translate(0, 0, speed * dt);
        setTimeout(() => posZ.innerHTML = `${topSpeed} kph`, acceleration);
        }
        

            self.entity.translate(0, 0, speed * dt);

        






    }


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
    accelerate(4.1 + 1.9, 250);

    btnBrake.addEventListener('touchstart', brake);

    btnSteerLeft.addEventListener('touchstart', steerLeft);
    btnSteerRight.addEventListener('touchstart', steerRight);


};