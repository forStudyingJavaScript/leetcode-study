/**
 * https://leetcode.com/problems/group-anagrams/
 * 13m
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // Map을 만들어서 애너그램 별로 저장
  const anagramMap = new Map();

  for (const str of strs) {
    // str 정렬
    const arr = str.split("");
    arr.sort();
    sortedStr = arr.toString();

    // Map에 추가
    if (anagramMap.get(sortedStr)) {
      const prev = anagramMap.get(sortedStr);
      anagramMap.set(sortedStr, [...prev, str]);
    } else {
      anagramMap.set(sortedStr, [str]);
    }
  }

  // Map value들 반환
  return Array.from(anagramMap.values());
};
