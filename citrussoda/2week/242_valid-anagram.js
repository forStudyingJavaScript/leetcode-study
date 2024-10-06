/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let firstStr = {};
  [...s].forEach((char) => (firstStr[char] = (firstStr[char] || 0) + 1));

  let secondStr = {};
  [...t].forEach((char) => (secondStr[char] = (secondStr[char] || 0) + 1));

  for (let char in firstStr) {
    if (firstStr[char] !== secondStr[char]) {
      return false;
    }
  }

  return true;
};
