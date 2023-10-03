/*

https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

https://www.youtube.com/watch?v=LgLRTaEMRVc

*/

function TreeNode(val, left, right) {
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

var buildTree = function (inorder, postorder) {
  const inMap = {};
  for (let i = 0; i < inorder.length; i++) {
    inMap[inorder[i]] = i;
  }

  const root = buildTreeHelper(
    postorder,
    0,
    postorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    inMap
  );

  return root;
};

var buildTreeHelper = function (
  postorder,
  postStart,
  postEnd,
  inorder,
  inStart,
  inEnd,
  inMap
) {
  if (postStart > postEnd || inStart > inEnd) return null;
  const root = new TreeNode(postorder[postEnd]);
  const inRoot = inMap[root.val];
  const numbersLeft = inRoot - inStart;

  root.left = buildTreeHelper(
    postorder,
    postStart,
    postStart + numbersLeft - 1,
    inorder,
    inStart,
    inRoot - 1,
    inMap
  );
  root.right = buildTreeHelper(
    postorder,
    postStart + numbersLeft,
    postEnd - 1,
    inorder,
    inRoot + 1,
    inEnd,
    inMap
  );

  return root;
};
