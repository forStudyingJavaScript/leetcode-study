/**
 * 35m16s 소요
 *
 * 시간복잡도: O(n)
 *
 * 어렵네요. 나눗셈을 사용 안하고 어떻게 풀어야 할지 감이 안 잡혀서 풀이를 보고 이해했습니다.
 *
 * 왼쪽에서부터 곱을 계산하여 answer에 저장합니다.
 * 오른쪽에서부터 곱을 계산하여 answer에 곱해줍니다.
 * answer를 반환합니다.
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n);

  // 왼쪽에서부터 곱을 계산하여 answer에 저장 (O(n))
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // 오른쪽에서부터 곱을 계산하여 answer에 곱해줌 (O(n))
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};
