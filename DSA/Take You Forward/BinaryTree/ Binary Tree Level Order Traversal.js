/*

 Binary Tree Level Order Traversal

 https://leetcode.com/problems/binary-tree-level-order-traversal/

 https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363344#overview


*/

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
