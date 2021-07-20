//require psedue
const PesudoQueue = require('../pseudo');
let pesudoQueue = new PesudoQueue();



describe('Queue with stack tsts', () => {

    test('Can successfully enqueue into a queue', () => {
        pesudoQueue.enqueue(1)
        expect(pesudoQueue.firstStack.top.value).toEqual(1);
    });

    test('Can successfully enqueue multiple values into a queue', () => {
        pesudoQueue.enqueue(2)
        expect(pesudoQueue.firstStack.top.value).toEqual(2);
          });


    test('Can successfully dequeue out of a queue the expected value', () => {
        expect(pesudoQueue.dequeue()).toEqual(1);

    });
});
