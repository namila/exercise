const { getRandomWord, getRandomWordSync } = require('word-maker');

class Task4 {

  printNumbersWithErrors(){
    for(let i = 1; i < 101; ++i){
      try{
        console.log(i + ": " + getRandomWordSync({withErrors: true}));
      } catch(error){
        console.log(i + ": It shouldn't break anything!");
      }
      
    }
  }

  printFizzBuzzWithErrors(){
    for(let i = 1; i < 101; ++i){
      
      if(i % 3 == 0 && i % 5 == 0){
        console.log(i + ": " + "FizzBuzz");
      }
      else if (i % 3 == 0){
        console.log(i + ": " + "Fizz");        
      }
      else if (i % 5 == 0) {
        console.log(i + ": " + "Buzz");                
      } else{

        try{
          console.log(i + ": " + getRandomWordSync({withErrors: true}));                  
        }
        catch(error){
          console.log(i + ": It shouldn't break anything!");                
        }
      }
    }
  }

  async printNumbersWithErrorsAsync(){
    for(let i = 1; i < 101; ++i){
      const wordPromise = getRandomWord({withErrors: true});
     
      await wordPromise.then((word) => {
        console.log(i + ": " + word);
      }).catch((error) => {
        console.log(i + ": It shouldn't break anything!");
      });
    }
  }

  async printFizzBuzzWithErrorsAsync(){
    for(let i = 1; i < 101; ++i){
      
      if(i % 3 == 0 && i % 5 == 0){
        console.log(i + ": " + "FizzBuzz");
      }
      else if (i % 3 == 0){
        console.log(i + ": " + "Fizz");        
      }
      else if (i % 5 == 0) {
        console.log(i + ": " + "Buzz");                
      } else{
        const wordPromise = getRandomWord({withErrors: true});

        await wordPromise.then((word) => {
          console.log(i + ": " + word);
        }).catch((error) => {
          console.log(i + ": It shouldn't break anything!");
        });      
      }
    }
  }
}

module.exports = Task4;