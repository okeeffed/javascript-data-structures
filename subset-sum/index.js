const power = require('../power-set');

const sumSubset = (arr, targetSum) => {
  return power(arr).filter(
    subArr => subArr.reduce((acc, cur) => acc + cur, 0) === targetSum,
  );
};

module.exports = sumSubset;
