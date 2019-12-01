// Create camera entity
const entity = new pc.Entity('cameraTurn');
const camOptions = {
    fov: 10,
    nearClip: 100,
    farClip: 10000,
    clearColor: new pc.Color(29/255, 29/255, 29/255)
};
entity.addComponent('camera', camOptions);
// Set up initial positions and orientations
  // entity.setPosition(0, 50, -400);

entity.setPosition(0, 0, 150);



  



app.root.addChild(entity);