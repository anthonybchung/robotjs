class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Position {
  constructor(x, y, face) {
    this.x = x;
    this.y = y;
    this.face = face;
  }
}

// a robot keeps a record of its current position.

class Robot {
  constructor(position, board) {
    this.position = position;
    this.board = board;
  }

  left() {
    let { x, y, face } = this.position;

    const newFace = {
      NORTH: 'WEST',
      WEST: 'SOUTH',
      SOUTH: 'EAST',
      EAST: 'NORTH',
    };
    this.position.face = newFace[face];
  }

  right() {
    let { x, y, face } = this.position;
    const newFace = {
      NORTH: 'EAST',
      EAST: 'SOUTH',
      SOUTH: 'WEST',
      WEST: 'NORTH',
    };
    this.position.face = newFace[face];
  }

  currentPostion() {
    return this.position;
  }

  move() {
    let { x, y, face } = this.position;
    let { width, height } = this.board;

    const step = {
      NORTH: [0, 1],
      EAST: [1, 0],
      SOUTH: [0, -1],
      WEST: [-1, 0],
    };

    const newX = x + step[face][0];
    const newY = y + step[face][1];

    if (newX >= 0 && newX <= width && newY >= 0 && newY <= height) {
      this.position.x = newX;
      this.position.y = newY;
    }
  }
}

const myPos = new Position(0, 0, 'NORTH');
const myBoard = new Board(5, 5);
const myRobot = new Robot(myPos, myBoard);

console.log(myRobot.currentPostion());
myRobot.left();
myRobot.left();
console.log(myRobot.currentPostion());
myRobot.move();
console.log('result');
console.log(myRobot.currentPostion());
myRobot.left();
myRobot.left();
console.log(myRobot.currentPostion());
myRobot.move();
console.log(myRobot.currentPostion());
myRobot.right();
myRobot.move();
myRobot.move();
myRobot.move();
myRobot.move();
myRobot.move();
myRobot.move();
console.log(myRobot.currentPostion());
