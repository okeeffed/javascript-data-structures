const merge = require('./index');

describe('disjointed intervals should combine into one', () => {
  test('expect overlapping intervals merged and return as expected', () => {
    const intervals = [
      [1, 5],
      [12, 27],
      [24, 30],
    ];
    const insert = [10, 15];
    const expected = [
      [1, 5],
      [10, 30],
    ];

    expect(merge(intervals, insert)).toEqual(expected);
  });

  test('expect overlapping intervals merged and return as expected for final larger interval', () => {
    const intervals = [
      [1, 5],
      [12, 27],
      [24, 30],
      [35, 40],
    ];
    const insert = [10, 15];
    const expected = [
      [1, 5],
      [10, 30],
      [35, 40],
    ];

    expect(merge(intervals, insert)).toEqual(expected);
  });

  test('expect overlapping intervals merged and return as expected for no smaller interval', () => {
    const intervals = [
      [1, 5],
      [12, 27],
      [24, 30],
      [35, 40],
    ];
    const insert = [4, 15];
    const expected = [
      [1, 30],
      [35, 40],
    ];

    expect(merge(intervals, insert)).toEqual(expected);
  });
});
