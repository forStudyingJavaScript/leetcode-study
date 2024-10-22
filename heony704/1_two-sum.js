/**
 * https://leetcode.com/problems/two-sum/
 * 9m
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 배열을 순회하면서 숫자를 저장하고, 저장한 값 중에 정답(target - 현재숫자)이 있는지 확인
var twoSum = function (nums, target) {
  // Map에 숫자, 인덱스 저장
  const numWithIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numWithIndex.has(target - nums[i])) {
      return [numWithIndex.get(target - nums[i]), i];
    }

    numWithIndex.set(nums[i], i);
  }

  return [];
};

var twoSum = function (nums, target) {
  // nums 배열 앞에서부터 일일이 더해가며 계산
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
