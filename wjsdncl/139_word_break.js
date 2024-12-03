/**
 * 13m38s 소요
 *
 * 시간복잡도: O(n^2)
 *
 * 단어 s가 주어지고, 단어 사전 wordDict가 주어집니다.
 * 단어 s를 단어 사전을 이용하여 구성할 수 있는지 여부를 반환하는 문제입니다.
 *
 * dp를 사용하여 풀 수 있습니다.
 * dp[i]는 s의 0부터 i까지의 부분 문자열이 단어 사전을 이용하여 구성 가능한지 여부를 나타냅니다.
 * dp[0]은 빈 문자열이므로 true로 초기화합니다.
 * dp[i]를 구하기 위해 dp[j]를 검사합니다. (0 <= j < i)
 * dp[j]가 true이고, s의 j부터 i까지의 부분 문자열이 단어 사전에 있는 경우 dp[i]를 true로 설정합니다.
 * dp[s.length]를 반환합니다.
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict); // 빠른 검색을 위한 Set 생성
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // 빈 문자열은 항상 구성 가능

  // dp[i]를 구하기 위해 dp[j]를 검사
  for (let i = 1; i <= s.length; i++) {
    // dp[j]가 true이고, s의 j부터 i까지의 부분 문자열이 단어 사전에 있는 경우 dp[i]를 true로 설정
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break; // 가능한 경우를 찾으면 더 이상 탐색하지 않음
      }
    }
  }

  return dp[s.length];
};
