/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newStr = s.toLowerCase();
  newStr = newStr.replace(/[^a-z0-9]/g, "");

  const reverseStr = [...newStr].reverse().join("");

  return newStr === reverseStr;
};
