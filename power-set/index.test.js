const power = require('./index');

describe('creating a power set out of an array', () => {
  test('encode basic combination set of 2 length', () => {
    const data = [1, 2];
    const target = [[], [2], [1], [1, 2]];

    // 2^n
    const res = power(data);
    expect(res.length).toEqual(4);
    expect(res).toEqual(target);
  });

  test('encode basic combination set of 3 length', () => {
    const data = [1, 2, 3];

    // 2^n
    const res = power(data);
    expect(res.length).toEqual(8);
  });
});
