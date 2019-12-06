const { getRandomWordSync } = require('word-maker');

class Task1{

  printNumbers(){

    for(let i = 1; i < 101; ++i){
      console.log(i + ": " + getRandomWordSync());
    }
  }
}

module.exports = Task1;