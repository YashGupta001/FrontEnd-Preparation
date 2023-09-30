/*

https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

https://www.youtube.com/watch?v=3OXWEdlIGl4

*/

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length) {
    const length = queue.length;
    let count = 0;
    const currentLevel = [];

    while (count < length) {
      const node = queue.shift();
      if (leftToRight) {
        currentLevel.push(node.val);
      } else {
        currentLevel.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      count++;
    }

    leftToRight = !leftToRight;
    result.push(currentLevel);
  }

  return result;
};
