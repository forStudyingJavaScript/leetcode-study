/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dict = {};

  for (const str of strs) {
    const sortedStr = [...str].sort().join("");

    if (dict[sortedStr]) {
      dict[sortedStr].push(str);
    } else {
      dict[sortedStr] = [str];
    }
  }

  return Object.values(dict);
};
