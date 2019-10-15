// Create camera entity
const entity = new pc.Entity();
const camOptions = { fov: 45, 
	nearClip: 100,
    farClip: 10000,
    clearColor: new pc.Color(0.1, 0.2, 0.3)
};
entity.addComponent('camera', camOptions);
// Set up initial positions and orientations

entity.setLocalPosition(200, 1000, 8000);

pc.app.root.addChild(entity);