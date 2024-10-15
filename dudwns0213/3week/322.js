/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * 동전을 튕튕 튕기는 문제이다
 *
 * 입력된 동전을 통해 amount를 큰 값에서 나누고, 해당 나머지를 두 번쨰로 큰 동전부터 시도하는...?
 * 걸로 풀이 방법이 생각이 났다.
 *
 * 다른 풀이를 보니 dp를 사용하여 푸는 방식이 되게 신기했당
 *
 * 알아보니 내가 맨 처음에 푼 방법이 그리디 알고리즘이라는 것이었다!
 * 하지만 모든 경우에 최적해를 보장하지 않는다고 하여 dp로 갈아엎었다...
 * (6이고, 동전이 1 3 4 인 경우, 그리디는 4 + 1 + 1을 답으로 내놓지만 사실 3+3이 정답!)
 *
 * 풀이 방법 자체는 남겨두자...
 *
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

function coinChangeGreedy(coins, amount) {
  coins.sort((a, b) => b - a);

  let count = 0;
  for (let i = 0; i < coins.length; i++) {
    if (amount === 0) break;

    const coinCount = Math.floor(amount / coins[i]);
    count += coinCount;
    amount -= coinCount * coins[i];
  }

  if (amount !== 0) return -1;
  return count;
}
