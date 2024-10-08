/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * 30분 초과
 *
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let prev1 = cost[1]; // 첫 번째 계단의 최소 비용
  let prev2 = cost[0]; // 두 번째 계단의 최소 비용

  for (let i = 2; i < cost.length; i++) {
    let current = cost[i] + Math.min(prev1, prev2); // 현재 계단까지의 최소 비용
    prev2 = prev1; // 이전 값 갱신
    prev1 = current;
  }

  return Math.min(prev1, prev2); // 마지막 두 계단 중 최소 비용을 반환
};
