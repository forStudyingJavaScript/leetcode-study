/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let word of wordDict) {
      if (i >= word.length && dp[i - word.length]) {
        const sub = s.slice(i - word.length, i);
        if (sub === word) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[s.length];
};
