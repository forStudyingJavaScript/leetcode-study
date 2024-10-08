/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // DP 배열 초기화: amount + 1로 채움 (불가능한 값으로 초기화)
  let dp = new Array(amount + 1).fill(amount + 1);

  // 기본 케이스: 0원을 만드는 데 필요한 동전 개수는 0
  dp[0] = 0;

  // 각 금액에 대해 최소 동전 개수 계산
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // 최종 결과 반환: amount를 만들 수 없으면 -1 반환
  return dp[amount] > amount ? -1 : dp[amount];
};
