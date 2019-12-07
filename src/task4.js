const { getRandomWord, getRandomWordSync } = require('word-maker');

// Utility to write to console / file
const Writer = require('./writer');


class Task4 {

  printNumbersWithErrors({ writeToFile = false } = {}){
    const writer = new Writer();
    
    for(let i = 1; i < 101; ++i){
      try{
        writer.write({content: i + ': ' + getRandomWordSync({withErrors: true}), writeToFile: writeToFile});
      } catch(error){
        writer.write({content: i + ": It shouldn't break anything!", writeToFile: writeToFile});
      }
      
    }
  }

  printFizzBuzzWithErrors({ writeToFile = false } = {}){
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

        try{
          writer.write({content: i + ': ' + getRandomWordSync({withErrors: true}), writeToFile: writeToFile});                 
        }
        catch(error){
         writer.write({content: i + ": It shouldn't break anything!", writeToFile: writeToFile});               
        }
      }
    }
  }

  async printNumbersWithErrorsAsync({ writeToFile = false } = {}){
    const writer = new Writer();
    
    for(let i = 1; i < 101; ++i){
      const wordPromise = getRandomWord({withErrors: true});
     
      await wordPromise.then((word) => {
        writer.write({content: i + ': ' + word, writeToFile: writeToFile});
      }).catch((error) => {
        writer.write({content: i + ": It shouldn't break anything!", writeToFile: writeToFile});
      });
    }
  }

  async printFizzBuzzWithErrorsAsync({ writeToFile = false } = {}){
    const writer = new Writer();
    
    for(let i = 1; i < 101; ++i){
      
      if(i % 3 == 0 && i % 5 == 0){
        writer.write({content: i + ': FizzBuzz', writeToFile: writeToFile});
      }
      else if (i % 3 == 0){
        writer.write({content:  i + ': Fizz', writeToFile: writeToFile});        
      }
      else if (i % 5 == 0) {
        writer.write({content: i + ': Buzz' , writeToFile: writeToFile});                
      } else{
        const wordPromise = getRandomWord({withErrors: true});

        await wordPromise.then((word) => {
          writer.write({content: i + ': ' + word , writeToFile: writeToFile});
        }).catch((error) => {
          writer.write({content: i + ": It shouldn't break anything!" , writeToFile: writeToFile});
        });      
      }
    }
  }
}

module.exports = Task4;