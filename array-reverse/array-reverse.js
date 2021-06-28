'use strict';

let array = [1, 2, 3, 4, 5];
function reverse(array) {
  //define an empty array

  let reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
}
reverse(array);

// console.log(reverse(array));
