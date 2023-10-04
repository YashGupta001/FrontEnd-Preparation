/*

https://leetcode.com/problems/kth-smallest-element-in-a-bst/

https://www.youtube.com/watch?v=9TJYWh0adfk

*/

// BRUTE FORCE: DFS get all nodes, sort them and give as per the k, TC: O(N) *O(nlogn) and SC: O(n)

// optimal : The DFS Inorder of any BST is always sorted (IMP)

var kthSmallest = function (root, k) {
  if (!root) return null;
  let count = 0;
  let ans = -1;

  function dfsInOrder(node) {
    if (!node) return;
    dfsInOrder(node.left);
    count++;
    if (count === k) {
      ans = node.val;
      return;
    }
    dfsInOrder(node.right);
  }

  dfsInOrder(root);
  return ans;
};
