// Create a PlayCanvas application
const canvas = document.querySelector("#application-canvas");
const app = new pc.Application(canvas, {});

app.start();

// Fill the available space at full resolution
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);