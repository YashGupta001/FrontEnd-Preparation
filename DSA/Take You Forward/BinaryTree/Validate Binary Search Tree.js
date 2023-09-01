/*

Validate Binary Search Tree

https://leetcode.com/problems/validate-binary-search-tree/

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22416724#overview


*/

// TC: O(N) , SC: O(N) as in recursion it can take all the stacks

var isValidBST = function (root) {
  if (!root) return true;
  return dfs(root, -Infinity, Infinity);
};

function dfs(node, min, max) {
  if (node.val <= min || node.val >= max) return false;

  if (node.left) {
    if (!dfs(node.left, min, node.val)) return false;
  }

  if (node.right) {
    if (!dfs(node.right, node.val, max)) return false;
  }

  return true;
}
