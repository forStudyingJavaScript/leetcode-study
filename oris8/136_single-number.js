/**
 * 요구사항 TO(n) O(1)
 * 1번만 나타나는 요소 찾기
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (i === nums.length - 1 || nums[i] !== nums[i + 1]) return nums[i];
  }
};

// 다른 풀이 xor 연산 이용해서 풀기 (중복된 같은 없어지는 특징)
