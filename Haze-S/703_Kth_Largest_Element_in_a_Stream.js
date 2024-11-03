/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.arr = new MinPriorityQueue({ priority: (element) => element });
  for (let num of nums) {
    this.arr.enqueue(num);
  }
  while (this.arr.size() > k) this.arr.dequeue().element;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.arr.size() < this.k) this.arr.enqueue(val);
  else if (val > this.arr.front().element) {
    this.arr.dequeue().element;
    this.arr.enqueue(val);
  }
  return this.arr.front().element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
