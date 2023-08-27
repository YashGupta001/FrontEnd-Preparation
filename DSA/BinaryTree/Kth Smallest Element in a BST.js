/*

https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

https://www.youtube.com/watch?v=9TJYWh0adfk


The INorder of any BST is always in order

*/

// TC: O(N) SC: O(N)

var kthSmallest = function (root, k) {
  if (!root) return null;
  return helper(root, k, []);
};

var helper = function (root, k, result) {
  if (!root) return;
  helper(root.left, k, result);
  result.push(root.val);
  helper(root.right, k, result);

  return result[k - 1];
};

// TC: O(N)  SC: O(1)

var kthSmallest = function (root, k) {
  if (!root) return null;
  let count = 0;
  let ans = -1;
  dfs(root);

  return ans;

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    count++;
    if (k === count) {
      ans = node.val;
      return;
    }
    dfs(node.right);
  }
};
