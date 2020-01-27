const Queue = require('./index');

describe('queue built using two stacks', () => {
  test('expect results return from stack to operate as if given from a queue', () => {
    const data = [1, 2, 3, 4];
    const queue = new Queue();
    for (let el of data) {
      queue.add(el);
    }

    let res = [];
    for (let i = 0; i < data.length; i++) {
      res.push(queue.next());
    }

    expect(res).toEqual(data);
  });

  test('expect results return from stack to operate as if given from a queue', () => {
    const data = [null, { data: 2 }, 3, 4];
    const queue = new Queue();
    for (let el of data) {
      queue.add(el);
    }

    let res = [];
    for (let i = 0; i < data.length; i++) {
      res.push(queue.next());
    }

    expect(res).toEqual(data);
  });
});
