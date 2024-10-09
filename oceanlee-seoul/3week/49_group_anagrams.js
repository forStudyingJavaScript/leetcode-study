/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Runtime: 121ms
var groupAnagrams = function (strs) {
  // anagram의 종류별로 Mapping할 빈 객체 생성
  const anagramMap = {};

  strs.forEach((word) => {
    // anagram 판별을 위해 문자열을 정렬
    const sortedWord = [...word].sort().join('');
    // 정렬한 문자열이 객체 키값으로 존재하는지 판별
    if (!anagramMap[sortedWord]) {
      // 존재하지 않는다면 해당 키에 빈 배열 추가
      anagramMap[sortedWord] = [];
    }
    // 해당 키에 원본 단어 추가
    anagramMap[sortedWord].push(word);
  });
  // 객체의 값들만 뽑아서 배열로 저장 후 length 순으로 정렬
  return Object.values(anagramMap).sort((a, b) => a.length - b.length);
};
