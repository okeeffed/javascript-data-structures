const power = data => {
  const res = [];
  const total = Math.pow(2, data.length);
  for (let i = 0; i < total; i++) {
    let tempSet = [];

    // encode current number to binary
    let num = i.toString(2);

    // left pad number with 0s
    while (num.length < data.length) {
      num = '0' + num;
    }

    // console.log('binary', num);

    for (let j = 0; j < num.length; j++) {
      if (num[j] === '1') {
        tempSet.push(data[j]);
      }
    }

    res.push(tempSet);
  }

  return res;
};

module.exports = power;
