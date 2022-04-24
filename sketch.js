let player;
let block;
let collCheck = false;
let pCoords;


function setup() {
  createCanvas(600, 600);
  player = new Player();
  block = new Block();
  pCoords = player.getCoords();
  console.log(pCoords);
}

// function keyPressed() {
//   console.log("pressed");
//   player.move();
// }


function draw() {
  background(220);
  player.show();

  pCoords = player.getCoords();
  player.move();
  block.show();
  collCheck = player.hits(block);
  if (collCheck === true) {
    console.log("collisionDetected");
    player.setCoords(pCoords[0], pCoords[1]);
  }
}
