var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg;
var carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg= loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
 // createRed();
 // createOrange();
  //createApples();
  //drawSprites();
   
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

// var select_sprites = Math.round(random(1,3));

  
 //if (frameCount % 50 == 0) {
    // if (redLeaf == 1) {
      // createApples();
  // } else if (redLeaf == 2) {
       //createOrange();
   // }else {
     //  createRed();
    // }
   // }

  // if (frameCount % 80 == 0) {
     //if (createOrange == 1) {
     //  createApples();
      //   } else if (createOrange== 2) {
     //  createOrange();
 //  }
  // }

   //if (frameCount / 80 == 0) {
    // if (createApples == 1) {
     // createApples();
  //  } else if (createApples == 2) {
   //    createOrange();
  //  }else {
 // createRed();
 //    }
 //  }

  // if (frameCount % 80 ==0) {
  //   if (createRed == 1) {
  //    createApples();
   // } else if (createRed== 2) {
  //   createOrange();
  //  }else {    
 // createRed();
 //    }
  // }



//}

//function createApples() {
//apple = createSprite(random(50, 350),40, 10, 10);
//apple.addImage(appleImg);
//apple.scale=0.07;
//apple.velocityY = 3;
//apple.lifetime = 150;
  
//}

//function createOrange() {
//orangeL = createSprite(random(50, 350),40, 10, 10);
//orangeL.addImage(orangeImg);
//orangeL.scale=0.08;
//orangeL.velocityY = 3;
//orangeL.lifetime = 150;
//}

//function rcreateRed() {
 // createRed=createSprite( 350,40, 10, 10);
//createRed.addImage(redImg);
//createRed.scale=0.06;
//createRed.velocityY = 3;
 // createRed.lifetime = 150; 
}
