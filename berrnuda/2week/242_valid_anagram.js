/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // const sortS = s.split('').sort().join('');
  // const sortT = t.split('').sort().join('');
  // return sortS === sortT;
  if (s.length !== t.length) return false;

  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s[i]] ? count[s[i]]++ : (count[s[i]] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!count[t[i]]) return false;
    count[t[i]]--;
  }

  return true;
};

// Runtime:  86 ms    Beats 15.71%
// Memory:   54.31 MB Beats 21.25%

// Runtime:  68 ms    Beats 67.23%
// Memory:   51.01 MB Beats 83.44%

// 02:50
