/**
 * 2m 54s
 * 정수 배열 번호가 주어지면 배열에 두 번 이상 표시되는 값이 있으면 참으로 반환하고,
 * 모든 요소가 구분되는 경우 거짓으로 반환합니다.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const bucket = new Set();

  nums.forEach((num) => {
    bucket.add(num);
  });

  return nums.length !== bucket.size;
};

// Runtime:  88 ms  Beats  29.90%
// Memory:   62.83MB Beats 34.73%

const containsDuplicate2 = (nums) => {
  const bucket = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (bucket.has(nums[i])) return true;
    bucket.add(num);
  }
};
// Runtime:  80 ms  Beats  55.24%
// Memory:   62.14MB Beats 54.23%
