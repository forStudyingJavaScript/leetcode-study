/**
 * 31m 11s 소요
 *
 * 시간복잡도 : O(1)
 *
 * 지피티와 함께 풀었습니다 어렵네요
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
  }
};

MinStack.prototype.pop = function () {
  const poppedValue = this.stack.pop();
  if (poppedValue === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
