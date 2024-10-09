/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 문자열에서 알파벳과 숫자가 아닌 것은 제거하는 함수
  const removeNonAlphanumeric = str => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      // 소문자, 숫자인지 확인
      if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
        result += char;
      }
    }
    return result;
  };

  // 입력값 다듬기
  // 소문자변환 후 알파벳과 숫자가 아닌 것 제거
  const newS = removeNonAlphanumeric(s.toLowerCase());

  //투포인터 구현
  // for문
  // for (let i = 0, j = newS.length - 1; i < j; i++, j--) {
  //     if (newS[i] !== newS[j]) return false;
  // };

  // while문
  let left = 0;
  let right = newS.length - 1;

  while (left < right) {
    if (newS[left] !== newS[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

// time: 41m
// memory: 51.70MB
