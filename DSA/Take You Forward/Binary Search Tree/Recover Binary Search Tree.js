/*

https://leetcode.com/problems/recover-binary-search-tree/

https://www.youtube.com/watch?v=ZWGW7FminDM

*/

// TC: O(N), SC: O(1)

var recoverTree = function (root) {
  let first = null;
  let prev = new TreeNode(-Infinity);
  let middle = null;
  let last = null;

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    // case to handle for violation
    if (prev && node.val < prev.val) {
      if (first === null) {
        first = prev;
        middle = node;
      } else {
        last = node;
      }
    }

    // change the prev
    prev = node;
    inOrder(node.right);
  }

  inOrder(root);

  if (first && last) {
    let temp = first.val;
    first.val = last.val;
    last.val = temp;
  } else if (first && middle) {
    // for adjacent node case
    let temp = first.val;
    first.val = middle.val;
    middle.val = temp;
  }
};
