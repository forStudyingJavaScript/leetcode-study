var missingNumber = function (nums) {
  let arr = [];
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      arr.push(i);
    }
  }
  return arr[0];
};
