var canvas;
var music;

var b1,b2,b3,b4;
var ball, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1 = createSprite(0,570,360,30);
b1.shapeColor = "indigo";

b2 = createSprite(300,570,200,30);
b2.shapeColor = "olive";

 b3= createSprite(515,570,200,30);
b3.shapeColor = "maroon";

b4 = createSprite(730,570,200,30);
b4.shapeColor = "black";

    //create box sprite and give velocity
ball = createSprite(random(20,750),100,40,40);
ball.shapeColor =  rgb(255,255,255);

ball.velocityY = 8;
ball.velocityX = 4;



}

function draw() {
    background(169);
   // background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box

    if(b1.isTouching(ball) && ball.bounceOff(b1)){
        ball.shapeColor="indigo";
        music.play();
    }

    if(b2.isTouching(ball) && ball.bounceOff(b2)){
        ball.shapeColor="olive";
    
    }

    
    if(b3.isTouching(ball)){
        ball.shapeColor="maroon";
        music.stop();
        ball.velocityY = 0;
        ball.velocityX = 0;
    }
     
    if(b4.isTouching(ball) && ball.bounceOff(b4)){
        ball.shapeColor="black";
    
    }

    drawSprites();
}
