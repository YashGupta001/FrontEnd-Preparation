/*

https://leetcode.com/problems/symmetric-tree/

https://www.youtube.com/watch?v=nKggNAiEpBE

*/

var isSymmetric = function (root) {
  return root === null || isSymmetrical(root.left, root.right);
};

var isSymmetrical = function (left, right) {
  if (!left || !right) {
    return left === right;
  }

  if (left.val !== right.val) return false;

  return (
    isSymmetrical(left.left, right.right) &&
    isSymmetrical(left.right, right.left)
  );
};
