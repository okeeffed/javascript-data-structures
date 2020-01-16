const { sort } = require('./index');

// imagine sorting people of varying heights
describe('heap sorting algorithm tests', () => {
  test('expect array to be sorted numerically', () => {
    const subject = [4, 3, 6, 5, 10, 2, 11, 1, 2, 3];
    const sorted = [1, 2, 2, 3, 3, 4, 5, 6, 10, 11];

    expect(sort(subject)).toEqual(sorted);
  });
});
