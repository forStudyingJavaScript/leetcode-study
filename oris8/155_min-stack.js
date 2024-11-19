class MinStack {
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  push(val) {
    this.min = Math.min(this.min, val);
    this.stack.push(val);
  }

  pop() {
    const top = this.stack.pop();
    if (top === this.min) {
      this.min = Math.min(...this.stack);
    }
  }

  top() {
    return this.stack.at(-1);
  }

  getMin() {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
