//Logs repo intereaction 
class Logger {

  constructor() {
    this.logs = [];
  }

  log(event) {
    // const ts = new Date
    this.logs.push(event);
  }

  getRawLog() {
    return this.logs;
  }

  getPrettyLogs() {
    let result = '';
    for (let event in this.logs) {
      result += this.logs[event];
      if (event <= this.logs.length) {
        result += '\n';
      }
    }
    return result;
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Logger;
}