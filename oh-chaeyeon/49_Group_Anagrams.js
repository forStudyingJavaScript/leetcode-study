/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join("#");

    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values());
};

// Runtime : 117ms
// Memory : 63.07MB
