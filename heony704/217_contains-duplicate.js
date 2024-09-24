/**
 * https://leetcode.com/problems/contains-duplicate/
 * 9:16
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const unique = new Set();

    for (const num of nums) {
        if (unique.has(num)) return true;
        unique.add(num);
    }

    return false;
};