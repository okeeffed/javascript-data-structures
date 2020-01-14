# Bubble Sort

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