/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let [min, max] = nums.reduce(([min, max], num) => 
      [Math.min(min, num), Math.max(max, num)], 
      [Infinity, -Infinity]
  );
  
  const offset = min >= 0 ? 0 : -min;
  const count = new Array(max + 1 + offset).fill(0);
  
  for(let num of nums) {
      count[num + offset]++;
  }
  
  let kthLargest;
  for(let i = count.length - 1; i >= 0; i--) {
      k -= count[i];
      if(k <= 0) {
          kthLargest = i - offset;
          break;
      }
  }
  
  return kthLargest;
};