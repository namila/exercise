const { getRandomWord, getRandomWordSync } = require('word-maker');
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
       // console.log(i + ": " + "FizzBuzz");
        writer.write({content: i + ': FizzBuzz', writeToFile: writeToFile});
      }
      else if (i % 3 == 0){
        // console.log(i + ": " + "Fizz"); 
        writer.write({content: i + ': Fizz', writeToFile: writeToFile});

      }
      else if (i % 5 == 0) {
        // console.log(i + ": " + "Buzz");
        writer.write({content: i + ': Buzz', writeToFile: writeToFile});
      } else{

        try{
          //console.log(i + ": " + getRandomWordSync({withErrors: true})); 
          writer.write({content: i + ': ' + getRandomWordSync({withErrors: true}), writeToFile: writeToFile});                 
        }
        catch(error){
         // console.log(i + ": It shouldn't break anything!"); 
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
        //console.log(i + ": " + "FizzBuzz");
        writer.write({content: i + ': FizzBuzz', writeToFile: writeToFile});
      }
      else if (i % 3 == 0){
        //console.log(i + ": " + "Fizz");
        writer.write({content:  i + ': Fizz', writeToFile: writeToFile});        
      }
      else if (i % 5 == 0) {
        //console.log(i + ": " + "Buzz");
        writer.write({content: i + ': Buzz' , writeToFile: writeToFile});                
      } else{
        const wordPromise = getRandomWord({withErrors: true});

        await wordPromise.then((word) => {
          //console.log(i + ": " + word);
          writer.write({content: i + ': ' + word , writeToFile: writeToFile});
        }).catch((error) => {
          //console.log(i + ": It shouldn't break anything!");
          writer.write({content: i + ": It shouldn't break anything!" , writeToFile: writeToFile});
        });      
      }
    }
  }
}

module.exports = Task4;