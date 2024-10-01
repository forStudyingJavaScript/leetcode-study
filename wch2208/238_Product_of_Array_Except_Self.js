/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = new Array(nums.length);

  nums.reduce((accumulator, currentValue, index) => {
    answer[index] = accumulator;
    return accumulator * currentValue;
  }, 1);

  nums.reduceRight((accumulator, currentValue, index) => {
    answer[index] *= accumulator;
    return accumulator * currentValue;
  }, 1);

  return answer;
};

//time: 39m 12s
