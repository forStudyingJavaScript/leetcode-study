/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (const word of wordSet) {
      const wordLength = word.length;
      if (
        i >= wordLength &&
        dp[i - wordLength] &&
        s.substring(i - wordLength, i) === word
      ) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

// Time taken : 12m 49s
// Runtime : 3ms
// Memory : 51.24MB
