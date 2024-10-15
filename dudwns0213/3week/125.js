/**
 * @param {string} s
 * @return {boolean}
 *
 * 회문: 거꾸로 읽어도 제대로 읽은 것과 같은 문장
 *
 * 대문자를 소문자로 전부 변환부터 하자!
 * 공백, 쉼표, 세미콜론, 기타 등등 싹 다 삭제하자
 *
 * 회문인지 아닌지를 어떻게 검사하는가?
 *
 * 투 포인터를 쓸 수도 있을 듯...?
 * 원문과 뒤집은 문장이 똑같은지 그냥 비교해도 될 거 같긴 하당
 *
 * 처음에는 뒤집은 문장이 할 수 있도록 풀었지만, 그 이후에 투 포인터가 성능적으로 좀 더 좋을 것 같아
 * GPT의 힘을 빌려서 수정해봤습니다!
 *
 */
var isPalindrome = function (s) {
  const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
