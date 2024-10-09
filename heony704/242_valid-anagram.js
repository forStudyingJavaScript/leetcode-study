/**
 * https://leetcode.com/problems/valid-anagram/
 * 11:24
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sArray = s.split("");
  const tArray = t.split("");

  sArray.sort();
  tArray.sort();

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== tArray[i]) return false;
  }
  return true;
};
