/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = {};

  for (const num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] === 1) return Number(key);
  }
};
