const Task1  = require('./task1');
const Task2  = require('./task2');
const Task3  = require('./task3');
const Task4  = require('./task4'); 
const FastRandomWord = require('./fast-random-word');

// const task1 = new Task1();
// task1.printNumbers({writeToFile: true});

// const task2 = new Task2();
// task2.printFizzBuzz({writeToFile: false});

// const task3 = new Task3();
// task3.printNumbersAsync({writeToFile: false});
// task3.printFizzBuzzAsync({writeToFile: false});

//const task4 = new Task4();
// task4.printNumbersWithErrors({writeToFile: false});
// task4.printFizzBuzzWithErrors({writeToFile: false});
// task4.printNumbersWithErrorsAsync({writeToFile: false});
//task4.printFizzBuzzWithErrorsAsync({writeToFile: false});

// Making the solution to run less than 1000ms
const fastRandomWord = new FastRandomWord();
fastRandomWord.printNumbersFastAsync({writeToFile: false});
