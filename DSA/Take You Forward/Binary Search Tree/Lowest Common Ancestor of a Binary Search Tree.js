/*

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

https://www.youtube.com/watch?v=cX_kPV_foZc

*/

// TC: O(h), SC: O(1)

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  let curr = root.val;

  if (curr < p.val && curr < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (curr > p.val && curr > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
};
