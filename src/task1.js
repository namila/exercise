const { getRandomWordSync } = require('word-maker');
const Writer = require('./writer');

class Task1{

  printNumbers({ writeToFile = false } = {}){
    const writer = new Writer();

    for(let i = 1; i < 101; ++i){
      writer.write({content: i + ': ' + getRandomWordSync(), writeToFile: writeToFile});
    }
  }
}

module.exports = Task1;