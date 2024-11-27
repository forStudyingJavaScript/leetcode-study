/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 숫자와 알파벳만 남기기
  let reg = /[^a-zA-Z0-9]/g;
  const str = s.replace(reg, "").toLowerCase();

  let n = str.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (str[i] === str[n - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
