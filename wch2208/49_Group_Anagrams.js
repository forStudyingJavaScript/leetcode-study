/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 결과를 저장할 Map 객체 생성
  let map = new Map();

  // strs 배열 순회
  for (let str of strs) {
    // 문자열을 알파벳 순서로 정렬
    let sortedStr = str.split("").sort().join("");

    // 정렬된 문자열을 키로 사용하여 Map에 추가
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }

  // Map의 값들만 배열로 반환하고, 길이 순서대로 정렬
  return Array.from(map.values()).sort((a, b) => a.length - b.length);
};

// time: 50m 27s
// memory: 63.68MB
