# Insertion Sort

> The insertion sort algorithm maintains two subsets (often referred to as subsections or sublists) — a sorted subset, and an unsorted subset.

Check [VisualGo](https://visualgo.net/bn/sorting) for more visuals.

Check this [Base CS article](https://medium.com/basecs/inching-towards-insertion-sort-9799274430da) for a great explanation.

Other Resources:

1. [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm)
2. [Runestone Academy](https://runestone.academy/runestone/books/published/pythonds/SortSearch/TheInsertionSort.html)

The algorithm:

```text
mark first element as sorted

for each unsorted element X

  'extract' the element X

  for j = lastSortedIndex down to 0

    if current element j > X

      move sorted element to the right by 1

    break loop and insert X here
```

## Implementation

```javascript
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
```

Alternative implementation w/o `while` loop.

```javascript
const sort = array => {
  // 1. mark first element as sorted
  // 2. find next value to compare to sorted value
  // 3. shift left over necessary elements
  // 4. insert shifted element into sorted subset and repeat 1 to 3
  for (var i = 0; i < array.length; i++) {
    var currentUnsortedItem = array[i];
    // use var j for hoisting
    for (var j = i; j > 0 && currentUnsortedItem < array[j - 1]; j--) {
      array[j] = array[j - 1];
    }
    array[j] = currentUnsortedItem;
  }
  return array;
};

module.exports = {
  sort,
};
```