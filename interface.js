const { COMPARISON_BINARY_OPERATORS } = require('@babel/types');
const { Robot, Board, Position } = require('./board');

// check if the input is correct then calls the correct robot function.

class RobotInterface {
  constructor(robot) {
    this.currentPosition = new Position();
    this.robot = robot;
    this.command = {
      PLACE: () => {
        this.robot.place(this.currentPosition);
      },
      MOVE: () => {
        this.robot.move();
      },
      LEFT: () => {
        this.robot.left();
      },
      RIGHT: () => {
        this.robot.right();
      },
      REPORT: () => {
        this.currentPosition = robot.report();
        return this.currentPosition;
      },
    };
  }

  input(value) {
    const valueArray = value.toUpperCase().split(' ');
    const instruction = valueArray[0];
    if (valueArray.length > 1) {
      let positionArray = valueArray[1].split(',');
      this.currentPosition.x = parseInt(positionArray[0]);
      this.currentPosition.y = parseInt(positionArray[1]);
      this.currentPosition.face = positionArray[2];
    }
    try {
      this.command[instruction]();
    } catch (err) {
      console.log(`Error Input: ${value}`);
      console.log('instruction skipped');
      console.log('-----------------------');
      console.log('Input must be the following');
      console.log('1. PLACE X,Y,FACE');
      console.log('2. MOVE');
      console.log('3. RIGHT');
      console.log('4. LEFT');
      console.log('5. REPORT');
    }
  }
}

class ReadCommand {
  constructor() {
    this.board = new Board();
    this.position = new Position(0, 0, 'NORTH');
    this.robot = new Robot(this.position, this.board);

    this.interface = new RobotInterface(this.robot);
  }

  input(arr) {
    arr.forEach((element) => {
      this.interface.input(element);

      if (element == 'REPORT')
        console.log(
          `Output: ${this.interface.currentPosition.x},${this.interface.currentPosition.y},${this.interface.currentPosition.face}`
        );
    });
  }
}

module.exports = ReadCommand;
