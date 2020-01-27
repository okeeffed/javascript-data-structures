class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  setNext(node) {
    this.next = node;
  }
}

class LinkedList {
  // should take list of nodes as data (min length 1)
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  length() {
    let node = this.head;

    if (!node) {
      return 0;
    }

    let count = 1;

    while (node.next) {
      count++;
      node = node.next;
    }

    return count;
  }

  /**
   * Expect to be zero-indexed
   *
   * @param {*} index
   * @returns
   * @memberof LinkedList
   */
  getAt(index) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    let count = 0;
    while (count !== index) {
      if (!node) {
        return null;
      }

      node = node.next;
      count++;
    }

    return node;
  }

  getMiddleElement() {
    if (!this.head) {
      return null;
    }

    let start = this.head;
    let double = this.head;
    do {
      if (double.next && double.next.next) {
        start = start.next;
        double = double.next.next;
      } else {
        return start;
      }
    } while (double);
  }
}

module.exports = {
  Node,
  LinkedList,
};
