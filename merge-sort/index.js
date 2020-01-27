const mergeSort = (array, label = 'init') => {
  console.log(label, array);
  // set base case
  if (array.length < 2) {
    return array;
  }

  const midpoint = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midpoint);
  const rightArray = array.slice(midpoint);

  mergeSort(leftArray, 'left');
  mergeSort(rightArray, 'right');

  return merge(leftArray, rightArray, array);
};

const merge = (leftArray, rightArray, array) => {
  let index = 0;

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (rightArray[0] < leftArray[0]) {
      array[index++] = rightArray.shift();
    } else {
      array[index++] = leftArray.shift();
    }
  }

  while (leftArray.length > 0) {
    array[index++] = leftArray.shift();
  }

  while (rightArray.length > 0) {
    array[index++] = rightArray.shift();
  }

  return array;
};

module.exports = {
  sort: mergeSort,
};
