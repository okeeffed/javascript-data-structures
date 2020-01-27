# Power Set problem

This is a combinatorics problem where we want to find all possible combinations.

## Approach

1. We want to find 2^n possible combinations where n is the total
2. Set an empty res array to push to
3. Loop so that for i = 0 < less than length:
   1. Set a an empty array to push results to
   2. Encode the current index iteration to be binary (.toString(2))
   3. Left pad the results (ie add '0' to the encoding)
   4. Loop through and create and push to the temp set if encoding equals '1'
   5. Push temp array with results to res array
4. Return res array
