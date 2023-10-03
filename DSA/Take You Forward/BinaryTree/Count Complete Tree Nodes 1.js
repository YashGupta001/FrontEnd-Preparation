/*

https://leetcode.com/problems/count-complete-tree-nodes/description/

https://www.youtube.com/watch?v=u-yWemKGWO0

*/

// Brute force: TC: O(n), SC: O(h)

var countNodes = function (root) {
  let count = 0;

  function dfs(node) {
    if (!node) return;
    count++;
    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);
  return count;
};

// But as mentioned in the descrition about comoplete tree we can optimize our solution, if height = 3 then number of node is 2 power 3 - 1 = 7 (which is 2h - 1)

var countNodes = function (root) {
  if (!root) return 0;
  const lh = getHeight(root, true);
  const rh = getHeight(root, false);

  // if left and right height is same means its a full tree then we can use 2h - 1 formula instead of traverse the tree
  if (lh === rh) {
    return Math.pow(2, lh) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};

var getHeight = function (node, dir) {
  let count = 0;

  while (node) {
    count++;

    if (dir) {
      node = node.left;
    } else {
      node = node.right;
    }
  }

  return count;
};

// OR

var getHeight = function (node, dir) {
  if (!node) return 0;
  return 1 + getHeight(dir ? node.left : node.right);
};
