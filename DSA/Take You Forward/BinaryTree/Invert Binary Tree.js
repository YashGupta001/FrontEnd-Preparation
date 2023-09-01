/*

Invert Binary Tree

https://leetcode.com/problems/invert-binary-tree/

*/

const invertTree = (node) => {
  if (!node) return null;
  [node.left, node.right] = [node.right, node.left];
  invertTree(node.left);
  invertTree(node.right);
  return node;
};
