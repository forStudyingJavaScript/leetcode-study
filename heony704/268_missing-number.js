/**
 * https://leetcode.com/problems/missing-number/
 * 6:17
 * 
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 시간복잡도 개선한 풀이
    nums.sort((a, b) => a - b);

    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== i) return i;
    }

    return nums.length;

    // 첫번째 풀이
    // for (let i=0; i<nums.length+1; i++) {
    //     if (!nums.includes(i)) return i;
    // }
};