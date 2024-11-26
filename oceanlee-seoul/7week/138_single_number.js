/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  const mapObj = {};
  for (num of nums) {
    if (!mapObj[num]) {
      mapObj[num] = 1;
    } else {
      mapObj[num] += 1;
    }
  }
  return +Object.keys(mapObj).find((key) => mapObj[key] === 1);
};
