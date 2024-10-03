/**
 * 3m 15s
 * [0, n] 범위에 n개의 고유 숫자가 포함된 배열 번호가 주어지면 배열에서 누락된 범위의 유일한 숫자를 반환합니다.
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const lastNumber = nums.length;

  for (let i = 0; i <= lastNumber; i++) {
    if (!nums.includes(i)) return i;
  }
};
// Runtime:  277 ms  Beats 6.21%
// Memory:   51.46MB Beats 45.81%

// 충격적인 위치 . . 누적합으로 바꾸기
const missingNumber2 = (nums) => {
  return (
    (nums.length * (nums.length + 1)) / 2 -
    nums.reduce((acc, num) => acc + num, 0)
  );
};
// Runtime:  59 ms  Beats 58.97%
// Memory:   51.29MB Beats 64.91%
