/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    const arr = Array.from(set);
    return nums.length == arr.length ? false : true
    };