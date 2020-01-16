# Mere Sort

Check [VisualGo](https://visualgo.net/bn/sorting) for more visuals.

## The algorithm

The basic idea behind merge sort is this: it tends to be a lot easier to sort two smaller, sorted lists rather than sorting a single large, unsorted one.

![The general idea](https://miro.medium.com/max/3136/1*ZFpPwH6_ssRu5p8tM9T-vQ.jpeg)

![Step 1: Divide](https://miro.medium.com/max/3264/1*Gu7ROST8xBe8mpvwVd0nUg.jpeg)

![Step 1: In practice](https://miro.medium.com/max/3520/1*p6pvuQ0mKCYkx3ZXv6ufgw.jpeg)

![Step 2: Conquer](https://medium.com/basecs/making-sense-of-merge-sort-part-1-49649a143478)

![Step 2: In practice](https://miro.medium.com/max/2822/1*V1QaE66T3SgIIO-jv0-fHw.jpeg)

## The sorting function

```javascript
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
```

## Go version

https://gist.github.com/LordZamy/2adcb6d879fcef557d3d