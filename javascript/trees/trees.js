// node class
class Node {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

//binary tree class
class BinaryTree {
  constructor(root = null) {
      this.root = root;
  }

  // pre Order
  preOrder() {
    //Root - Left - Right.
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

//in order
  inOrder() {
    //left - Root - Right.
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  /// post order
  postOrder() {
    //Root - Left - Right.
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  // find maximum function
  findMaximumValue() {

  // check if there is no root
    if (!this.root) {
        return ' there is no root';
    }
    let array = this.postOrder();
    let maxValue = this.root.value;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxValue)
        maxValue = array[i];

    }
    return maxValue;
}

// cc 17
breadthFirst() {

  //define pointer and queue and array to hold the tree nodes
  let pointer = null;
  let queue = [];
  let treesArray = [];

  queue.unshift(this.root);

  // looping over tree nodes
  while (queue.length) {
    pointer = queue.pop();
    treesArray.push(pointer.value);

    if (pointer.left) {
      queue.unshift(pointer.left);
    }
    if (pointer.right) {
      queue.unshift(pointer.right);
    }
  }
  return treesArray;
}
  // code Challenge 18
  fizzBuzzFunc(tree) {
    // define pointer and another tree
    let requiredTree = tree
    let pointer = requiredTree.root;
    let queue = [];

    queue.push(pointer);

    while (queue.length) {
      pointer = queue.pop();
      if (pointer.value % 3 === 0 && pointer.value % 5 === 0 && pointer !== null) {
        pointer.value = 'FizzBuzz';
      }
      else if (pointer.value % 3 === 0 && pointer !== null) {
        pointer.value = 'Fizz';
      }
      else if (pointer.value % 5 === 0 && pointer !== null) {
        pointer.value = 'Buzz';
      }
      else if(pointer.value % 3 !== 0 && pointer.value % 5 !== 0 && pointer !== null) {
        pointer.value = `${pointer.value}`;
      }
      if (pointer.left) queue.push(pointer.left);
      if (pointer.right) queue.push(pointer.right);
    }
    return requiredTree;
  }

}


// binary Search tree
class BinarySearchTree {
  constructor(root = null) {
      this.root = root;
  }

  // add a value to the tree
  add(value) {
      let newNode = new Node(value)
      const binaryAdd = (node, newNode) => {
          if (newNode.value < node.value) {
              if (!node.left) {
                  node.left = newNode;
              } else {
                  binaryAdd(node.left, newNode);
              }

          } else if (!node.right) {
              node.right = newNode;
          } else {
              binaryAdd(node.right, newNode);
          }
      }

      if (!this.root) {
          this.root = newNode;
          return;
      } else {
          binaryAdd(this.root, newNode);
      }
  }

  // return true if the tree contain the value.
  contains(value) {

      const search = (value, node = null) => {
          if (node === null) {
              return false;
          } else if (value < node.value) {
              return search(value, node.left);

          } else if (value > node.value) {
              return search(value, node.right)
          } else return true;
      }
      if (!this.root) {
          return false;
      } else {
          return search(value, this.root)
      }
  }



}

// export classes
module.exports = { BinaryTree, Node, BinarySearchTree };
