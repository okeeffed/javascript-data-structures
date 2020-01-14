const _ = require('lodash');
const { selectionSort } = require('./index');

// imagine sorting people of varying heights
describe('selection sorting algorithm tests', () => {
  test('expect array to be sorted numerically', () => {
    const subject = [4, 3, 6, 5, 10, 2];
    const sorted = [2, 3, 4, 5, 6, 10];

    expect(selectionSort(subject)).toEqual(sorted);
  });
});
