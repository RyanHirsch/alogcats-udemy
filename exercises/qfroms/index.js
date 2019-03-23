// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack = new Stack();
    this.inverted = new Stack();
  }

  add(item) {
    this.stack.push(item)
  }

  remove() {
    if(this.peek()) {
      return this.inverted.pop();
    }
  }

  peek() {
    if(!this.inverted.peek()) {
      while(this.stack.peek()) {
        this.inverted.push(this.stack.pop())
      }
    }
    return this.inverted.peek();
  }
}

module.exports = Queue;
