const twoSum = require('./index');
const twoSumNaive = require('./naive');

describe('two sum problem that finds all sums of a number given an array', () => {
  test('twoSumNaive should return correct 2d array', () => {
    const data = [3, 4, 11, -4];
    const res = twoSumNaive(data, 7);
    expect(res.length).toEqual(2);

    const dataTwo = [1, 3, 4, 11, -4, 6];
    const resTwo = twoSumNaive(dataTwo, 7);
    expect(resTwo.length).toEqual(3);
  });

  test('twoSum should return correct 2d array', () => {
    const data = [3, 4, 11, -4];
    const res = twoSum(data, 7);
    expect(res.length).toEqual(2);

    const dataTwo = [1, 3, 4, 11, -4, 6];
    const resTwo = twoSum(dataTwo, 7);
    expect(resTwo.length).toEqual(3);
  });
});
