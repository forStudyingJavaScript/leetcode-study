var containsDuplicate = function (nums) {
  /**
   * new Set 사용시 중복값이 제거 됩니다.
   * 원본 배열과 길이가 다르다면 중복이 있으므로 true를 반환합니다.
   * 원본 배열과 길이가 같다면 false를 반환합니다.
   *  */
  return [...new Set(nums)].length !== nums.length;
};
