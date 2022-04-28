const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class QueueData {
  data
  previous

  constructor(data, previous = null) {
    this.data = data
    this.previous = previous
  }
}

class Queue {

  queue = null

  getUnderlyingList(queue = this.queue) {
    if (queue === null) return undefined
    const list = new ListNode(queue.data)
    if (queue.previous !== null) list.next = this.getUnderlyingList(queue.previous)
    return list
  }

  enqueue(value) {
    if(this.queue === null) this.queue = new QueueData(value)
    else(this.add(value, this.queue))
  }

  add(value, queue) {
    if(queue.previous !== null) this.add(value, queue.previous)
    else queue.previous = new QueueData(value)
  }

  dequeue() {
    if(this.queue === null) return undefined
    const temp = this.queue.data
    this.queue = this.queue.previous
    return temp
  }
}

module.exports = {
  Queue
};

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue())
// console.log(queue.dequeue())
