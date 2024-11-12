/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let ans = {};

  for (let s of strs) {
    // 단어를 알파벳 단위로 분리 후에 사전순으로 정렬하고 다시 단어로 합침
    let key = s.split("").sort().join("");
    if (!ans[key]) {
      ans[key] = [];
    }
    ans[key].push(s);
  }

  // 각 키에 해당하는 배열을 모두 모아 반환
  return Object.values(ans);
};
