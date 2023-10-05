/*

https://leetcode.com/problems/binary-search-tree-iterator/

*/

var BSTIterator = function (root) {
  // Node, this will update whenever we make moves
  this.node = root;

  // A stack that will be used to get the in-order traversal of the list
  this.stack = [];

  // Function to get the in-order traversal of the list
  const bst_in_order = (node) => {
    // Leaf node? Return up the call stack
    if (!node) {
      return null;
    }

    // Go to the right most node
    bst_in_order(node.right);

    // Once as far right as we can get
    // add to the stack
    this.stack.push(node);

    // Get the left nodes
    bst_in_order(node.left);
  };

  // Populate our stack
  bst_in_order(root);
};

BSTIterator.prototype.next = function () {
  // Constant Time: O(1)

  // As we already have a stack populated with our
  // in-order traversal, all we have to do is take the top
  // of the stack and we're all good.
  this.node = this.stack.pop();
  return this.node.val;
};

BSTIterator.prototype.hasNext = function () {
  // Constant Time: O(1)

  // So is their anything in the stack at all?
  // What this mean's is. If I am empty, return false, if not
  // return true.

  return this.stack.length;
};
