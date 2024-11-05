/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
this.nums = nums.sort((a, b) => a - b).slice(-k);
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
if (this.nums.length < this.k) {
this.nums.push(val);
this.nums.sort((a, b) => a - b);
} else if (val > this.nums[0]) {
this.nums[0] = val;
this.nums.sort((a, b) => a - b);
}
return this.nums[0]; 
}
/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/
