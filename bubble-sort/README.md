# Bubble Sort

To visualise bubble sort, imagine you have a queue of people of different heights that you wish to sort in order of shortest to tallest. 

Bubble sort itself is the idea of "bubbling up" the list and comparing direct siblings and swapping them based on a certain condition. In this analogy, we ask "is the direct sibling further to the right shorter than the left?" If yes, we simply swap the positions of the two siblings.

We continually iterate through our list until we finally do a run where the is no swappings at all. Ie, a `while (swapped)` loop.

Once we have completed the iteratons, we declare that our array has been sorted.

The time complexity for this array is O(n^2) as it is possible to continually iterate through our list as many times are there are items.

## The algorithm

Check [VisualGo](https://visualgo.net/bn/sorting) for more visuals.

The algorithm:

```text
do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true

while swapped
```

## Bubble Sort Implementation

```javascript
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
```