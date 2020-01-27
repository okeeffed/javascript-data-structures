const sumSubset = require('./index');

describe('subset sum of array combinations', () => {
  test('subset of basic sum returns what is expected', () => {
    const data = [1, 2, 3];
    const expectedRes = [[2, 3]];
    const res = sumSubset(data, 5);

    expect(res.length).toEqual(1);
    expect(res).toEqual(expectedRes);
  });

  test('subset of null - sum returns what is expected', () => {
    const data = [];
    const expectedRes = [];
    const res = sumSubset(data, 5);

    expect(res.length).toEqual(0);
    expect(res).toEqual(expectedRes);
  });

  test('subset of repeated num - sum returns what is expected', () => {
    const data = [1, 2, 3, 3];
    const expectedRes = [
      [2, 3],
      [2, 3],
    ];
    const res = sumSubset(data, 5);

    expect(res.length).toEqual(2);
    expect(res).toEqual(expectedRes);
  });

  test('subset of basic sum returns what is expected', () => {
    const data = [1, 8, -3];
    const expectedRes = [[8, -3]];
    const res = sumSubset(data, 5);

    expect(res.length).toEqual(1);
    expect(res).toEqual(expectedRes);
  });
});
