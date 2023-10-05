/*

https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/

*/

// BRUTE FORCE: Using 2Sum problem with inorder which gives sorted list

// TC: O(N) for inorder + O(N) for two pointer, SC: O(N)
var findTarget = function (root, k) {
  const inOrder = [];

  function dfsInOrder(node) {
    if (node) {
      dfsInOrder(node.left);
      inOrder.push(node.val);
      dfsInOrder(node.right);
    }
  }

  dfsInOrder(root);

  return twoSum(inOrder, k);
};

var twoSum = function (arr, k) {
  console.log("arr", arr);
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      start++;
    } else {
      end--;
    }
  }

  return false;
};

//

var findTarget = function (root, k) {
  if (!root) return false;
  const set = new Set();
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};
