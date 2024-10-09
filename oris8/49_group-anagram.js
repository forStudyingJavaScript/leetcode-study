/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();

  strs.forEach((str) => {
    const sorted = str.split("").sort().join("");

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  });

  return Array.from(map.values());

  // Runtime 95ms 96.95%
  // Memory 63.61MB 35.50%
}
