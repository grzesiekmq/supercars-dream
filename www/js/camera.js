// Create camera entity
const entity = new pc.Entity('cameraTurn');
const camOptions = {
    fov: 10,
    // fov: 10,
    // fov: 5,
    nearClip: 100,
    farClip: 10000,
    clearColor: new pc.Color(29/255, 29/255, 29/255)
};
entity.addComponent('camera', camOptions);
// Set up initial positions and orientations
  // entity.setPosition(0, 50, -400);

// entity.setPosition(0, -10, 150);

entity.setPosition(0, -10, 200);

// entity.setPosition(0, 20, 3000);


  



app.root.addChild(entity);