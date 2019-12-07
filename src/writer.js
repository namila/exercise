const fs = require('fs');

class Writer{
  write({content = '', writeToFile = false} = {}){

    // Write to console
    console.log(content);

    // Write to file if 'writeToFile' flag is true
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