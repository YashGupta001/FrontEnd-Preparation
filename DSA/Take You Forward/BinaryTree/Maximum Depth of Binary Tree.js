/*

https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363338#overview

*/

var maxDepth = function (root, count = 0) {
  if (!root) return count;
  count++;
  return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
};
