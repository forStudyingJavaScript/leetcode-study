/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var countS = new Array(26).fill(0);
  var countT = new Array(26).fill(0);

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    countS[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    countT[t.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < countS.length; i++) {
    if (countS[i] !== countT[i]) {
      return false;
    }
  }

  return true;
};
