'use strict';

//require node
const Node=require('./node');

//class stack
class Stack {
    constructor() {
        this.top = null;
    }


    //push
    push(value) {
      let node = new Node(value);
      if (this.top) {
        node.next = this.top;
        this.top = node;
      }
      this.top = node;
    }


    //pop
    pop() {
        if (!this.top) {
            return 'null';
        } else {
            let value = this.top.value;
            this.top = this.top.next;
            return value;
        }

    };

    //peek
    peek() {
        if (!this.top) {
            return 'null';
        } else {
            let value = this.top.value;

            return value;
        }
    };


    //is empty
    isEmpty() {
        if (!this.top) {
            return true;
        } else {

            return false;
        }
    };

}

//class queue
class Queue {
    constructor() {

        this.front = null;
    }

    /// enqueue
    enqueue(value) {
        let node = new Node(value);
        if (!this.front) {
            this.front = node;
        } else {
            let current = this.front;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

    };


    //dequeue
    dequeue() {
        if (!this.front) {
            return 'null';
        } else {
            let value = this.front.value;
            let first = this.front
            this.front = first.next;
            return value;
        }
    };


    ///peek

    peek() {
        if (!this.front) {
            return 'null';
        } else {
            let value = this.front.value;

            return value;
        }
    };


    /// is empty
    isEmpty() {
        if (!this.front) {
            return true;
        } else {

            return false;
        }
    };
}

module.exports = {
    Stack,
    Queue

}
