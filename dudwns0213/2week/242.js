/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * 두 단어의 길이가 다르면 true가 될 수 없으므로 길이 체크부터 해야 한다
 *
 * 원래는 배열로만 핸슨데, 유니코드 문자의 경우는 객체로 하면 충돌이 날 수도 있다고 한다...
 * Map을 사용하도록 하자 (키로 모든 값을 허용한다)
 *
 * count.get을 통해 현재 문자의 빈도 수를 가져오고 미리 지정해두기!
 *
 * 그렇게까지 어렵진 않았당
 *
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const count = new Map();

  for (let char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!count.has(char) || count.get(char) === 0) {
      return false;
    }
    count.set(char, count.get(char) - 1);
  }

  return true;
};
