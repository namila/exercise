const { getRandomWord } = require('word-maker');
const Writer = require('./writer');


class Task3{
  async printNumbersAsync({ writeToFile = false } = {}){
    const writer = new Writer();
    
    for(let i = 1; i < 101; ++i){
      const word =  await getRandomWord();
      writer.write({content: i + ': ' + word, writeToFile: writeToFile});
    }
  }

  async printFizzBuzzAsync({ writeToFile = false } = {}){
    const writer = new Writer();
    
    for(let i = 1; i < 101; ++i){
      
      if(i % 3 == 0 && i % 5 == 0){
        writer.write({content: i + ': FizzBuzz', writeToFile: writeToFile});
      }
      else if (i % 3 == 0){
        writer.write({content: i + ': Fizz', writeToFile: writeToFile});        
      }
      else if (i % 5 == 0) {
        writer.write({ content: i + ': Buzz', writeToFile: writeToFile});                
      } else{
        const word = await getRandomWord();
        writer.write({content: i + ': ' + word, writeToFile: writeToFile});        
      }
    }
  }
}

module.exports = Task3;