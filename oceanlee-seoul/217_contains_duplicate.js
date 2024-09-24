// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//   const sortedNums = nums.sort();
//   for (let i = 0; i <= sortedNums.length; i++) {
//     if (i !== sortedNums.length) {
//       if (sortedNums[i] === sortedNums[i + 1]) return true;
//     }
//   }
//   return false;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = new Set(); // 중복 확인을 위한 해시셋 초기화

  for (let i = 0; i < nums.length; i++) {
    // 현재 숫자가 이미 해시셋에 있으면 true 반환
    if (seen.has(nums[i])) {
      return true;
    }
    // 현재 숫자를 해시셋에 추가
    seen.add(nums[i]);
  }

  return false; // 모든 요소가 고유한 경우 false 반환
};
