const fs = require('fs');

class Writer{
  write({content = '', writeToFile = false} = {}){
    console.log(content);

    if(writeToFile){
      fs.appendFileSync('output.txt', '\n' + content , (error) => {
        if(error){
          throw error;
        }
      });
    }
  }
}

module.exports = Writer;