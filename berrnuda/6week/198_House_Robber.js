/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let rob1 = 0;
  let rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let rob = Math.max(rob2 + nums[i], rob1);
    rob2 = rob1;
    rob1 = rob;
  }

  return rob1;
};
