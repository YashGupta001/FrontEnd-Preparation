/*

https://leetcode.com/problems/insert-into-a-binary-search-tree/description/

https://www.youtube.com/watch?v=FiFiNvM29ps

*/

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  let curr = root;

  while (true) {
    if (curr.val <= val) {
      if (curr.right) {
        curr = curr.right;
      } else {
        curr.right = new TreeNode(val);
        break;
      }
    } else {
      if (curr.left) {
        curr = curr.left;
      } else {
        curr.left = new TreeNode(val);
        break;
      }
    }
  }

  return root;
};
