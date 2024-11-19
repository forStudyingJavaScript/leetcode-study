/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 원본 배열을 복사하여 정렬
    const sortedNums = nums.map((num, index) => [num, index]).sort((a, b) => a[0] - b[0]);
    
    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left][0] + sortedNums[right][0];

        if (sum === target) {
            return [sortedNums[left][1], sortedNums[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};