const fs = require('fs');

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