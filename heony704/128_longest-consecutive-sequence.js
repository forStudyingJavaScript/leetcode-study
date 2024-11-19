/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * 12m (x)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums); // 중복 제거
  let longestLength = 0;

  for (const num of numSet) {
    // num - 1이 Set에 없다면, num은 시퀀스의 시작점
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // 연속된 숫자 체크
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      // 최장 길이 갱신
      longestLength = Math.max(longestLength, currentLength);
    }
  }

  return longestLength;
};
