/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  let firstCase = [...nums];
  firstCase.pop();
  let first = robHelper(firstCase);

  let secondCase = [...nums];
  secondCase.shift();
  let second = robHelper(secondCase);

  return Math.max(first, second);
};

function robHelper(houses) {
  let n = houses.length;
  let dp = new Array(n).fill(0);
  dp[0] = houses[0];
  dp[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
  }
  return dp[n - 1];
}
