let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let yoff = 0;
let yoffG = 0;

let blobRadius = 50;
let blobAmount = 12;

//Variables for the cloning of the images
let textureClone;

let textureBlobs;

function setup() {
  pixelDensity(1);
  data = new Data();
  createCanvas(windowW, windowH, P2D);

  //RED BRICK AND CONCRETE SHAPE -- Sharp edges
  concrete = {
    mask: createGraphics(350, 200),
    image: loadImage("assets/concrete.jpg"),
    customLocationX: 90,
    customLocationY: 120,
    rangeStart: -50,
    rangeEnd: 50,
    speedNoiseY: 0.001,
    speedNoiseX: 0.5,
  }
  concreteTwo = {
    mask: createGraphics(250, 200),
    image: loadImage("assets/concrete.jpg"),
    customLocationX: 90,
    customLocationY: 80,
    rangeStart: -50,
    rangeEnd: 50,
    speedNoiseY: 0.001,
    speedNoiseX: 0.5,
  }

  brick = {
    mask: createGraphics(350, 170),
    image: loadImage("assets/brick.jpg"),
    customLocationX: 95,
    customLocationY: 90,
    rangeStart: -40,
    rangeEnd: 40,
    speedNoiseY: 0.001,
    speedNoiseX: 0.4,
  }
  brickTwo = {
    mask: createGraphics(270, 250),
    image: loadImage("assets/brick.jpg"),
    customLocationX: 95,
    customLocationY: 90,
    rangeStart: -40,
    rangeEnd: 40,
    speedNoiseY: 0.001,
    speedNoiseX: 0.4,
  }

  brickRed = {
    mask: createGraphics(400, 250),
    image: loadImage("assets/brick2.jpg"),
    customLocationX: 95,
    customLocationY: 85,
    rangeStart: -30,
    rangeEnd: 30,
    speedNoiseY: 0.001,
    speedNoiseX: 0.3,
  }

  brickDark = {
    mask: createGraphics(500, 700),
    image: loadImage("assets/brick3.jpg"),
    customLocationX: 160,
    customLocationY: 450,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.001,
    speedNoiseX: 0.3,
  }
  brickDarkTwo = {
    mask: createGraphics(800, 550),
    image: loadImage("assets/brick3.jpg"),
    customLocationX: 310,
    customLocationY: 380,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.001,
    speedNoiseX: 0.3,
  }


  //INSULATION, WOOD, SAND SHAPE -- FLOWING
  insulation = {
    mask: createGraphics(250, 160),
    image: loadImage("assets/insulation.jpg"),
    customLocationX: 70,
    customLocationY: 70,
    rangeStart: -15,
    rangeEnd: 15,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }

  sand = {
    mask: createGraphics(350, 400),
    image: loadImage("assets/sand.jpg"),
    customLocationX: 90,
    customLocationY: 200,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  sandTwo = {
    mask: createGraphics(400, 550),
    image: loadImage("assets/sand.jpg"),
    customLocationX: 120,
    customLocationY: 150,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }

  wood = {
    mask: createGraphics(400, 400),
    image: loadImage("assets/wood.jpg"),
    customLocationX: 85,
    customLocationY: 150,
    rangeStart: -15,
    rangeEnd: 15,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  woodTwo = {
    mask: createGraphics(500, 500),
    image: loadImage("assets/wood.jpg"),
    customLocationX: 150,
    customLocationY: 120,
    rangeStart: -15,
    rangeEnd: 15,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }


  // //PLASTER, TARP, GLASS -- NOT SHARP BUT BUBBLY
  plaster = {
    mask: createGraphics(230, 250),
    image: loadImage("assets/plaster.jpg"),
    customLocationX: 70,
    customLocationY: 70,
    rangeStart: -40,
    rangeEnd: 40,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  plasterTwo = {
    mask: createGraphics(350, 170),
    image: loadImage("assets/plaster.jpg"),
    customLocationX: 135,
    customLocationY: 70,
    rangeStart: -40,
    rangeEnd: 40,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  plasterThree = {
    mask: createGraphics(350, 550),
    image: loadImage("assets/plaster.jpg"),
    customLocationX: 118,
    customLocationY: 345,
    rangeStart: -40,
    rangeEnd: 40,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  plasterFour = {
    mask: createGraphics(550, 350),
    image: loadImage("assets/plaster.jpg"),
    customLocationX: 150,
    customLocationY: 195,
    rangeStart: -25,
    rangeEnd: 25,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  tarp ={
    mask: createGraphics(450, 300),
    image: loadImage("assets/tarp.jpg"),
    customLocationX: 120,
    customLocationY: 170,
    rangeStart: -50,
    rangeEnd: 50,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  tarpTwo ={
    mask: createGraphics(500, 500),
    image: loadImage("assets/tarp.jpg"),
    customLocationX: 200,
    customLocationY: 130,
    rangeStart: -50,
    rangeEnd: 50,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  glass ={
    mask: createGraphics(250, 350),
    image: loadImage("assets/glass.png"),
    customLocationX: 70,
    customLocationY: 60,
    rangeStart: -15,
    rangeEnd: 15,
    speedNoiseY: 0.01,
    speedNoiseX: 0.15,
  }


  //CARPET, INSULATION, ROUGH CONCRETE -- MEDIUM SHARP
  carpet ={
    mask: createGraphics(250, 180),
    image: loadImage("assets/carpet.jpg"),
    customLocationX: 70,
    customLocationY: 100,
    rangeStart: -30,
    rangeEnd: 30,
    speedNoiseY: 0.01,
    speedNoiseX: 0.4,
  }
  carpetTwo ={
    mask: createGraphics(350, 350),
    image: loadImage("assets/carpet.jpg"),
    customLocationX: 100,
    customLocationY: 70,
    rangeStart: -30,
    rangeEnd: 30,
    speedNoiseY: 0.01,
    speedNoiseX: 0.4,
  }
  blueInsulation ={
    mask: createGraphics(300, 400),
    image: loadImage("assets/blue-insulation.jpg"),
    customLocationX: 80,
    customLocationY: 110,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.01,
    speedNoiseX: 0.3,
  }
  blueInsulationTwo ={
    mask: createGraphics(350, 300),
    image: loadImage("assets/blue-insulation.jpg"),
    customLocationX: 100,
    customLocationY: 150,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.01,
    speedNoiseX: 0.3,
  }
  brownConcrete ={
    mask: createGraphics(350, 450),
    image: loadImage("assets/concrete-brown.jpg"),
    customLocationX: 100,
    customLocationY: 300,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.01,
    speedNoiseX: 0.4,
  }
  brownConcreteTwo ={
    mask: createGraphics(500, 350),
    image: loadImage("assets/concrete-brown.jpg"),
    customLocationX: 110,
    customLocationY: 220,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.01,
    speedNoiseX: 0.4,
  }
  brownConcreteThree ={
    mask: createGraphics(300, 500),
    image: loadImage("assets/concrete-brown.jpg"),
    customLocationX: 110,
    customLocationY: 70,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.01,
    speedNoiseX: 0.4,
  }


  texturesHard = [concrete, concreteTwo, brick, brickTwo, brickRed, brickDark, brickDarkTwo];

  texturesSoft = [insulation, sand, sandTwo, wood, woodTwo];

  texturesFluid = [plaster, plasterTwo, plasterThree, plasterFour, tarp, tarpTwo, glass];

  texturesNeutral = [carpet, carpetTwo, blueInsulation, blueInsulationTwo, brownConcrete, brownConcreteTwo, brownConcreteThree];

  textureBlobs = [texturesHard, texturesSoft, texturesFluid, texturesNeutral];

  // BACKGROUND LAYERS 
  grey = {
    color: (181, 181, 181),
    rangeLayerStart: -90,
    rangeLayerEnd: 90,
    locationXWidth: 0,
    locationYHeight: 2,
    speedLayerNoiseY: 0.001,
    speedLayerNoiseX: 0.5,
  }

  pink = {
    color: (241, 155, 146),
    rangeLayerStart: -20,
    rangeLayerEnd: 20,
    locationXWidth: 1.2,
    locationYHeight: 1.8,
    speedLayerNoiseY: 0.01,
    speedLayerNoiseX: 0.1,
  }

  layers = [grey, pink];
}

function draw() {
  data.update();

  background(0);

  image(data.output.video, 0, 0);

  // Visual response: draw a rectangle around a detected person.
  // These graphics are placeholders/ code examples- not designs.
  // Feel free to change or remove them as you wish.
  for (let i = 0; i < data.output.persons.length; i++) {

    for (let r = 0; r < layers.length; r++) {
      layer = layers[r];
      generateRadius(layer, i);
    }
    for (let h = 0; h < texturesHard.length; h++) {
      texture = texturesHard[h];
      generateShape(texture, i);
    }
    for (let s = 0; s < texturesSoft.length; s++) {
      texture = texturesSoft[s];
      generateShape(texture, i);
    }
    for (let f = 0; f < texturesFluid.length; f++) {
      texture = texturesFluid[f];
      generateShape(texture, i);
    }
    for (let n = 0; n < texturesNeutral.length; n++) {
      texture = texturesNeutral[n];
      generateShape(texture, i);
    }

    let textureBlob = random(textureBlobs);
    return textureBlob;

  }
}

//Generates the layers around the last texture
function generateRadius() {
  for (var i = blobAmount; i > 0; i--) {
    drawConcreteBkgr(i);
  }
}

function generateShape(texture, i) {
  push();
  translate(
    data.output.persons[i].centerPoint["x"],
    data.output.persons[i].centerPoint["y"], 200
  );

  xoff = 0;
  texture.mask.clear();

  texture.mask.fill('rgba(0, 0, 0, 1)');
  texture.mask.beginShape();
  textureClone = texture.image.get();
  for (var a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(xoff, yoff), -1, 1, texture.rangeStart, texture.rangeEnd);
    var r = 50 + offset;
    var x = cos(a) * r;
    var y = sin(a) * -r;
    vertex(x + texture.customLocationX, y + texture.customLocationY);
    xoff += texture.speedNoiseX;
  }
  texture.mask.endShape();
  textureClone.mask(texture.mask);

  image(textureClone, -250, -400, 800, 800);
  pop();
  yoff += texture.speedNoiseY;
}


//Generates the concrete background layers
function drawConcreteBkgr(i) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
  var radius = blobRadius * i;

  fill(layer.color, 255 - (255 / blobAmount) * i);

  noStroke();
  var xoffG = 0;

  beginShape();

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(xoffG, yoffG), -1, 1, layer.rangeLayerStart, layer.rangeLayerEnd);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x * layer.locationXWidth, y * layer.locationYHeight);
    xoffG += layer.speedLayerNoiseX;
  }
  endShape();
  pop();
  yoffG += layer.speedLayerNoiseY;
}