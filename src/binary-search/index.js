const search = (arr, needle) => {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === needle) {
      return mid;
    } else if (arr[mid] < needle) {
      start++;
    } else {
      end--;
    }
  }

  return -1;
};

module.exports = {
  search,
};
