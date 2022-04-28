const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class StackData {
  data
  previous

  constructor(data, previous) {
    this.data = data
    this.previous = previous
  }
}

class Stack {
  top = null

  push(element) {
    this.top = new StackData(element, this.top)
  }

  pop() {
    const temp = this.peek()
    if (this.top !== null) this.top = this.top.previous
    return temp
  }

  peek() {
    return (this.top === null) ? undefined : this.top.data
  }
}

module.exports = {
  Stack
};
