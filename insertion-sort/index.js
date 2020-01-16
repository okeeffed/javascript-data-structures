const sort = array => {
  // 1. mark first element as sorted
  // 2. find next value to compare to sorted value
  // 3. shift left over necessary elements
  // 4. insert shifted element into sorted subset and repeat 1 to 3
  for (var i = 0; i < array.length; i++) {
    let currentUnsortedItem = array[i];
    let position = i;
    // shift left over necessary elements
    while (currentUnsortedItem < array[position - 1]) {
      array[position] = array[position - 1];
      position--;
    }
    array[position] = currentUnsortedItem;
  }
  return array;
};

module.exports = {
  sort,
};
