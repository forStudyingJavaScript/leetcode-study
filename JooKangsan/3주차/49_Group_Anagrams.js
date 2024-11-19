/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramGroups = {};
    const arr = [];
  
    for (let i = 0; i < strs.length; i++) {
      const sortedWord = strs[i].split('').sort().join('');
      if (anagramGroups[sortedWord]) {
        anagramGroups[sortedWord].push(strs[i]);
      } else {
        anagramGroups[sortedWord] = [strs[i]];
      }
    }
  
    for (let group in anagramGroups) {
      arr.push(anagramGroups[group]);
    }
    
    return arr;
  };
  