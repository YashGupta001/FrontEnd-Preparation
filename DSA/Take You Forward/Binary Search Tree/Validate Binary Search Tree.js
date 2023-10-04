/*

https://leetcode.com/problems/validate-binary-search-tree/

https://www.youtube.com/watch?v=f-sj7I5oXEI

*/

var isValidBST = function (root) {
  return isValid(root, -Infinity, Infinity);
};

var isValid = function (node, min, max) {
  if (!node) return true;
  if (node.val >= max || node.val <= min) return false;
  return (
    isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
  );
};

// OR

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
