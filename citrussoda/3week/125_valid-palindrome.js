/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let targetStr = '';
  let str = [...s.trim().toLowerCase()].forEach((char) => {
    if (
      (char.charCodeAt(0) <= 'z'.charCodeAt(0) &&
        char.charCodeAt(0) >= 'a'.charCodeAt(0)) ||
      (parseInt(char, 10) >= 0 && parseInt(char, 10) <= 9)
    )
      targetStr += char;
  });

  let left = 0;
  let right = targetStr.length - 1;

  while (left < right) {
    if (targetStr[left] !== targetStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
