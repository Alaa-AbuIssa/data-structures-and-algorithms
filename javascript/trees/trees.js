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
    const result = [];
    const _move = (node) => {
      result.push(node.value);
      if (node.left) _move(node.left);
      if (node.right) _move(node.right);
    };
    _move(this.root);
    return result;
  }

  /// post order
  postOrder() {
    const result = [];
    const _move = (node) => {
      if (node.left) _move(node.left);
      if (node.right) _move(node.right);
      result.push(node.value);
    };
    _move(this.root);
    return result;
  }

  //in order
  inOrder() {
    const result = [];
    const _move = (node) => {
      if (node.left) _move(node.left);
      result.push(node.value);
      if (node.right) _move(node.right);
    };
    _move(this.root);
    return result;
  }
}


// binary Search tree
class BinarySearchTree {
  constructor(root = null) {
      this.root = root;
  }

  // add
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

  // contains
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
