# Quick Sort

Check [VisualGo](https://visualgo.net/bn/sorting) for more visuals.

One of the many reasons that quicksort is a preferred algorithm is because it doesn’t take up a ton of extra space as it sorts! 

## The algorithm

## Quick Sort Implementation

```javascript
const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      // Perform a swap
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  }

  return left;
};

const quickSort = (arr, left, right) => {
  // base case
  if (arr.length < 2) return;

  let pivot = partition(arr, left, right);

  if (left < pivot - 1) {
    quickSort(arr, left, pivot - 1);
  }

  if (pivot < right) {
    quickSort(arr, pivot, right);
  }
};

const sort = arr => {
  quickSort(arr, 0, arr.length - 1);
  return arr;
};

module.exports = {
  sort,
};
```