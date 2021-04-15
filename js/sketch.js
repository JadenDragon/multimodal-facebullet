let player;
let block;
let collCheck = false;
let pCoords;
let bullets = [];
let blocks = [];
let counter = 0;
let gameOver = false;

let video;
let flippedVideo;

// Global variable to store the classifier
let classifier;

// Label
let label = 'listening...';
  
// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/2CCC-uNZj/';
  
  
function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.hide();
  flippedVideo = ml5.flipImage(video);

  poseNet = ml5.poseNet(video, {
    //flipHorizontal:true
  }, modelLoaded);
  poseNet.on('pose', gotPoses);

  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);

  player = new Player();
  block = new Block();
  pCoords = player.getCoords();
  //console.log(pCoords);
  //console.log(flippedVideo);
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  background(220);
  player.show();
  // block.show();
  // block.fall();
  pCoords = player.getCoords();
  player.move();
  //player.shoot();
  
  
  for (let index = 0; index < bullets.length; index++) {
    let bullet = bullets[index];
    bullet.show();
    if (bullet.hits(block)) {
      //remove(bullets, index);
      bullet.visible = false;
      console.log("DED bullet!");
    }  
  }
  
  if (random(1) < 0.005) {
    blocks.push(new Block());
  }

  blocks.forEach(function(block, i) {
    block.show();
    block.fall();
    //console.log(block.y);
    collCheck = player.hits(block);
    if (collCheck === true) {
      console.log("PlayerCollisionDetected");
      player.setCoords(pCoords[0], pCoords[1]);
      noLoop();
      gameOver === true;
      //checkGame();
    } 

    // if (block.y >= height) {
    //   counter +=1;
    //   console.log(counter);
    // }
  })

  // for (let block of blocks){
  //   block.show();
  //   block.fall();
  //   //console.log(block.y);
  //   collCheck = player.hits(block);
  //   if (collCheck === true) {
  //     console.log("PlayerCollisionDetected");
  //     player.setCoords(pCoords[0], pCoords[1]);
  //     //noLoop();
  //   }
  // }

  // Draw the label in the canvas
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height / 2);
  
}

// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;

  if (label === 'Shoot') {
    player.shoot();
  } else if (label === 'Clap') {
    // window.location.reload();
    // console.log("RESTART!");
    checkGame();
  }
}


function remove(array, index) {
  array.splice(index, 1);
}

//restarts game on CLAP
function checkGame() {
  if (gameOver == true) {
    window.location.reload();
    console.log("YOU DIED!");
  }
}

// function onLoad() {
  
// }