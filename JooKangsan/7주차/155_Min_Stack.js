class MinStack {
  constructor() {
      this.stack = [];
      this.minStack = [];
  }
  push(val) {
      this.stack.push(val);
      
      if (this.minStack.length === 0 || val <= this.getMin()) {
          this.minStack.push(val);
      }
  }
  pop() {
      if (this.stack.pop() === this.getMin()) {
          this.minStack.pop();
      }
  }
  top() {
      return this.stack[this.stack.length - 1];
  }
  getMin() {
      return this.minStack[this.minStack.length - 1];
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
