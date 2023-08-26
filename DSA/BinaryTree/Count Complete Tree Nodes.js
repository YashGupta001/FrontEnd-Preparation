/*

https://leetcode.com/problems/count-complete-tree-nodes/description/

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363388#overview

Count Complete Tree Nodes

A full tree is one where every tree node has either zero children or two children

A complete tree is one where every level is completely fill

A tree can be full and complete both

*/

// O(n) by BFS or DFS

var countNodes = function (root) {
  if (!root) return 0;
  let count = 0;

  function dfs(node) {
    if (!node) return;
    count++;
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return count;
};

// less than O(n)
function getHieght(root) {
  let height = 0;
  while (root.left) {
    height++;
    root = root.left;
  }
  return height;
}

const nodeExists = function (idxToFind, height, node) {
  let left = 0,
    right = Math.pow(2, height) - 1,
    count = 0;

  while (count < height) {
    const midOfNode = Math.ceil((left + right) / 2);

    if (idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    count++;
  }
  return node !== null;
};

var countNodes = function (root) {
  if (!root) return 0;
  const height = getHieght(root);
  if (height === 0) return 1;
  const upperCount = Math.pow(2, height) - 1;
  let left = 0,
    right = upperCount;

  while (left < right) {
    let indexToFind = Math.ceil((left + right) / 2);
    if (nodeExists(indexToFind, height, root)) {
      left = indexToFind;
    } else {
      right = indexToFind - 1;
    }
  }
  return upperCount + left + 1;
};
