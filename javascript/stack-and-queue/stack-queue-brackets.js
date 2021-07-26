'use strict';

// require the stack
const Stack=require('./stack-and-queue');


// validateBrackets function
module.exports= function validateBrackets(string){
  let stack = new Stack();
  let brackets = "[]{}()";

  for (let i = 0; i < string.length; i++) {
    let bracketIndex = brackets.indexOf(string[i]);

    if (bracketIndex === -1) {
      continue;
    }
    if (bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1);
    } else if (stack.pop() !== bracketIndex) {
      return false;
    }
  }
  return stack.isEmpty();
}

