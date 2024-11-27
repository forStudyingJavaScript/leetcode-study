/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * 22m
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  nums.sort((a, b) => b - a);

  this.ranking = nums.slice(0, k);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (val < this.ranking[this.k - 1]) return this.ranking[this.k - 1];

  this.ranking.push(val);

  this.ranking.sort((a, b) => b - a);
  this.ranking.splice(this.k, 1);

  return this.ranking[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
