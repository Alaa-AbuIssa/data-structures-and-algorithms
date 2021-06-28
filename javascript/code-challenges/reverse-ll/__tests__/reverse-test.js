'use strict';

let array = [1, 2, 3, 4, 5];
function reverse(array) {

  let reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
}
reverse(array);

console.log(reverse(array));

describe('Testing challenge 2 array-reverse', () => {
  test('It should give my the reveresed array', () => {
    expect(reverse([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
