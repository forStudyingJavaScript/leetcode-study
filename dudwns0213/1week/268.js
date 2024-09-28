/**
 * @param {number[]} nums
 * @return {number}
 *
 * sort를 활용한 배열 오름차순 정렬
 * 이후 배열 인덱스 길이만큼 전체 순회 후 return
 * 인덱스의 값과 배열의 시작값이 같아서 편했다(0이 무조건 포함)
 *
 */

var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};
