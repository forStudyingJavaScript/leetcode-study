/**
 * 20m31s 소요
 *
 * 시간 복잡도: O(n)
 *
 * 중첩 for문을 사용해서 만들었는데 시간 복잡도가 O(n^2)이 되어버렸습니다.
 * 시간복잡도를 O(n)으로 줄이기 위해 해시맵을 사용하여 풀었습니다.
 *
 * 해시맵을 사용하여 타겟에서 현재 숫자를 뺀 값을 키로 인덱스를 값으로 저장합니다.
 * 현재 숫자와 뺀 값이 해시맵에 존재하면 해당 값을 반환합니다.
 * 존재하지 않으면 현재 숫자와 인덱스를 해시맵에 저장합니다.
 */
var twoSum = function (nums, target) {
  // 값을 저장할 해시맵 초기화
  const hashMap = {};

  // 배열을 인덱스와 함께 순회
  for (let i = 0; i < nums.length; i++) {
    // 현재 숫자와 더해서 타겟이 되는 값을 계산
    const complement = target - nums[i];

    // 해시맵에 해당 값(complement)이 존재하는지 확인
    if (hashMap.hasOwnProperty(complement)) {
      // 존재하면 현재 인덱스와 해시맵에 저장된 인덱스를 반환
      return [hashMap[complement], i];
    }

    // 존재하지 않으면 현재 숫자와 그 인덱스를 해시맵에 저장
    hashMap[nums[i]] = i;
  }
};
