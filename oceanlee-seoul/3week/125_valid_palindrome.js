/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filteredStr = '';

  for (let char of s) {
    // 공백 및 특수문자 제거
    if (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9')
    ) {
      filteredStr += char;
    }
  }

  // 통일을 위해 소문자로 변환
  return (
    filteredStr.toLowerCase() ===
    [...filteredStr].reverse().join('').toLowerCase()
  );
};
