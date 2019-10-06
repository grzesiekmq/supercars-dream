// Create camera entity
const entity = new pc.Entity();
entity.addComponent('camera', { fov: 61,
    clearColor: new pc.Color(0.1, 0.2, 0.3)
});
// Set up initial positions and orientations
entity.setPosition(-27.789, 5.841, -6.747);
entity.rotateLocal(160.52, -70.69, 180);

pc.app.root.addChild(entity);
