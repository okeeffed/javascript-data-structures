const mergeSort = array => {
  // 1. base case length === 1 return array
  // 2. set left and right array based on midpoint, recursively call
  // 3. after recursive calls return, merge together
  if (array.length < 2) {
    return array;
  }

  const midpoint = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midpoint);
  const rightArray = array.slice(midpoint);

  mergeSort(leftArray);
  mergeSort(rightArray);

  return merge(leftArray, rightArray, array);
};

const merge = (leftArray, rightArray, array) => {
  let index = 0;

  while (leftArray.length && rightArray.length) {
    if (rightArray[0] < leftArray[0]) {
      array[index++] = rightArray.shift();
    } else {
      array[index++] = leftArray.shift();
    }
  }

  while (leftArray.length) {
    array[index++] = leftArray.shift();
  }

  while (rightArray.length) {
    array[index++] = rightArray.shift();
  }

  return array;
};

module.exports = {
  sort: mergeSort,
};
