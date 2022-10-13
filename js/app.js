let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

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
  concreteMask = createGraphics(300, 150);
  brickMask = createGraphics(300, 200);
  
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
      var y = sin(i) * r;
      shapeMask.vertex(x, y * 1.7);
  }

  shapeMask.endShape(CLOSE);

  //concrete.mask(shapeMask);
  image(shapeMask, -200, -280);

  pop ();
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