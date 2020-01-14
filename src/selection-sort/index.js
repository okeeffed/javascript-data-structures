const selectionSort = array => {
  // 1. Set the marker to be the first unsorted member
  // 2. Iterate through the list and set the marker to be an number less than the current marker
  // 3. When list is complete, swap elements
  // 4. Repeat with next marker
  for (let i = 0; i < array.length; i++) {
    let marker = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[marker]) {
        marker = j;
      }
    }

    let tempMember = array[i];
    array[i] = array[marker];
    array[marker] = tempMember;
  }
  return array;
};

module.exports = {
  selectionSort,
};
