let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let blobRadius = 50;
let blobAmount = 14;

let yoff = 0.0;
let concrete;
let insulation;
let brick;
let tarp;


function preload() {
  concrete = loadImage("assets/concrete.jpg");
  insulation = loadImage("assets/insulation.jpg");
  brick = loadImage("assets/brick.jpg");
  tarp = loadImage("assets/tarp.jpg");
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

  // Visual response: draw a rectangle around a detected person.
  // These graphics are placeholders/ code examples- not designs.
  // Feel free to change or remove them as you wish.
  for (let i = 0; i < data.output.persons.length; i++) {
    generateRadius();
    drawConcrete();
    //drawInsulation();
    //drawBrick();
    //drawTarp();
  }
}

//Generates the layers around the last texture
function generateRadius() {
  for (var a = blobAmount; a > 0; a--) {
     drawConcreteBkgr(a);
    //drawInsulationBkgr(a);
    //drawBrickBkgr(a);
    //drawTarpBkgr(a);
  }
}


//Concrete texture layers
function drawConcrete(){
  push ();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"]
  );

  let shapeMask = createGraphics(400, 400);
  shapeMask.fill('rgba(0, 0, 0, 1)');
  //shapeMask.ellipse(200, 200, 200, 200);
  shapeMask.beginShape();
  var radius = 150;
  for (let i = 0; i < TWO_PI; i += 0.1) {
      var offset = shapeMask.map(noise(i, millis() / 1000), 0, 1, -60, 60);
      var r = radius + offset;
      var x = cos(i) * r;
      var y = sin(i) * -r;
      shapeMask.vertex(x, y * 1.7);
    }

  shapeMask.endShape(CLOSE);

  concrete.mask(shapeMask);
  image(concrete, -200, -280, 400, 500);

  

  // beginShape();
  // fill(181, 181, 181, 255);
  // // Exterior part of shape, clockwise winding
  // vertex(-200, -300);
  // vertex(200, -300);
  // vertex(200, 300);
  // vertex(-200, 300);
  // // Interior part of shape, counter-clockwise winding
  // beginContour();

  // var radius = 150;

  // for (let i = 0; i < TWO_PI; i += 0.1) {
  //   var offset = map(noise(i, millis() / 1000), 0, 1, -60, 60);
  //   var r = radius + offset;
  //   var x = cos(i) * r;
  //   var y = sin(i) * -r;
  //   vertex(x, y * 1.7);
  // }

  // endContour();
  // endShape(CLOSE);

  pop ();
}

//Generates the concrete background layers
function drawConcreteBkgr(a) {
  // push();
  // translate(
  //   data.output.persons[0].centerPoint["x"],
  //   data.output.persons[0].centerPoint["y"],
  //   200
  // );
  // var radius = blobRadius * a;

  // fill(181, 181, 181, 255 - (255 / blobAmount) * a);

  // noStroke();
  // //texture (img);
  // beginShape();

  // for (let a = 0; a < TWO_PI; a += 0.1) {
  //   var offset = map(noise(a, millis() / 1000), 0, 1, -60, 60);
  //   var r = radius + offset;
  //   var x = cos(a) * r;
  //   var y = sin(a) * -r;
  //   vertex(x, y * 1.7);
  //   //ellipse(x, y, 4, 4);
  // }
  // endShape();
  // pop();

  // yoff += 0.008;
}


//Insulation texture layers
function drawInsulation(){
  push ();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );

  image(insulation, -200, -280, 400, 580);

  beginShape();
  fill(250, 175, 165);
  // Exterior part of shape, clockwise winding
  vertex(-200, -300);
  vertex(200, -300);
  vertex(200, 300);
  vertex(-200, 300);
  // Interior part of shape, counter-clockwise winding
  beginContour();

  var radius = 150;

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(i, millis() / 1000), 0, 1, -25, 25);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x, y * 1.7);
  }

  endContour();
  endShape(CLOSE);

  pop ();
}

//Generates the insulation texture layers
function drawInsulationBkgr(a) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
  var radius = blobRadius * a;

  fill(250, 175, 165, 255 - (255 / blobAmount) * a);

  noStroke();
  //texture (img);
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(a, millis() / 1000), 0, 1, -25, 25);
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

//Brick texture layers
function drawBrick(){
  push ();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );

  image(brick, -200, -280, 400, 580);

  beginShape();
  fill(203, 86, 52);
  // Exterior part of shape, clockwise winding
  vertex(-200, -300);
  vertex(200, -300);
  vertex(200, 300);
  vertex(-200, 300);
  // Interior part of shape, counter-clockwise winding
  beginContour();

  var radius = 150;

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(i, millis() / 1000), 0, 1, -100, 100);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x, y * 1.7);
  }

  endContour();
  endShape(CLOSE);

  pop ();
}

//Generates the brick texture layers
function drawBrickBkgr(a) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
  var radius = blobRadius * a;

  fill(203, 86, 52, 255 - (255 / blobAmount) * a);

  noStroke();
  //texture (img);
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(a, millis() / 1000), 0, 1, -100, 100);
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

//Brick texture layers
function drawTarp(){
  push ();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );

  image(tarp, -200, -280, 400, 580);

  beginShape();
  fill(45, 136, 195);
  // Exterior part of shape, clockwise winding
  vertex(-200, -300);
  vertex(200, -300);
  vertex(200, 300);
  vertex(-200, 300);
  // Interior part of shape, counter-clockwise winding
  beginContour();

  var radius = 150;

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(i, millis() / 600), 0, 1, -20, 20);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x * 1.2, y * 1.5);
  }

  endContour();
  endShape(CLOSE);

  pop ();
}

//Generates the tarp texture layers
function drawTarpBkgr(a) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
  var radius = blobRadius * a;

  fill(45, 136, 195, 255 - (255 / blobAmount) * a);

  noStroke();
  //texture (img);
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(a, millis() / 600), 0, 1, -20, 20);
    var r = radius + offset;
    var x = cos(a) * r;
    var y = sin(a) * -r;
    vertex(x * 1.2, y * 1.5);
    //ellipse(x, y, 4, 4);
  }
  endShape();
  pop();
}