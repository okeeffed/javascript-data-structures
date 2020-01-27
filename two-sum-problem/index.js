const twoSum = (data, targetSum) => {
  let res = [];
  let hashTable = {};
  for (let i = 0; i < data.length; i++) {
    const sum = targetSum - data[i];

    if (hashTable[sum.toString()] !== undefined) {
      res.push([data[i], sum]);
    }

    hashTable[data[i].toString()] = data[i];
  }

  return res;
};

module.exports = twoSum;
