/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.score = [];

  for (let num of nums) this.add(num);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.score.length < this.k) this.score.push(val);
  else if (val > this.score[this.k - 1]) this.score[this.k - 1] = val;

  this.score.sort((a, b) => b - a);

  return this.score[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
