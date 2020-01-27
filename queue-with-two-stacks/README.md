# Queue with Two Stacks

1. Build a stack class - note that stacks are FILO (first in, last out)
2. Give a queue is FIFO, this can be emulated by simply moving data through two stacks.

## Algorithm

```javascript
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

  add(data) {
    this.stackOne.push(data);
  }

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
```
