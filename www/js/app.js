// Create a PlayCanvas application
const canvas = document.querySelector("#application-canvas");
canvas.focus();
const app = new pc.Application(canvas, {
    mouse: new pc.Mouse(canvas),
    keyboard: new pc.Keyboard(window)
});

app.start();

// Fill the available space at full resolution
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);



  