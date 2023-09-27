var sea;
var ship1;
var ship2;
var ship3;
var ship4;
var seaImg;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship1.png","ship2.png","ship3","ship4.png");
}

function setup(){
  createCanvas(400,400);
  SpriteName.addImage(seaImg);
}

function draw() {
  background("blue");
 if(sea.x<0) {
  sea.x=sea.width/2;
 }
}