let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let yoff = 0;
let yoffG = 0;

let blobRadius = 50;
let blobAmount = 12;

//Variables for the cloning of the images
let textureClone;
let texturesLIST;

function preload(){
  document.body.style.overflow = 'hidden';
}

function setup() {
  pixelDensity(1);
  data = new Data();
  createCanvas(windowW, windowH, P2D);
  
  setTEXTURES();
  texturesLIST = texturesHard;
}

let col = {r:200, g:241, b:51 };
let chosenOne;
function draw() {
  data.update();
  background(0);

  //image(data.output.video, 0, 0);
  
  // LET OP db.x en db.y IS AFNAHKELIJK VAN DE CAMERA POSITIE OP EEN SCHERM:):):)
	let db = {x:null, y:null};
	
	if(data.output.persons.length>0){
		db = {
			x:data.output.persons[0].centerPoint["x"]+ (windowW/2) - vidW/2, 
			y:data.output.persons[0].centerPoint["y"]+ (windowH/2)- vidH/2  
		}
	}
	
	if(chosenOne == "optionOne"){
      blobHard(db);
    } else if(chosenOne == "optionTwo"){
      blobSoft(db);
    } else if(chosenOne == "optionThree"){
      blobFluid(db);
    } else if(chosenOne == "optionFour"){
      blobNeutral(db);
    }
	//CHRIS_drawBLOBIES(db);

}

//colors:rgb(200,241,51);
//Generates the concrete background layers

function CHRIS_drawBLOBIES(obj) {
		if(obj.x !=null){
			for(var i = blobAmount; i > 0; i--){
				push();
				translate(obj.x, obj.y, 200);
				var radius = blobRadius * i;
				fill(col.r, col.g, col.b, 255 - (255 / blobAmount) * i);
				noStroke();
				var xoffG = 0;
				beginShape();
				for (let i = 0; i < TWO_PI; i += 0.1) {
					var offset = map(noise(xoffG, yoffG), -1, 1, cur.b*-1, cur.b);
					var r = radius + offset;
					var x = cos(i) * r;
					var y = sin(i) * -r;
					vertex(x*cur.c, y*cur.d);
					xoffG += cur.e;
				}
				endShape();
				pop();
				yoffG += 0.01;
			}
			
			//TEXTURES
			for (let h = 0; h < texturesLIST.length; h++) {
				texture = texturesLIST[h];
				generateShape(texture, i, obj);
			}
		}		
}

//Generates blobs
function generateShape(texture, i, obj) {
  push();
  translate(obj.x,obj.y, 200);
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

function keyPressed(){
  let blobs = ["optionOne", "optionTwo", "optionThree", "optionFour"];
  chosenOne = random(blobs);
  //console.log(blobs);
}

function blobHard(i) {
  generateRadiusHard();

  for (let h = 0; h < texturesHard.length; h++) {
    texture = texturesHard[h];
    generateShape(texture, i);
  }
}

function blobSoft(i) {
  generateRadiusSoft();

  for (let s = 0; s < texturesSoft.length; s++) {
    texture = texturesSoft[s];
    generateShape(texture, i);
  }
}

function blobFluid(i) {
  generateRadiusFluid();

  for (let f = 0; f < texturesFluid.length; f++) {
    texture = texturesFluid[f];
    generateShape(texture, i);
  }
}

function blobNeutral(i) {
  generateRadiusNeutral();

  for (let n = 0; n < texturesNeutral.length; n++) {
    texture = texturesNeutral[n];
    generateShape(texture, i);
  }
}


//Generates the layers around the last texture
function generateRadiusHard() {
  for (var i = blobAmount; i > 0; i--) {
    drawHardBkgr(i);
  }
}

function generateRadiusSoft() {
  for (var i = blobAmount; i > 0; i--) {
    drawSoftBkgr(i);
  }
}

function generateRadiusFluid() {
  for (var i = blobAmount; i > 0; i--) {
    drawFluidBkgr(i);
  }
}

function generateRadiusNeutral() {
  for (var i = blobAmount; i > 0; i--) {
    drawNeutralBkgr(i);
  }
}

function drawHardBkgr(i) {
  push();
  let x_offset = data.output.persons[0].centerPoint["x"];
  let y_offset =data.output.persons[0].centerPoint["y"];
  
  translate(x_offset,x_offset, 200);
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
function drawSoftBkgr(i) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
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
function drawFluidBkgr(i) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
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
function drawNeutralBkgr(i) {
  push();
  translate(
    data.output.persons[0].centerPoint["x"],
    data.output.persons[0].centerPoint["y"],
    200
  );
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