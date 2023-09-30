/*

https://leetcode.com/problems/diameter-of-binary-tree/description/

https://www.youtube.com/watch?v=Rezetez59Nk

*/

// ITS A DFS

var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  height(root, diameter);
  return diameter;

  function height(node) {
    if (!node) return 0;

    const left = height(node.left);
    const right = height(node.right);

    // update diameter at every node
    diameter = Math.max(diameter, left + right);

    // update the largest number of edge so far
    return 1 + Math.max(left, right);
  }
};

//

var diameterOfBinaryTree = function (root) {
  let diameter = { max: 0 };
  height(root, diameter);
  return diameter.max;
};

function height(node, diameter) {
  if (!node) return 0;

  const left = height(node.left, diameter);
  const right = height(node.right, diameter);

  // update diameter at every node
  diameter.max = Math.max(diameter.max, left + right);

  // update the largest number of edge so far
  return 1 + Math.max(left, right);
}
