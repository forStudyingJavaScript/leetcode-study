/*
/ 42분 소요
/ 
/ 시간복잡도: O(n^2)
/ 
/ 투 포인터 알고리즘을 몰라서 푸는데 시간이 오래 걸렸습니다.
/ 막 풀다가 for문 3개로 풀려고 했는데 시간 복잡도가 O(n^3)이 되어버려서 이건 좀... 싶었습니다.
/ 좀 찾아보니 투 포인터 알고리즘을 찾아서 풀 수 있었습니다.
/ 알고리즘을 잘 몰라서 공부 좀 해야 할 것 같습니다.
/
/ 배열을 오름차순으로 정렬한 뒤, 배열을 순회하며 투 포인터 알고리즘을 사용하여 3개의 숫자의 합이 0이 되는 경우를 찾습니다.
/ 중복된 숫자는 건너뛰고, 결과 배열에 추가합니다.
*/
var threeSum = function (nums) {
  // nums 배열을 오름차순으로 정렬 (O(n log n))
  nums.sort((a, b) => a - b);
  const result = [];

  // 배열 순회 (O(n))
  for (let i = 0; i < nums.length - 2; i++) {
    // 중복된 숫자는 건너뛰기
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    // 투 포인터 알고리즘 (O(n))
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // 0보다 작으면 start++
      if (sum < 0) {
        left++;
      }
      // 0보다 크면 end--
      else if (sum > 0) {
        right--;
      }
      // 0이면 결과 배열에 추가
      else {
        result.push([nums[i], nums[left], nums[right]]);

        // 현재 요소와 다음/이전 요소가 같으면 건너뛰기
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      }
    }
  }

  return result;
};
