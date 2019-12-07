const Task1  = require('./task1');
const Task2  = require('./task2');
const Task3  = require('./task3');
const Task4  = require('./task4'); 
const FastRandomWord = require('./fast-random-word');

// Task 1
const task1 = new Task1();
task1.printNumbers({writeToFile: false});

// Task 2
const task2 = new Task2();
task2.printFizzBuzz({writeToFile: false});

// Task 3
const task3 = new Task3();
task3.printNumbersAsync({writeToFile: false});
task3.printFizzBuzzAsync({writeToFile: false});

// Task 4
const task4 = new Task4();
task4.printNumbersWithErrors({writeToFile: false});
task4.printFizzBuzzWithErrors({writeToFile: false});
task4.printNumbersWithErrorsAsync({writeToFile: false});
task4.printFizzBuzzWithErrorsAsync({writeToFile: false});

// Settting 'writeToFile' to true will write the output to output.txt file

// Numbers will be printed in ascending order in all solutions

// Making the solution to run less than 1000ms
const fastRandomWord = new FastRandomWord();
fastRandomWord.printNumbersFastAsync({writeToFile: false});
