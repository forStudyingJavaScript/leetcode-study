/**
 *
 * 128. Longest Consecutive Sequence
 * Medium
 * Topics
 * Companies
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 중복되는 요소 허용, 빈 배열 허용
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  const sortedSet = Array.from(set).sort((a, b) => a - b);

  let maxSequenceLength = 1;
  let currentSequence = [sortedSet[0]];

  for (let i = 1; i < sortedSet.length; i++) {
    const last = currentSequence.pop();
    if (last + 1 === sortedSet[i]) {
      currentSequence.push(last);
      currentSequence.push(sortedSet[i]);
    } else {
      currentSequence = [sortedSet[i]];
    }
    maxSequenceLength = Math.max(maxSequenceLength, currentSequence.length);
  }

  return maxSequenceLength;
};
