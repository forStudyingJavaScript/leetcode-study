/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filteredStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = filteredStr.split("").reverse().join("");
  return filteredStr === reversedStr;
};

// Runtime : 58ms
// Memory : 52.88MB
