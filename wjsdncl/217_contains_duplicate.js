/*
/ 22분 소요
/
/ 시간 복잡도: O(n log n)
/ 
/ 이중 for문 이용해서 풀었는데 Time Limit Exceeded가 나와서 다시 풀었습니다.
/
/ 배열을 오름차순으로 정렬한 뒤, 배열을 순회하며 중복된 요소가 있는지 확인합니다.
/ 중복된 요소가 있다면 true를 반환하고, 없다면 false를 반환합니다.
*/
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b); // nums 배열을 오름차순으로 정렬 (O(n log n))

  // 정렬된 nums 배열을 순회 (O(n))
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true; // 현재 요소와 다음 요소가 같다면 true 반환
  }
  return false; // 중복된 요소가 없다면 false 반환
};
