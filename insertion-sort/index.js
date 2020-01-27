const sort = array => {
  // set the marker to first unsorted position, for each incremental position, iterate and check if position - 1 is smaller
  for (let i = 0; i < array.length; i++) {
    let position = i;
    let unsortedEl = array[i];
    while (unsortedEl < array[position - 1]) {
      array[position] = array[position - 1];
      position--;
    }
    array[position] = unsortedEl;
  }
  return array;
};

module.exports = {
  sort,
};
