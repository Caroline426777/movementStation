let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let yoff = 0;

let blobRadius = 50;
let blobAmount = 12;

//Variables for the images
let concrete;
let brick;
let brickTwo;

//Variables for the masks 
let concreteMask;
let brickMask;
let brickTwoMask;

//Variables for the cloning of the images
let textureClone;



function setup() {
  pixelDensity(1);
  data = new Data();
  createCanvas(windowW, windowH, P2D);

 concrete = {
    mask: createGraphics(300, 142),
    image: loadImage("assets/concrete.jpg"),
    customLocationX:70,
    customLocationY:70,
    rangeStart: -30,
    rangeEnd: 30
  }

  brick = {
    mask: createGraphics(350, 190),
    image: loadImage("assets/brick.jpg"),
    customLocationX:75,
    customLocationY:70,
    rangeStart: -20,
    rangeEnd: 20
  }

  brickTwo = {
    mask: createGraphics(450, 350),
    image: loadImage("assets/brick2.jpg"),
    customLocationX:85,
    customLocationY:75,
    rangeStart: -20,
    rangeEnd: 20
  }
  

  textures = [concrete, brick, brickTwo];
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

  image(textureClone, -200, -200, 800, 700);
  pop ();
  yoff += 0.05;
}


//Concrete texture layers
// function drawConcrete(i){
//   push ();
//   translate(
//     data.output.persons[i].centerPoint["x"],
//     data.output.persons[i].centerPoint["y"], 200
//   );

//   var xoff = 0;

//   concreteMask.clear();

//   concreteMask.fill('rgba(0, 0, 0, 1)');

//   concreteMask.beginShape();
//   concreteClone = concrete.get(); 
//   for(var a = 0; a < TWO_PI; a += 0.1){
//     var offset = map(noise(xoff, yoff), -1, 1, -30, 30);
//     var r = 50 + offset;
//     var x = cos(a) * r;
//     var y = sin(a) * -r;
//     vertex(x + 70, y + 70);
//     xoff += 0.1;
//   }
//   concreteMask.endShape();
//   concreteClone.mask(concreteMask);

//   image(concreteClone, -200, -200, 800, 700);

//   //BRICK 1 TEXTURE
//   brickMask.clear();

//   brickMask.fill('rgba(0, 0, 0, 1)');

//   brickMask.beginShape();
//   brickClone = brick.get(); 
//   for(var a = 0; a < TWO_PI; a += 0.1){
//     var offset = map(noise(xoff, yoff), -1, 1, -20, 20);
//     var r = 50 + offset;
//     var x = cos(a) * r;
//     var y = sin(a) * -r;
//     vertex(x + 75, y + 70);
//     xoff += 0.2;
//   }
//   brickMask.endShape();
//   brickClone.mask(brickMask);

//   image(brickClone, -200, -200, 800, 700);


//   //BRICK 2 TEXTURE
//   brickTwoMask.clear();

//   brickTwoMask.fill('rgba(0, 0, 0, 1)');

//   brickTwoMask.beginShape();
//   brickTwoClone = brickTwo.get(); 
//   for(var a = 0; a < TWO_PI; a += 0.1){
//     var offset = map(noise(xoff, yoff), -1, 1, -20, 20);
//     var r = 50 + offset;
//     var x = cos(a) * r;
//     var y = sin(a) * -r;
//     vertex(x + 85, y + 75);
//     xoff += 0.2;
//   }
//   brickTwoMask.endShape();
//   brickTwoClone.mask(brickTwoMask);

//   image(brickTwoClone, -200, -200, 800, 700);
//   pop ();

//   yoff += 0.05;
// }

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