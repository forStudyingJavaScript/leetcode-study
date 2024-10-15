/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s.charAt(i) !== s.charAt(s.length - i - 1)) {
      return false;
    }
  }
  return true;

  // Runtime 48ms 98.15%
  // Memory 50.62MB Beats 97.72%
};
