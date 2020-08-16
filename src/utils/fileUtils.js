const fs = require('fs');

exports.findTextInFile = function (file, txt) {
  let data = fs.readFileSync(file);
  if (data.includes(txt)) {
    return true
  }

  return false;
}