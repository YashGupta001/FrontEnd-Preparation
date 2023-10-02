/*

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

https://www.youtube.com/watch?v=_-QHfMDde90

*/

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  var resL = lowestCommonAncestor(root.left, p, q);
  var resR = lowestCommonAncestor(root.right, p, q);
  return resL && resR ? root : resL || resR;
}

// OR

var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node) => {
    if (node === null) {
      return null;
    }

    if (node === p || node === q) {
      return node;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    return left && right ? node : left || right;
  };

  return dfs(root);
};
