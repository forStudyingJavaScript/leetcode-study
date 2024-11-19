/**
 * 26m13s 소요
 *
 * 시간복잡도: O(n)
 *
 * 배열이 주어졌을 때 연속된 숫자로 이루어진 가장 긴 부분 배열의 길이를 구하는 문제입니다.
 * 기존에 풀었던 방식은 O(n log n)이 소요되는데 O(n)으로 줄일 방법을 잘 모르겠어서 풀이를 참고했습니다.
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  // 중복된 숫자를 제거합니다.
  let set = new Set(nums);
  let max = 1;

  for (let num of set) {
    // num - 1이 set에 없다면 num을 시작으로 연속된 숫자들을 찾습니다.
    if (!set.has(num - 1)) {
      let currentMax = 1;

      // num + 1이 set에 있다면 연속된 숫자를 찾습니다.
      while (set.has(num + 1)) {
        num++;
        currentMax++;
      }

      // 최대길이를 구합니다.
      max = Math.max(max, currentMax);
    }
  }

  return max;
};

/*
기존 풀이 방법

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  중복된 숫자를 제거하고 오름차순으로 정렬합니다.
  const arr = Array.from(new Set(nums)).sort((a, b) => a - b);
  let count = 1;
  let long = 1;

  for (let i = 0; i < arr.length; i++) {
    현재 숫자가 이전 숫자보다 1 크다면 연속된 숫자입니다.
    if (arr[i] === arr[i - 1] + 1) {
      count++;
    } else { 
      연속된 숫자가 아니라면 최대값을 갱신합니다. 
      long = Math.max(long, count);
      count = 1;
    }
  }

  return Math.max(long, count);
};
*/
