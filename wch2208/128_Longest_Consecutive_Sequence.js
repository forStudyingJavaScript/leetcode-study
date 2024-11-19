/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 접근법:
  // 시작점을 찾고 거기에서 +1 값이 존재하는지 확인하고 카운트업한다.
  // Set 객체로 만들어서 has() 메서드로 조회하면 O(n)으로 조회할 수 있다.

  const set = new Set(nums);
  let maxLength = 0;

  for (const value of set) {
    // set.has(value - 1)가 false면 시작점이다.
    if (!set.has(value - 1)) {
      // 시작점을 찾았으면 현재 숫자와 카운트 초기화
      let currentNum = value;
      let currentLength = 1;

      // set.has(currentNum + 1)이 true면 연속되는 수가 존재한다.
      // currentNum +1로 업데이트하면서 연속되는 수를 계속 체크
      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      // maxLength에 최대값 업데이트
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
};

//time: 44m
//memory: 73.56MB
