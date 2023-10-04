/*

https://leetcode.com/problems/delete-node-in-a-bst/description/

https://www.youtube.com/watch?v=kouxiP_H5WE

*/

var deleteNode = function (root, key) {
  if (!root) return null;

  // case when root of the tree has to be deleted
  if (root.val === key) return helper(root);

  let dummy = root;

  while (root) {
    if (root.val > key) {
      if (root.left && root.left.val === key) {
        root.left = helper(root.left);
        break;
      } else {
        root = root.left;
      }
    } else {
      if (root.right && root.right.val === key) {
        root.right = helper(root.right);
        break;
      } else {
        root = root.right;
      }
    }
  }

  return dummy;
};

var helper = function (root) {
  if (!root.left) {
    return root.right;
  }
  if (!root.right) {
    return root.left;
  }

  const rightChild = root.right;
  const lastRight = findLastRight(root.left);
  lastRight.right = rightChild;

  return root.left;
};

var findLastRight = function (root) {
  if (!root.right) {
    return root;
  }
  return findLastRight(root.right);
};
