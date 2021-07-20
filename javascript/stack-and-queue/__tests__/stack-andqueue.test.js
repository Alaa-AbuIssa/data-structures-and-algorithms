const Node = require('../node');
const { Stack, Queue } = require('../stacks-and-queues.js');

let stack = new Stack();
let queue = new Queue();

describe('Stack and Queue tests', () => {
    test(' Can successfully push onto a stack', () => {
        stack.push(1);

        expect(stack.top.value).toEqual(1);


    });

    test(' Can successfully push multiple values onto a stack', () => {
        stack.push(2);

        expect(stack.top.value).toEqual(2);

    });

    test(' Can successfully pop off the stack', () => {
        let pop = stack.pop();

        expect(stack.top.value).toEqual(1);
        expect(pop).toEqual(2);


    });
    test('Can successfully empty a stack after multiple pops', () => {
        let pop = stack.pop();

        expect(stack.top).toBeNull();



    });
    test('Can successfully instantiate an empty stack', () => {

        let stack2 = new Stack();
        expect(stack2.isEmpty()).toBeTruthy();



    });
    test('Calling pop or peek on empty stack raises exception', () => {
        let stack2 = new Stack();
        expect(stack2.peek()).toEqual('empty');
        expect(stack2.pop()).toEqual('empty');



    });

    test('Can successfully enqueue into a queue', () => {
        queue.enqueue(1)
        expect(queue.front.value).toEqual(1);



    });
    test('Can successfully enqueue multiple values into a queue', () => {
        queue.enqueue(2)
        expect(queue.front.value).toEqual(1);



    });

    test('Can successfully dequeue out of a queue the expected value', () => {

        queue.dequeue()

        expect(queue.front.value).toEqual(2);



    });
    test('Can successfully dequeue out of a queue the expected value', () => {

        let dequeue = queue.dequeue()

        expect(dequeue).toEqual(2);



    });
    test(' Can successfully peek into a queue, seeing the expected value', () => {

        queue.enqueue(1);

        expect(queue.peek()).toEqual(1);



    });
    test(' Can successfully empty a queue after multiple dequeues', () => {

        queue.enqueue(2);
        queue.dequeue();
        queue.dequeue();


        expect(queue.peek()).toEqual('empty');



    });
    test(' Can successfully instantiate an empty queue', () => {

        let queue2 = new Queue();

        expect(queue2.peek()).toEqual('empty');



    });
    test('Calling dequeue or peek on empty queue raises exception', () => {

        let queue3 = new Queue();

        expect(queue3.peek()).toEqual('empty');
        expect(queue3.dequeue()).toEqual('empty');



    });

})
