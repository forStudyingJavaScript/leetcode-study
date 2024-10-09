/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var sortWord = function (string) {
  return string.split('').sort().join('');
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const firstSortWord = sortWord(s);
  const secondSortWord = sortWord(t);

  return firstSortWord === secondSortWord ? true : false;
};
