/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  // DP(Dynamic Programming) 배열을 생성하고, 크기는 amount + 1로 설정
  // 배열을 amount + 1로 초기화하는 이유는 이 값이 금액을 만들 수 없는 "불가능한 경우"를 나타내기 위함
  // 즉, 어떤 금액도 이 값으로 갱신될 수 없도록 충분히 큰 값을 설정한 것
  const dp = Array(amount + 1).fill(amount + 1);

  // 금액 0을 만들기 위한 동전 개수는 0개, 초기 값 설정
  // 즉, 금액이 0일 때는 동전이 필요하지 않으므로 dp[0] = 0으로 설정
  dp[0] = 0;

  // 주어진 동전 배열 coins을 하나씩 순회
  for (let coin of coins) {
    // 각 동전에 대해, 금액 coin부터 amount까지의 모든 금액에 대해 dp 테이블을 업데이트
    // i는 현재 확인하는 금액을 의미하며, 최소한 coin의 값 이상인 금액만 확인하면 됨
    for (let i = coin; i <= amount; i++) {
      // dp[i]는 i 금액을 만들기 위한 최소 동전 개수
      // dp[i - coin] + 1: i 금액을 만들기 위해 현재 동전(coin)을 사용한 경우의 동전 개수
      // dp[i]: 이전까지 계산한 최소 동전 개수와 비교해 더 작은 값을 저장
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      // 예시: i가 11이고 coin이 5일 경우 dp[11]과 dp[6] + 1을 비교하여 최소값을 저장
    }
  }

  // dp[amount]가 여전히 amount + 1로 남아있다면, 이는 amount를 만들 수 없다는 뜻이므로 -1 반환
  // dp[amount]가 갱신되었다면 최소 동전 개수를 반환
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

// 테스트 케이스 1: 동전 [1, 2, 5]를 사용해 11을 만드는 최소 동전 개수를 구하는 경우
// 11 = 5 + 5 + 1로 만들 수 있으므로, 최소 동전 개수는 3
console.log(coinChange([1, 2, 5], 11)); // 출력: 3

// 테스트 케이스 2: 동전 [2]만을 사용해 3을 만들 수 있는지 확인
// 3을 2로는 만들 수 없으므로, -1 반환
console.log(coinChange([2], 3)); // 출력: -1

// 테스트 케이스 3: 동전 [1]로 금액 0을 만드는 경우
// 금액이 0이므로 동전이 필요하지 않아, 0 반환
console.log(coinChange([1], 0)); // 출력: 0
