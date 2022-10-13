let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let yoff = 0;

let blobRadius = 50;
let blobAmount = 14;

//Variables for the images
let concrete;
let brick;

//Variables for the masks 
let concreteMask;
let brickMask;

//Variables for the cloning of the images
let concreteClone;
let brickClone;


function setup() {
  pixelDensity(1);
  data = new Data();
  createCanvas(windowW, windowH, P2D);

  //Graphics that create the mask
  concreteMask = createGraphics(300, 142);
  brickMask = createGraphics(350, 190);
  
  //Loading in the images
  concrete = loadImage("assets/concrete.jpg");
  brick = loadImage("assets/brick.jpg");
}

function draw() {
  data.update();

  background(0);

  image(data.output.video, 0, 0);

  // Visual response: draw a rectangle around a detected person.
  // These graphics are placeholders/ code examples- not designs.
  // Feel free to change or remove them as you wish.
  for (let i = 0; i < data.output.persons.length; i++) {
   // generateRadius();
    drawConcrete();
  }
}

//Generates the layers around the last texture
// function generateRadius() {
//   for (var a = blobAmount; a > 0; a--) {
//      drawConcreteBkgr(a);
//   }
// }


//Concrete texture layers
function drawConcrete(){
  push ();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"], 200
  );

  var xoff = 0;

  concreteMask.clear();

  concreteMask.fill('rgba(0, 0, 0, 1)');

  concreteMask.beginShape();
  concreteClone = concrete.get(); 
  for(var a = 0; a < TWO_PI; a += 0.1){
    var offset = map(noise(xoff, yoff), -1, 1, -30, 30);
    var r = 50 + offset;
    var x = cos(a) * r;
    var y = sin(a) * -r;
    vertex(x + 70, y + 70);
    xoff += 0.1;
  }
  concreteMask.endShape();
  concreteClone.mask(concreteMask);

  image(concreteClone, -200, -200, 800, 700);

  //BRICK TEXTURE
  brickMask.clear();

  brickMask.fill('rgba(0, 0, 0, 1)');

  brickMask.beginShape();
  brickClone = brick.get(); 
  for(var a = 0; a < TWO_PI; a += 0.1){
    var offset = map(noise(xoff, yoff), -1, 1, -20, 20);
    var r = 50 + offset;
    var x = cos(a) * r;
    var y = sin(a) * -r;
    vertex(x + 75, y + 70);
    xoff += 0.2;
  }
  brickMask.endShape();
  brickClone.mask(brickMask);

  image(brickClone, -200, -200, 800, 700);
  pop ();

  yoff += 0.05;
}

//Generates the concrete background layers
/*function drawConcreteBkgr(a) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
  var radius = blobRadius * a;

  fill(181, 181, 181, 255 - (255 / blobAmount) * a);

  noStroke();
  //texture (img);
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(a, millis() / 1000), 0, 1, -60, 60);
    var r = radius + offset;
    var x = cos(a) * r;
    var y = sin(a) * -r;
    vertex(x, y * 1.7);
    //ellipse(x, y, 4, 4);
  }
  endShape();
  pop();

}*/