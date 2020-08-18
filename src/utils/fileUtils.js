const fs = require('fs');
var path = require('path');

exports.findTextInFile = function (file, txt) {
  try {
    let data = fs.readFileSync(file);
    if (data.includes(txt)) {
      return true
    }
  } catch (errors) {
    return false;
  }

  return false;
}

exports.getProjRoot = function(){
  return path.join(__dirname,'..', '..');
}