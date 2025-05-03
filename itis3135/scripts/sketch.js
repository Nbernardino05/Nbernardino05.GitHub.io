function setup() {
    // create canvas that fits in main content area
    let canvas = createCanvas(800, 500);
    canvas.parent('canvas-container');
    background(240); // light gray colored background
}

function draw() {
    // starts drawing only when mouse pressed
    if (mouseIsPressed) {
        // changes color based on mouse position
        let r = map(mouseX, 0, width, 0, 255);
        let b = map(mouseY, 0, height, 0, 255);
        fill(r, 100, b);
        noStroke();
        
        ellipse(mouseX, mouseY, 20, 20);
    }
}

// clears canvas when spacebar pressed
function keyPressed() {
    if (key === ' ') {
        background(240);
    }
}