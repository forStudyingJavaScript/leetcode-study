/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let requiredValue = target - nums[i];
    if (map.has(requiredValue)) {
      return [map.get(requiredValue), i];
    }
    map.set(nums[i], i);
  }
};

// Time taken : 15m 55s
// Runtime : 51ms
// Memory : 51.54MB
