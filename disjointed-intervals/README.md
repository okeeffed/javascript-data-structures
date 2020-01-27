# Disjointed Intervals

Given a set of intervals and an insert array of [min, max], return an array of arrays that merges any overlaps in the intervals.

The assumption here is that an preceding intervals that have been checked will not cross over later.

## Solution

```javascript
const doesCrossInterval = (target, insertMin, insertMax) =>
  target >= insertMin && target <= insertMax;

const merge = (intervals, insert) => {
  let final = [];
  let cur = insert;

  for (let [min, max] of intervals) {
    if (
      doesCrossInterval(min, cur[0], cur[1]) ||
      doesCrossInterval(max, cur[0], cur[1])
    ) {
      if (min <= cur[0]) {
        cur[0] = min;
      }

      if (max >= cur[1]) {
        cur[1] = max;
      }
    } else {
      if (min > cur[1] && cur) {
        final.push(cur);
        cur = null;
      }
      final.push([min, max]);
    }
  }

  if (cur) {
    final.push(cur);
  }

  return final;
};

module.exports = merge;
```
