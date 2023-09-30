/*

https://leetcode.com/problems/maximum-depth-of-binary-tree/

https://www.youtube.com/watch?v=eD3tmO66aBA

*/

var maxDepth = function (root, count = 0) {
  if (!root) return count;
  count++;
  return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
};

// or

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
