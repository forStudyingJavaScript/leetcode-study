/**
 * 15m33s 소요
 *
 * 시간 복잡도: O(n log n)
 *
 * split을 사용하면 배열로 변환 할 수 있어서 이걸 사용했습니다.
 * 배열을 sort로 정렬하고 join으로 다시 문자열로 변환하여 비교했습니다.
 *
 * 두 문자열의 길이가 다르다면 false를 반환합니다.
 * 두 문자열을 배열로 변환하고, 알파벳 순으로 정렬한 후 다시 문자열로 변환하여 비교합니다.
 * 두 문자열이 동일하면 애너그램이므로 true를 반환하고 그렇지 않으면 false를 반환합니다.
 */
var isAnagram = function (s, t) {
  // 두 문자열의 길이가 다르다면 false 반환 (O(1))
  if (s.length !== t.length) return false;

  // 문자열을 배열로 변환하고 알파벳 순으로 정렬한 후 다시 문자열로 변환하여 비교 (O(n log n))
  return s.split("").sort().join("") === t.split("").sort().join("");
};
