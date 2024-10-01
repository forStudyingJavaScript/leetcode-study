/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sortedNum = nums.sort((a,b)=>a-b);
    let num = 0;
    while(sortedNum[num] == num) num++;
    return num
};