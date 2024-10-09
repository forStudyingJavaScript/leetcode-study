/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * 주어진 문자열 배열에서 애너그램을 그룹으로 묶는 문제이다!
 * 결과 반환 순서가 상관 없다는 점이 좀 생소하다...
 *
 * 일단 알파벳 순으로 정렬해야 한다
 * 해당 요소들이 애너그램이 가능한지 판단할려면 일단 정렬해야 함!
 *
 * 각 알파벳들을 key로... 하나...? 하는 거 같다 일단 이렇게 해보자(오류안났음)
 *
 * 뒤에서 좀 깔금하게 작성하기 위해 GPT의 힘을 빌렸다 ㅠ.ㅠ
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }

  return Object.values(map);
};
