/*

Binary Tree Level Order Traversal

https://leetcode.com/problems/binary-tree-level-order-traversal/

*/

// normal

var levelOrder = function (root) {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const val = queue.shift();
    result.push(val);
    if (val.left) {
      queue.push(val.left);
    }
    if (val.right) {
      queue.push(val.right);
    }
  }

  return result;
};

// as per leetcode

var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const length = queue.length;
    let count = 0;
    const currentLevel = [];

    while (count < length) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      count++;
    }

    result.push(currentLevel);
  }

  return result;
};
