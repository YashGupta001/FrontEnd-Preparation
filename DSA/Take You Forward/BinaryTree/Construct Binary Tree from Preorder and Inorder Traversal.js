/*

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

https://www.youtube.com/watch?v=aZNaLrVebKQ

Check the construct a unique binary tree

*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  const inMap = {};

  for (let i = 0; i < inorder.length; i++) {
    inMap[inorder[i]] = i;
  }

  const root = buildTreeHelper(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    inMap
  );

  return root;
};

var buildTreeHelper = function (
  preorder,
  preStart,
  preEnd,
  inorder,
  inStart,
  inEnd,
  inMap
) {
  if (preStart > preEnd || inStart > inEnd) return null;

  const root = new TreeNode(preorder[preStart]);

  const inRoot = inMap[root.val];

  const numbersLeft = inRoot - inStart;

  root.left = buildTreeHelper(
    preorder,
    preStart + 1,
    preStart + numbersLeft,
    inorder,
    inStart,
    inRoot - 1,
    inMap
  );
  root.right = buildTreeHelper(
    preorder,
    preStart + numbersLeft + 1,
    preEnd,
    inorder,
    inRoot + 1,
    inEnd,
    inMap
  );

  return root;
};
