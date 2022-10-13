let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let yoff = 0;

let blobRadius = 50;
let blobAmount = 12;

//Variables for the cloning of the images
let textureClone;

function setup() {
  pixelDensity(1);
  data = new Data();
  createCanvas(windowW, windowH, P2D);

  //RED BRICK AND CONCRETE SHAPE
//  concrete = {
//     mask: createGraphics(300, 142),
//     image: loadImage("assets/concrete.jpg"),
//     customLocationX:70,
//     customLocationY:80,
//     rangeStart: -50,
//     rangeEnd: 50,
//     speedNoise: 0.05
//   }

//   brick = {
//     mask: createGraphics(350, 170),
//     image: loadImage("assets/brick.jpg"),
//     customLocationX:75,
//     customLocationY:80,
//     rangeStart: -40,
//     rangeEnd: 40,
//     speedNoise: 0.01
//   }

//   brickTwo = {
//     mask: createGraphics(450, 250),
//     image: loadImage("assets/brick2.jpg"),
//     customLocationX:85,
//     customLocationY:85,
//     rangeStart: -20,
//     rangeEnd: 20,
//     speedNoise: 0.03
//   }

//   brickThree = {
//     mask: createGraphics(550, 1000),
//     image: loadImage("assets/brick3.jpg"),
//     customLocationX:150,
//     customLocationY:700,
//     rangeStart: -40,
//     rangeEnd: 40,
//     speedNoise: 0.03
//   }


  //INSULATION, WOOD, SAND SHAPE
  insulation = {
    mask: createGraphics(250, 160),
    image: loadImage("assets/insulation.jpg"),
    customLocationX:70,
    customLocationY:70,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoise: 0.01
  }

  sand = {
    mask: createGraphics(350, 450),
    image: loadImage("assets/sand.jpg"),
    customLocationX:90,
    customLocationY:200,
    rangeStart: -25,
    rangeEnd: 25,
    speedNoise: 0.01
  }
  sandTwo = {
    mask: createGraphics(450, 550),
    image: loadImage("assets/sand.jpg"),
    customLocationX:120,
    customLocationY:150,
    rangeStart: -25,
    rangeEnd: 25,
    speedNoise: 0.01
  }

  wood = {
    mask: createGraphics(400, 400),
    image: loadImage("assets/wood.jpg"),
    customLocationX:85,
    customLocationY:150,
    rangeStart: -25,
    rangeEnd: 25,
    speedNoise: 0.03
  }
  woodTwo = {
    mask: createGraphics(500, 500),
    image: loadImage("assets/wood.jpg"),
    customLocationX:150,
    customLocationY:120,
    rangeStart: -25,
    rangeEnd: 25,
    speedNoise: 0.03
  }
  
  //textures = [concrete, brick, brickTwo, brickThree];

  textures = [insulation, sand, sandTwo, wood, woodTwo];
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

    for(let s = 0; s < textures.length; s++){
      texture = textures[s];
      generateShape(texture, i);
    }
  }
}

//Generates the layers around the last texture
function generateRadius() {
  for (var i = blobAmount; i > 0; i--) {
     drawConcreteBkgr(i);
  }
}

function generateShape(texture, i){
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
  for(var a = 0; a < TWO_PI; a += 0.1){
    var offset = map(noise(xoff, yoff), -1, 1, texture.rangeStart, texture.rangeEnd);
    var r = 50 + offset;
    var x = cos(a) * r;
    var y = sin(a) * -r;
    vertex(x + texture.customLocationX, y + texture.customLocationY);
    xoff += 0.1;
  }
  texture.mask.endShape();
  textureClone.mask(texture.mask);

  image(textureClone, -200, -250, 800, 800);
  pop ();
  yoff += texture.speedNoise;
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

  fill(181, 181, 181, 255 - (255 / blobAmount) * i);

  noStroke();
  //texture (img);
  beginShape();

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(i, millis() / 1000), 0, 1, -60, 60);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x, y * 2);
    //ellipse(x, y, 4, 4);
  }
  endShape();
  pop();
}