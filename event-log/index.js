const fs = require('fs-extra');

class Event {
  constructor(table, name, meta) {
    this.table = table;
    this.name = name;
    this.meta = meta;
  }
}

class EventLog {
  constructor() {
    this.log = [];
  }

  /**
   * Expects Event but not enforced
   *
   * @param {Event} data
   * @memberof EventLog
   */
  push(data) {
    this.log.push(data);
  }

  /**
   * Clear the log
   *
   * @memberof EventLog
   */
  clear() {
    this.log = [];
  }

  /**
   * Replay all events in log
   *
   * @memberof EventLog
   */
  replay() {
    for (let event of this.log) {
      console.log(event);
    }
  }

  /**
   * Fetch event at index
   *
   * @param {*} index
   * @returns
   * @memberof EventLog
   */
  getAt(index) {
    try {
      return this.log[index];
    } catch (err) {
      return null;
    }
  }

  saveSnapshot(filepath) {
    fs.writeJsonSync(filepath, this.log);
  }

  restoreSnapshot(data) {
    this.log = data;
  }
}

module.exports = {
  EventLog,
  Event,
};
