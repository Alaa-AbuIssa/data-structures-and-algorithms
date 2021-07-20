//require the node and stack and queue
const Node=require('./node');
const {Stack}=require('./stack-and-queue');

//class PseudoQueue
class PseudoQueue {
  constructor() {
      this.firstStack = new Stack();
      this.secondStack = new Stack();

  }

  //enqueue
  enqueue(value) {
      this.firstStack.push(value);
  };

  //dequeue
  dequeue() {
      if (!this.firstStack.top && !this.secondStack.top) {
          return 'empty';
      } else if (!this.secondStack.top) {
          while (this.firstStack.top) {
              this.secondStack.push(this.firstStack.pop());
          }
          return this.secondStack.pop();


      }

  };
}

module.exports = PseudoQueue;
