  const Turn = pc.createScript('Turn');

  // initialize code called once per entity
  Turn.prototype.initialize = function() {

  };

  // update code called every frame
  // Add rotation script to car
  Turn.prototype.update = function(dt) {
    this.entity.rotate(0, dt * 45, 0);
  };
  

