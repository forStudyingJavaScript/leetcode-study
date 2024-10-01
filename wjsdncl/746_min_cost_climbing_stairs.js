/**
 * 29m35s 소요
 *
 * 시간복잡도: O(n)
 *
 * 감이 안잡혀서 찾아보니 동적 계획법(Dynamic Programming)을 사용하여 풀 수 있다는 것을 알게 되었습니다.
 * DP는 복잡한 문제를 간단한 하위 문제로 나누어 푸는 방법입니다.
 *
 * 배열 끝에서부터 역순으로 최소 비용을 계산합니다.
 * i번째 계단에 다음 두 계단 중 작은 비용을 더합니다.
 * 0번째 또는 1번째 계단에서 출발할 수 있으므로 둘 중 작은 값을 반환합니다.
 */
var minCostClimbingStairs = function (cost) {
  // 배열 끝에서부터 역순으로 최소 비용을 계산 (O(n))
  for (let i = cost.length - 3; i >= 0; i--) {
    // i번째 계단에 다음 두 계단 중 작은 비용을 더함
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }

  // 0번째 또는 1번째 계단에서 출발할 수 있으므로 둘 중 작은 값을 반환
  return Math.min(cost[0], cost[1]);
};
