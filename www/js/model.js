  let UiScript;
  const Model = pc.createScript('Model');

  // initialize code called once per entity
  Model.prototype.initialize = function() {
  

  };

  // update code called every frame
  // Add rotation script to car
  Model.prototype.update = function(dt) {
    this.entity.rotate(0, dt * 45, 0);
  };
  

