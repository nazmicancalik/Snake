let snake;
let score = 0;
let orange;
let pathLength = 60;
let scl = 20;
/*
function preload() {
  back = loadImage('825.jpg');
}*/

function setup() {
  createCanvas(1000, 600);
  snake = new Snake();
  orange = new Orange();
  orange.plantFood();
}

function draw() {
  frameRate(10);
  //background(back);
  background(51);
  snake.death();
  if (snake.eat(orange)) {
    orange.plantFood();
  }
  snake.update();
  snake.show();
  if (orange.score === 100) {
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Big Score", width / 2, 80);
  }
  orange.show();
  textSize(13);
  fill(255);
  textAlign(CENTER);
  text("Score: " + score, width / 2, height - 20);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  }
}