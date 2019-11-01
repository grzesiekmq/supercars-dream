const TestDrive = pc.createScript('TestDrive');

const btnBrake = document.createElement('button');
const btnSteerLeft = document.createElement('button');
const btnSteerRight = document.createElement('button');

let pos;

TestDrive.prototype.loadJsonFromRemote = function(url, callback) 
{
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        callback(JSON.parse(this.response));
    });
    xhr.open("GET", url);
    xhr.send();
};

TestDrive.prototype.initialize = function() 
{
    this.loadJsonFromRemote("/www/data/carProps.json", function(cars) 
    {

        console.log(cars.akura.nzx_r.topSpeed);
    });

    // follow a car
    const followCamera = new pc.Entity();
    const camOptions = {
        fov: 45,
        nearClip: 100,
        farClip: 10000,
        clearColor: new pc.Color(0.1, 0.2, 0.3)
    };
    followCamera.addComponent('camera', camOptions);
    followCamera.setPosition(0, 150, -600);
    followCamera.rotateLocal(0, 180, 0);
    followCamera.lookAt(this.entity);
    this.entity.addChild(followCamera);

    console.log('scale', this.entity.getLocalScale());
    // this.entity.translate(0, -150, 0);

    function makeBtn(name, text, btn) 
    {
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
TestDrive.prototype.update = function(dt) 
{

    //huracan
    // accelerate(acceleration + 1.9, 325);

    // tezla
    // accelerate(2.5 + 1.9, 249);

    // i8
    this.accelerate(4.1 + 1.9, 250);

    btnBrake.addEventListener('touchstart', this.brake);

    btnSteerLeft.addEventListener('touchstart', this.steerLeft);
    btnSteerRight.addEventListener('touchstart', this.steerRight);

};

TestDrive.prototype.steerLeft = function(dt) 
{
    self.entity.rotate(0, -10 * dt, 0);
    console.log('left');

};
TestDrive.prototype.steerRight = function(dt) 
{
    self.entity.rotate(0, 10 * dt, 0);
    console.log('right');

};

TestDrive.prototype.accelerate = function(acceleration, topSpeed, dt) 
{
    pos = this.entity.getPosition();
    const posZ = document.querySelector('.z');
    const distance = pos.z;
    let speed = 0;
    const self = this;
    
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

}

TestDrive.prototype.brake = function() {
    self.entity.translate(0, 0, -speed * dt);

};