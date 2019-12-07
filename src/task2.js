const { getRandomWordSync } = require('word-maker');
const Writer = require('./writer');

class Task2{
  printFizzBuzz({ writeToFile = false } = {}){
    const writer = new Writer();
    
    for(let i = 1; i < 101; ++i){
      
      if(i % 3 == 0 && i % 5 == 0){
        writer.write({content: i + ': FizzBuzz', writeToFile: writeToFile});
      }
      else if (i % 3 == 0){
        writer.write({content: i + ': Fizz', writeToFile: writeToFile});        
      }
      else if (i % 5 == 0) {
        writer.write({content: i + ': Buzz', writeToFile: writeToFile});               
      } else{
        writer.write({content: i + ': ' + getRandomWordSync(), writeToFile: writeToFile});        
      }
    }
  }
}

module.exports = Task2;