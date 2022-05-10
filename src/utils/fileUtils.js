const fs = require('fs');
var path = require('path');

findTextInFile = function (file, txt) {
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

getProjRoot = function () {
  return path.join(__dirname, '..', '..');
}

module.exports = { findTextInFile, getProjRoot };