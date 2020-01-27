const { sort } = require('./index');

// imagine sorting people of varying heights
describe('insertion sorting algorithm tests', () => {
  test('expect array to be sorted numerically', () => {
    const subject = [75, 4, 3, 6, 5, 10, 2, 31, 13];
    const sorted = [2, 3, 4, 5, 6, 10, 13, 31, 75];

    expect(sort(subject)).toEqual(sorted);
  });
});
