class Stack {
  constructor() {
    this.data = [];
  }

  push(data) {
    this.data.push(data);
  }

  pop() {
    return this.data.pop();
  }

  length() {
    return this.data.length;
  }
}

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  /**
   * Add new data
   *
   * @param {*} data
   * @memberof Queue
   */
  add(data) {
    this.stackOne.push(data);
  }

  /**
   * Return next item in the queue using the stacks
   *
   * @returns {*} data
   * @memberof Queue
   */
  next() {
    let res;
    while (this.stackOne.length()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    res = this.stackTwo.pop();

    while (this.stackTwo.length()) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return res;
  }
}

module.exports = Queue;
