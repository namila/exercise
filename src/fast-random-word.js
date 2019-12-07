const { getRandomWord } = require('word-maker');
const Writer = require('./writer');

class FastRandomWord{

  async printNumbersFastAsync({ writeToFile = false } = {}){
    const writer = new Writer();
    const promiseSet = [];
    for(let i = 1; i < 101; ++i){
      const wordPromise = getRandomWord({slow: true});
      promiseSet.push(wordPromise);
    }

    Promise.all(promiseSet).then((results) => {
      results.forEach((word, index)=>{
        writer.write({content: (index + 1) + ': ' + word, writeToFile: writeToFile});
      });
    });
  }

}

module.exports = FastRandomWord;