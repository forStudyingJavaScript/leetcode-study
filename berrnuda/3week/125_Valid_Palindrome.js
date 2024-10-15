/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = s.length - 1;

  for (; left < right; left++, right--) {
    if (s[left] !== s[right]) return false;
  }

  return true;
};

// Runtime:  57 ms    Beats 83.28%
// Memory:   51.20 MB Beats 90.34%

// 4m 11s
