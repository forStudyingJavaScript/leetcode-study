/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let seen = new Set();
  
  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  
  return false;
};

// Runtime:  87 ms  Beats 32.05%
// Memory:   63.74 MB Beats 20.15%
