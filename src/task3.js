const { getRandomWord } = require('word-maker');

class Task3{
  async printNumbersAsync(){
  
    for(let i = 1; i < 101; ++i){
      const word =  await getRandomWord();
      console.log(i + ": " + word);
    }
  }

  async printFizzBuzzAsync(){
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
        const word = await getRandomWord();
        console.log(i + ": " + word);        
      }
    }
  }
}

module.exports = Task3;