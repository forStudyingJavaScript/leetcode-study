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
