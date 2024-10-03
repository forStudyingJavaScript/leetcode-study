/*
/ 13분 소요
/ 
/ 시간복잡도: O(n log n)
/ 
/ 배열을 오름차순으로 정렬한 뒤, 배열을 순회하며 누락된 숫자를 찾아 반환합니다.
/ 맨 앞의 숫자가 0이 아니라면 0을 반환합니다.
*/
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b); // nums 배열을 오름차순으로 정렬 (O(n log n))

  // 맨 앞의 숫자가 0이 아닌 경우 0 반환
  if (nums[0] !== 0) return 0;

  // 배열 순회하여 누락된 숫자 반환 (O(n))
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) return nums[i] + 1;
  }

  return 0;
};

console.log(missingNumber([3, 0, 1])); // 2
