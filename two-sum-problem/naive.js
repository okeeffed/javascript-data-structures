const twoSum = (data, targetSum) => {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] === targetSum) {
        res.push([data[i], data[j]]);
      }
    }
  }

  return res;
};

module.exports = twoSum;
