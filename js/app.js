let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let blobRadius = 50;
let blobAmount = 10;

let yoff = 0.0;
let concrete;
let insulation;


function preload() {
  concrete = loadImage("assets/concrete.jpg");
  insulation = loadImage("assets/insulation.jpg");
}

function setup() {
  pixelDensity(1);
  data = new Data();
  createCanvas(windowW, windowH, P2D);
  noStroke();
}

function draw() {
  data.update();

  background(0);

  image(data.output.video, 0, 0);
  image(concrete, 0, 0, width, height);

  // Visual response: draw a rectangle around a detected person.
  // These graphics are placeholders/ code examples- not designs.
  // Feel free to change or remove them as you wish.
  for (let i = 0; i < data.output.persons.length; i++) {
    push ();
    translate(
      data.output.persons[0].centerPoint["x"],
      data.output.persons[0].centerPoint["y"],
      200
    );

    beginShape();
    // Exterior part of shape, clockwise winding
    vertex(-width, -height);
    vertex(width, -height);
    vertex(width, height);
    vertex(-width, height);
    // Interior part of shape, counter-clockwise winding
    beginContour();

    for (let i = 0; i < TWO_PI; i += 0.1) {
      var offset = map(noise(i, millis() / 1000), 0, 1, -25, 25);
      var r = 100 + offset;
      var x = cos(i) * r;
      var y = sin(i) * -r;
      vertex(x, y * 1.7);
    }

    endContour();
    endShape(CLOSE);

    pop ();

    generateRadius();
  }
}

//Generates the layers around the last texture
function generateRadius() {
  for (var a = blobAmount; a > 0; a--) {
    drawConcrete(a);
  }
}

//Generates the concrete layer
function drawConcrete(a) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
  var radius = blobRadius * a;

  fill(144, 144, 144, 255 - (255 / blobAmount) * a);

  noStroke();
  //texture (img);
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(a, millis() / 1000), 0, 1, -35, 35);
    var r = radius + offset;
    var x = cos(a) * r;
    var y = sin(a) * -r;
    vertex(x, y * 1.7);
    //ellipse(x, y, 4, 4);
  }
  endShape();
  pop();

  yoff += 0.008;
}
