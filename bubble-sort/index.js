const sort = array => {
  // 1. do (while swapped)
  // 2. set swapped to false
  // 3. set marker to 1
  // 4. iterate through array comparing "sibling" pairs
  // 5. if first sibling less than other, swap siblings
  // 6. set swapped to true
  let swapped = true;
  do {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        let temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

module.exports = {
  sort,
};
