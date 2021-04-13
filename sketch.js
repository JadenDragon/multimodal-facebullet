let player;
let block;
let collCheck = false;
let pCoords;
let bullets = [];

let video;
let flippedVideo;

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.hide();
  flippedVideo = ml5.flipImage(video);

  poseNet = ml5.poseNet(video, {
    //flipHorizontal:true
  }, modelLoaded);
  poseNet.on('pose', gotPoses);

  player = new Player();
  block = new Block();
  pCoords = player.getCoords();
  console.log(pCoords);
  console.log(flippedVideo);
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

  pCoords = player.getCoords();
  player.move();
  player.shoot();
  block.show();
  collCheck = player.hits(block);
  if (collCheck === true) {
    console.log("collisionDetected");
    player.setCoords(pCoords[0], pCoords[1]);
  }
  
  bullets.forEach(bullet => {
    bullet.show();
  })
}
