const Task1  = require('./task1');
const Task2  = require('./task2');
const Task3  = require('./task3');
const Task4  = require('./task4'); 

const task1 = new Task1();
task1.printNumbers();

const task2 = new Task2();
task2.printFizzBuzz();

const task3 = new Task3();
task3.printNumbersAsync();
task3.printFizzBuzzAsync();

const task4 = new Task4();
task4.printNumbersWithErrors();
task4.printFizzBuzzWithErrors();
task4.printNumbersWithErrorsAsync();
task4.printFizzBuzzWithErrorsAsync();
  