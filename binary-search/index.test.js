const { search } = require('./index');

// imagine sorting people of varying heights
describe('binary sorting algorithm tests', () => {
  test('expect array to return index if found', () => {
    const subject = [4, 3, 6, 5, 10, 2];

    expect(search(subject, 10)).toEqual(4);
  });

  test('expect array to return -1 if not found', () => {
    const subject = [1, 2, 3, 4, 5, 5];
    expect(search(subject, 10)).toEqual(-1);
  });
});
