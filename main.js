const ReadCommand = require('./interface');

const read = new ReadCommand();

arr = ['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'REPORT'];

read.input(arr);
