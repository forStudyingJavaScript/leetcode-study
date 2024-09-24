/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * 배열에서 중복이 나타날 시, true
 * 중복이 없을 시, false
 *
 * Set을 통해 중복을 확인
 * for...of 구문을 통해 순차적으로 순회, 비교
 *
 */
var containsDuplicate = function (nums) {
  const Ex = new Set();
  for (let num of nums) {
    if (Ex.has(num)) {
      return true;
    }
    Ex.add(num);
  }

  return false;
};
