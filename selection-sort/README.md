# Selection Sort

Check [VisualGo](https://visualgo.net/bn/sorting) for more visuals.

The algorithm:

```text
repeat (numOfElements - 1) times

  set the first unsorted element as the minimum

  for each of the unsorted elements

    if element < currentMinimum

      set element as new minimum

  swap minimum with first unsorted position
```