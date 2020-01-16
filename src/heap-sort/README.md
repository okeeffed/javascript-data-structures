# Heap Sort

However, as similar as they are, heap sort is much better than selection sort in one massive way: its performance! Heap sort is basically a super-improved version of selection sort. Yes, it does find the largest element in an unsorted collection and orders it at the back of the list — however, it does all of this work so much faster than selection sort would!

There are two parts to this:

1. Build Max Heap - this is done by "Heapify-ing" the array to create a max heap
2. Sorting - this is done by slowly swapping and "heapify-ing" the array, then reducing the last index to keep the order while iterating.

Things to know about heap sort:

1. Heap sort transforms the array that pass to it as it sorts; unlike some sorting algorithms, it doesn’t create an entirely separate copy of the input data (it is in-place).
2. Heap sort also doesn’t need external memory, and is an internal sorting algorithm.
3. It runs iteratively (and is thus non-recursive)
4. Compares two elements at a time when it swaps and calls the heapify function, making it a comparison sort algorithm.

## Heap Sort Implementation

```javascript
const sort = array => {
  heapSort(array);
  return array;
};

function heapSort(array) {
  // Build our max heap.
  buildMaxHeap(array);

  // Find last element.
  let lastIndex = array.length - 1;
  const firstIndex = 0;

  console.log('array post build max heap', array);
  // Sorting the heap until we have
  // just one element left in the array.
  // Each iteration "removes" the last index
  // which will be the sorted value.
  while (lastIndex > firstIndex) {
    swap(array, firstIndex, lastIndex);
    heapify(array, firstIndex, lastIndex);
    lastIndex -= 1;
  }

  console.log('array after sorting', array);
}

function buildMaxHeap(array) {
  let midpoint = Math.floor(array.length / 2 - 1);

  // Build a max heap out of
  // all array elements passed in.
  // We are
  while (midpoint >= 0) {
    console.log(array);
    heapify(array, midpoint, array.length);
    midpoint -= 1;
  }
}

function heapify(heap, firstIndex, lastIndex) {
  while (firstIndex < lastIndex) {
    let currentIndex = firstIndex;

    // Finding the indexes of the children from the array
    let leftChild = 2 * firstIndex + 1;
    let rightChild = leftChild + 1;

    // Here we check if one of the two children have a greater value
    // than the value of the heap at the currentIndex. If yes - swap.
    if (leftChild < lastIndex && heap[leftChild] > heap[currentIndex]) {
      currentIndex = leftChild;
    }

    if (rightChild < lastIndex && heap[rightChild] > heap[currentIndex]) {
      currentIndex = rightChild;
    }

    // if the currentIndex hasn't change, return
    if (currentIndex == firstIndex) {
      return;
    }

    // else swap the bigger value for the item at the first index
    swap(heap, firstIndex, currentIndex);
    firstIndex = currentIndex;
  }
}

const swap = (heap, firstItemIndex, lastItemIndex) => {
  const temp = heap[firstItemIndex];
  heap[firstItemIndex] = heap[lastItemIndex];
  heap[lastItemIndex] = temp;
};

module.exports = {
  sort,
};
```
