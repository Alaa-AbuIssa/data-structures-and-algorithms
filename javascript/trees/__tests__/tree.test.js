let { BinaryTree, Node, BinarySearchTree } = require('../trees')
describe('tree test', () => {
    let tree;
    beforeAll(() => {
        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        five.left = eight;
        three.left = six;
        three.right = seven;
        tree = new BinaryTree(one);
    });

    it('Can successfully add a left child and right child to a single root node', () => {

        expect(tree.root.left.value).toEqual(2);
        expect(tree.root.right.value).toEqual(3);
    });
    it('Can successfully return a collection from a preorder traversal', () => {
        const expected = [1, 2, 4, 5, 8, 3, 6, 7];
        const preOrder = tree.preOrder();
        expect(preOrder).toEqual(expected);
    });
    it('inOr Can successfully return a collection from an inorder traversalder', () => {
        const expected = [4, 2, 8, 5, 1, 6, 3, 7];
        const inOrder = tree.inOrder();
        expect(inOrder).toEqual(expected);
    });
    it(' Can successfully return a collection from a postorder traversal', () => {
        const expected = [4, 8, 5, 2, 6, 7, 3, 1];
        const postOrder = tree.postOrder();
        expect(postOrder).toEqual(expected);
    });
    it('Can successfully instantiate an empty tree', () => {
        const node = new Node();
        expect(node instanceof Node).toBeTruthy();
    });
    it('Can successfully instantiate a tree with a single root node', () => {
        const value = 'any value';
        const node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.left).toBeNull();
        expect(node.right).toBeNull();
    });
    it('Can successfully return the max value correctly', () => {
        const max = tree.findMaximumValue();
        expect(max).toEqual(8);
    });


    /// teting for cc17

    describe(' First Test', ()=>{
      let newTree= new BinaryTree;

      newTree.root=new Node(0);
      newTree.root.left=new Node(1);
      newTree.root.right=new Node(8);
      newTree.root.left.left=new Node(5);
      newTree.root.left.right=new Node(9);
      newTree.root.right.left=new Node(10);
      newTree.root.right.right=new Node(6);
    })
    it('find first Breadth', () => {
      expect(tree.breadthFirst()).toEqual([0,1,8,5,9,10,6]);
  });
})
