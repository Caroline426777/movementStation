function setTEXTURES(){
  //RED BRICK AND CONCRETE SHAPE -- Sharp edges
brick = {
    mask: createGraphics(350, 170),
    image: loadImage("assets/brick.jpg"),
    customLocationX: 95,
    customLocationY: 90,
    rangeStart: -40,
    rangeEnd: 40,
    speedNoiseY: 0.01,
    speedNoiseX: 0.4,
  }
  brickTwo = {
    mask: createGraphics(270, 250),
    image: loadImage("assets/brick.jpg"),
    customLocationX: 95,
    customLocationY: 90,
    rangeStart: -40,
    rangeEnd: 40,
    speedNoiseY: 0.01,
    speedNoiseX: 0.4,
  }

  brickRed = {
    mask: createGraphics(400, 250),
    image: loadImage("assets/brick2.jpg"),
    customLocationX: 95,
    customLocationY: 85,
    rangeStart: -30,
    rangeEnd: 30,
    speedNoiseY: 0.01,
    speedNoiseX: 0.3,
  }

  brickDark = {
    mask: createGraphics(500, 700),
    image: loadImage("assets/brick3.jpg"),
    customLocationX: 160,
    customLocationY: 450,
    rangeStart: -20,
    rangeEnd: 20,
    speedNoiseY: 0.01,
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
  tarp = {
    mask: createGraphics(450, 300),
    image: loadImage("assets/tarp.jpg"),
    customLocationX: 120,
    customLocationY: 170,
    rangeStart: -50,
    rangeEnd: 50,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  tarpTwo = {
    mask: createGraphics(500, 500),
    image: loadImage("assets/tarp.jpg"),
    customLocationX: 200,
    customLocationY: 130,
    rangeStart: -50,
    rangeEnd: 50,
    speedNoiseY: 0.01,
    speedNoiseX: 0.1,
  }
  glass = {
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
	texturesHard = [brick, brickTwo, brickRed, brickDark, brickDarkTwo];
	texturesSoft = [insulation, sand, sandTwo, wood, woodTwo];
	texturesFluid = [plaster, plasterTwo, plasterThree, plasterFour, tarp, tarpTwo, glass];

	texturesNeutral = [carpet, carpetTwo, blueInsulation, blueInsulationTwo,  brownConcrete, brownConcreteTwo, brownConcreteThree];
}