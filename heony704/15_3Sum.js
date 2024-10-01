/**
 * https://leetcode.com/problems/3sum/
 * 30분 초과
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const answer = new Map();

    // 배열 정렬
    nums.sort((a, b) => a - b);

    // 합이 0인 삼중항 구하기
    for (let fix = 0; fix<nums.length-2; fix++) {
        if (nums[fix] > 0) break;

        let low = fix + 1;
        let high = nums.length - 1;
        while (low < high) {
            if (nums[fix] + nums[low] + nums[high] < 0) {
                low++;
            } else if (nums[fix] + nums[low] + nums[high] > 0) {
                high--;
            } else {
                add = [nums[fix], nums[low], nums[high]];
                answer.set(add.toString(), add);
                low++;
            }
        }
    }

    return Array.from(answer.values());
};