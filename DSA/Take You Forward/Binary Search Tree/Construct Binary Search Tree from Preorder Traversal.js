/*

https://www.youtube.com/watch?v=UmJT3j26t1I

https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/


REMEMBER: BST Inorder Traversal is always Sorted


So if you have a preorder and inorder then we can create a unique binary tree

TC: O(NLogN), SC: O(N)


Will see the optimal solution: For that use the logic of check if its BST or not logic

TC: O(2N) --> O(N), SC: O(1)

*/

var bstFromPreorder = function (preorder) {
  let idx = 0;
  var buildTree = function (bound) {
    if (idx === preorder.length || preorder[idx] > bound) return null;
    const root = new TreeNode(preorder[idx++]); // also increment the idx
    root.left = buildTree(root.val);
    root.right = buildTree(bound);
    return root;
  };

  return buildTree(Infinity);
};
