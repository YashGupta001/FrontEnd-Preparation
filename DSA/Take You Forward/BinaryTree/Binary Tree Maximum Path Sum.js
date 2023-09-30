/*

https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

https://www.youtube.com/watch?v=WszrfSwMz58

*/

// One Way

var maxPathSum = function (root) {
  let maxPath = Number.MIN_SAFE_INTEGER;
  var helper = function (root) {
    if (!root) return 0;

    const leftSum = Math.max(0, helper(root.left)); // ignore the negative sum
    const rightSum = Math.max(0, helper(root.right)); // ignore the negative sum

    maxPath = Math.max(maxPath, root.val + leftSum + rightSum);

    return root.val + Math.max(leftSum, rightSum);
  };

  helper(root);

  return maxPath;
};

// Another Way

var maxPathSum = function (root) {
  let maxPath = { max: 0 };
  helper(root, maxPath);
  return maxPath.max;
};

var helper = function (root, maxPath) {
  if (!root) return 0;

  const leftSum = Math.max(0, helper(root.left, maxPath)); // ignore the negative sum
  const rightSum = Math.max(0, helper(root.right, maxPath)); // ignore the negative sum

  maxPath.max = Math.max(maxPath.max, root.val + leftSum + rightSum);

  return root.val + Math.max(leftSum, rightSum);
};
