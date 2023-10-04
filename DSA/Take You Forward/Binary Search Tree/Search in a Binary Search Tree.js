/*

https://leetcode.com/problems/search-in-a-binary-search-tree/

*/

var searchBST = function (root, val) {
  if (!root) return null;

  while (root) {
    if (root.val === val) {
      return root;
    } else if (root.val < val) {
      root = root.right;
    } else {
      root = root.left;
    }
  }

  return null;
};
