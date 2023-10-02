/*

https://www.youtube.com/watch?v=KV4mRzTjlAk

https://leetcode.com/problems/binary-tree-right-side-view/

*/

// Using BFS but TC: O(n) and SC: O(n)
var rightSideView = function (root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];
  const result = [];
  const queue = [root];

  while (queue.length) {
    let count = 0;
    let length = queue.length;

    while (count < length) {
      count++;
      const currentNode = queue.shift();
      if (count === length) {
        result.push(currentNode.val);
      }
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return result;
};

// USing DFS PREORDER: NLR but in reverse NRL
var rightSideView = function (root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  const result = [];
  dfsPreOrder(root, 0, result);

  return result;
};

var dfsPreOrder = function (node, currentLevel, result) {
  if (!node) return;
  if (currentLevel >= result.length) {
    result.push(node.val);
  }
  if (node.right) {
    dfsPreOrder(node.right, currentLevel + 1, result);
  }

  if (node.left) {
    dfsPreOrder(node.left, currentLevel + 1, result);
  }
};

// OR

var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  dfspre(root, 0);
  return result;

  function dfspre(node, h) {
    if (!node) return;
    result[h] = node.val;
    dfspre(node.left, h + 1);
    dfspre(node.right, h + 1);
  }
};
