const CarCtrl = pc.createScript('CarCtrl');

CarCtrl.prototype.initialize = function () {

};

CarCtrl.prototype.update = function (dt) {

    if (this.app.keyboard.isPressed(pc.KEY_UP)) {
        this.entity.rigidbody.applyForce(this.entity.forward.clone().scale(-10));
        console.log(this.entity.rigidbody.linearVelocity);
    }
    else if (this.app.keyboard.isPressed(pc.KEY_LEFT)) {
        this.entity.rigidbody.applyTorque(0, .1, 0);
        console.log(this.entity.rigidbody.angularVelocity);
    }
    else if (this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.rigidbody.applyTorque(0, -.1, 0);
        console.log(this.entity.rigidbody.angularVelocity);
    }
    else if (this.app.keyboard.isPressed(pc.KEY_DOWN)) {
        this.entity.rigidbody.applyForce(this.entity.forward.clone().scale(10));
        console.log(this.entity.rigidbody.linearVelocity);
    }

};