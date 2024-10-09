/**
 * https://leetcode.com/problems/valid-palindrome/description/
 * 20m
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 영숫자만 남기고 소문자 처리
  const normalized = s.replace(/[^a-zA-Z0-9]/g, "");
  const lowercase = normalized.toLowerCase();

  // 문자열 앞과 뒤를 비교
  for (let i = 0; i < Math.floor(lowercase.length / 2); i++) {
    if (lowercase[i] !== lowercase[lowercase.length - 1 - i]) return false;
  }

  return true;
};

// 다른 방식으로 한번 풀어본 것. 시간복잡도와 공간복잡도가 크게 다르지는 않은 것 같다.
var isPalindrome = function (s) {
  // 문자열 앞과 뒤에서 시작하여 문자가 서로 동일한지 확인
  let frontIndex = 0;
  let backIndex = s.length - 1;

  const regex = new RegExp(/[a-zA-Z0-9]/);

  while (frontIndex < backIndex) {
    // 만약 문자나 숫자가 아니라면 패스
    if (!regex.test(s[frontIndex])) {
      frontIndex++;
      continue;
    }
    if (!regex.test(s[backIndex])) {
      backIndex--;
      continue;
    }

    // 문자나 숫자인데 틀리면 return false
    if (s[frontIndex].toLowerCase() !== s[backIndex].toLowerCase()) {
      return false;
    } else {
      frontIndex++;
      backIndex--;
    }
  }

  return true;
};
