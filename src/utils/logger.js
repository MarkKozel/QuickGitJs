//Logs repo interactions 
class logger {

  constructor() {
    this.logs = [];

    if (!logger._instance) { //singleton
      this.logs = [];

      logger._instance = this;
    } else {
      return logger._instance
    }
  }

  /**
   * adds time tagged entry to the logs array
   * @param {string} event - text to log
   */
  log(event) {
    const now = new Date(Date.now());

    const ts = now.getFullYear() + '' + (now.getMonth() + 1) + '' + now.getDate() + '_' +
      (
        (now.getHours() < 10) ? ("0" + now.getHours()) : (now.getHours())) +
      '' + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) +
      '' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds())
      );

    this.logs.push(ts + ": " + event);
  }

  /**
   * Returns logs array
   */
  getRawLog() {
    return this.logs;
  }

  /**
   * Formats log with 1 event per line
   */
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

export { logger };