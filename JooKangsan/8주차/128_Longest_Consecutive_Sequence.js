/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;
    for (let i = 0; i < numSet.length; i++) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}
