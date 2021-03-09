var ground;
var bella;
var animal, animalGroup;
var energy=20;
var victoriaGroup;

var edges;

function setup() {
  createCanvas(800,400);

  edges = createEdgeSprites();
  console.log(edges);
  ground = createSprite(400,380,800,20);
  ground.shapeColor = "brown";


  bella = createSprite(50,300,30,30);
  bella.shapeColor = "purple";

  victoriaGroup = new Group();


  for (var i = 0; i < 10; i++) {
    var victoria = createSprite(Math.round(random(0,800)),Math.round(random(0,400)),10,10);
    victoria.shapeColor="red";
    victoria.setVelocity(Math.round(random(1, 5)), Math.round(random(1, 5)));
    victoriaGroup.add(victoria);
  }

  



  animalGroup = new Group();
  
  
}

function draw() {
  background(0); 
  //console.log(bella.y);
  text("Energy:"+energy,20,20);

  if (keyDown("space")) {
    victoriaGroup.bounceOff(bella);
   }
   else {
     victoriaGroup.overlap(bella);
   }

   bounceOff(edges[0],victoriaGroup)
   bounceOff(edges[1],victoriaGroup)
   bounceOff(edges[2],victoriaGroup)
   bounceOff(edges[3],victoriaGroup)

  
  
  if(keyDown("left")){
    bella.x = bella.x-3;
  }

  if(keyDown("right")){
    bella.x = bella.x+3;
  }
  
  if(keyDown("up") && bella.y >=354){
    bella.velocityY = -16;
  }


  if(keyDown("down") && bella.y <=354){
    bella.velocityY = 2;
  }


  if(bella.isTouching(animalGroup)){
    animalGroup.destroyEach();

    if(energy<50){
      energy= energy +5;
    }

  }

  

  
  bella.velocityY = bella.velocityY +0.5;
  
  bella.collide(ground);

  bella.collide(edges[0]);
  bella.collide(edges[1]);

  spawnAnimals();
  

  drawSprites();
}

function spawnAnimals(){
  if(frameCount% 300 == 0){
    animal = createSprite(800,200,20,20);
    animal.shapeColor ="yellow";
    animal.velocityX = -3;
    animal.y = Math.round(random(100,300));

    animal.lifetime =300;

    animalGroup.add(animal);
  }
}


function bounceOff(object1,object2){
  if(object1.x- object2.x <= object1.width/2 + object2.width/2  &&
    object2.x- object1.x <= object1.width/2 + object2.width/2){
    object1.velocityX = object1.velocityX *(-1);
    object2.velocityX = object2.velocityX *(-1);
    
  }

  if(object1.y- object2.y <= object1.height/2 + object2.height/2  &&
    object2.y- object1.y <= object1.height/2 + object2.height/2){
      object1.velocityY = object1.velocityY *(-1);
    object2.velocityY = object2.velocityY *(-1);

    }

}