let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let yoff = 0;
let yoffG = 0;

let blobRadius = 50;
let blobAmount = 12;

//Variables for the cloning of the images
let textureClone;

function preload(){
  document.body.style.overflow = 'hidden';
}

function setup() {
  pixelDensity(1);
  data = new Data();
  createCanvas(windowW, windowH, P2D);
  
  setTEXTURES();

}

let chosenOne = 2;
let NO = {max:4, count:0};

function draw() {
  data.update();
  background(0);
  //image(data.output.video, 0, 0);
	let db = {x:null, y:null};
	if(data.output.persons.length>0){
		// LET OP db.x en db.y IS AFNAHKELIJK VAN DE CAMERA POSITIE OP EEN SCHERM:):):)
		db = {
			x:data.output.persons[0].centerPoint["x"]+ (windowW/2) - vidW/2, 
			y:data.output.persons[0].centerPoint["y"]+ (windowH/2)- vidH/2,
			w: data.output.persons[0].x,
			h: data.output.persons[0].y
		}
		NO.count = 0;
	}
	
	if(chosenOne == 1){blobHard(db);}
	if(chosenOne == 2){blobSoft(db);}
	if(chosenOne == 3){blobFluid(db);}
	if(chosenOne == 4){blobNeutral(db);}

	if( db.x == null){
		NO.count = NO.count  + 1;
		if (NO.count > NO.max ){
			chosenOne = Math.floor(Math.random() * 4) + 1;
			NO.count = 0;
		}
	}
}

function blobHard(db) {
  if( db.x == null){return ;}
  generateRadiusHard(db);

  for (let h = 0; h < texturesHard.length; h++) {
    texture = texturesHard[h];
    generateShape(texture, h, db)
  }
}

function blobSoft(db) {
  if( db.x == null){return ;}
  generateRadiusSoft(db);

  for (let s = 0; s < texturesSoft.length; s++) {
    texture = texturesSoft[s];
    generateShape(texture, s, db)
  }
}

function blobFluid(db) {
  if( db.x == null){return ;}
  generateRadiusFluid(db);

  for (let f = 0; f < texturesFluid.length; f++) {
    texture = texturesFluid[f];
    generateShape(texture, f, db)
  }
}

function blobNeutral(db) {
  if( db.x == null){return ;}
  generateRadiusNeutral(db);

  for (let n = 0; n < texturesNeutral.length; n++) {
    texture = texturesNeutral[n];
    generateShape(texture, n, db)
  }
}

//Generates the layers around the last texture
function generateRadiusHard(db) {
  for (var i = blobAmount; i > 0; i--) {
    drawHardBkgr(db,i);
  }
}

function generateRadiusSoft(db) {
  for (var i = blobAmount; i > 0; i--) {
    drawSoftBkgr(db,i);
  }
}

function generateRadiusFluid(db) {
  for (var i = blobAmount; i > 0; i--) {
    drawFluidBkgr(db,i);
  }
}

function generateRadiusNeutral(db) {
  for (var i = blobAmount; i > 0; i--) {
    drawNeutralBkgr(db,i);
  }
}

function drawHardBkgr(obj, i) {
  push();
  translate(obj.x, obj.y, obj.w);
  var radius = blobRadius * i;

  fill(145, 74, 63, 255 - (255 / blobAmount) * i);

  noStroke();
  var xoffG = 0;

  beginShape();

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(xoffG, yoffG), -1, 1, -60, 60);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x, y * 2);
    xoffG += 0.6;
  }
  endShape();
  pop();
  yoffG += 0.01;
}


//Generates the soft background layers
function drawSoftBkgr(obj, i) {
  push();
  translate(obj.x, obj.y, obj.w);
  var radius = blobRadius * i;

  fill(241, 155, 146, 255 - (255 / blobAmount) * i);

  noStroke();
  var xoffG = 0;

  beginShape();

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(xoffG, yoffG), -1, 1, -15, 15);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x * 1.2, y * 1.8);
    xoffG += 0.1;
  }
  endShape();
  pop();
  yoffG += 0.01;
}

//Generates the Fluid background layers
function drawFluidBkgr(obj, i) {
  push();
  translate(obj.x, obj.y, obj.w);
  var radius = blobRadius * i;

  fill(127, 164, 189, 255 - (255 / blobAmount) * i);

  noStroke();
  var xoffG = 0;

  beginShape();

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(xoffG, yoffG), -1, 1, -40, 40);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x * 1.2, y * 1.8);
    xoffG += 0.15;
  }
  endShape();
  pop();
  yoffG += 0.01;
}

//Generates the neutral background layers
function drawNeutralBkgr(obj, i) {
  push();
  translate(obj.x, obj.y, obj.w);
  var radius = blobRadius * i;

  fill(166, 169, 163, 255 - (255 / blobAmount) * i);

  noStroke();
  var xoffG = 0;

  beginShape();

  for (let i = 0; i < TWO_PI; i += 0.1) {
    var offset = map(noise(xoffG, yoffG), -1, 1, -30, 30);
    var r = radius + offset;
    var x = cos(i) * r;
    var y = sin(i) * -r;
    vertex(x * 1.2, y * 1.8);
    xoffG += 0.4;
  }
  endShape();
  pop();
  yoffG += 0.01;
}

//Generates blobs
function generateShape(texture, i, obj) {
  push();
  translate(obj.x, obj.y);
  xoff = 0;
  texture.mask.clear();
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