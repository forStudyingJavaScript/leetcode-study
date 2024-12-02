/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 3) return Math.max(...nums);

  const firstNums = nums.slice(0, nums.length - 1);
  const secondNums = nums.slice(1);
  const firstDp = [firstNums[0], firstNums[1]];
  const secondDp = [secondNums[0], secondNums[1]];

  for (let i = 2; i < firstNums.length; i++) {
    if (i === 2) firstDp[i] = firstDp[0] + firstNums[i];
    else firstDp[i] = Math.max(firstDp[i - 2], firstDp[i - 3]) + firstNums[i];
  }

  for (let i = 2; i < secondNums.length; i++) {
    if (i === 2) secondDp[i] = secondDp[0] + secondNums[i];
    else
      secondDp[i] = Math.max(secondDp[i - 2], secondDp[i - 3]) + secondNums[i];
  }

  return Math.max(
    firstDp[firstNums.length - 1],
    firstDp[firstNums.length - 2],
    secondDp[secondNums.length - 1],
    secondDp[secondNums.length - 2]
  );
};
