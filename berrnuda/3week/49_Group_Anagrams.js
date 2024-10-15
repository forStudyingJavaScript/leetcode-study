/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortStr = str.split("").sort().join("");

    if (!map.has(sortStr)) map.set(sortStr, []);
    map.get(sortStr).push(str);
  }

  return Array.from(map.values());
};

// Runtime:  112 ms   Beats 68.50%
// Memory:   63.16 MB Beats 50.94%

// 13m 48s
