var spaceship,spaceshipGrp;
var alienship,alienshipGrp;
var bullet;
var background;
var score,time;
var spaceshipImg;
var alienshipImg;
var bulletImg;
var spacebgIMG;
var alienIMG1,alienIMG2,alienIMG3,alienIMG4,laienIMG5;
var astroid,astroidIMG;
var alien1,alien2,alien3,alien4,alien5;
var aliengrp1,aliengrp2,aliengrp3,aliengrp4;
var astroidgrp;

function preload(){
  spaceshipImg=loadImage("images/spaceship-PNG-File.png");
  bulletImg=loadImage("images/bullet.png");
  spacebgIMG=loadImage("images/space-bg.jpg");
  alienIMG1=loadImage("images/alien1.png");
  alienIMG2=loadImage("images/alien2.jpg");
  alienIMG3=loadImage("images/alien3.jpg");
  alienIMG4=loadImage("images/alien4.png");
  astroidIMG=loadImage("images/astroid.png");



}

function setup() {
  createCanvas(800,800);
  spaceship=createSprite(400,380,50,50);
  spaceship.addImage(spaceshipImg);
  space=createSprite(20,20,800,800)
  space.y=space.height/2
  aliengrp1=createGroup();
  aliengrp2=createGroup();
  aliengrp3=createGroup();
  aliengrp4=createGroup();
  astroidgrp=createGroup();



}

function draw() {
  background(spacebgIMG);
  
  text("score :"+score,250,50);

  drawSprites();
}