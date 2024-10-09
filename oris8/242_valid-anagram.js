/**
 * 8m 17s
 * s를 애너그램해서 t를 만들 수 있는지를 판단해주는 함수
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  // 돌면서 각 단어의 등장 횟수를 저장
  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  // 확인
  for (const char of t) {
    if (!map[char]) return false;
    map[char]--;
    if (map[char] < 0) return false;
  }
  return true;
};
