/*

Binary Tree Postorder Traversal
https://leetcode.com/problems/binary-tree-postorder-traversal/

*/

var postorderTraversal = function (root) {
  const result = [];
  dfs(root, result);
  return result;
};

var dfs = function (root, result) {
  if (root) {
    dfs(root.left, result);
    dfs(root.right, result);
    result.push(root.val);
  }
};

/*

Binary Tree Preorder Traversal
https://leetcode.com/problems/binary-tree-preorder-traversal/

*/

// Recursive Preorder Traversal

var preorderTraversal = function (root) {
  const result = [];
  dfs(root, result);
  return result;
};

var dfs = function (root, result) {
  if (root) {
    result.push(root.val);
    dfs(root.left, result);
    dfs(root.right, result);
  }
};

// Iterative Preorder Traversal

var preorderTraversal = function (root) {
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      result.push(node.val);
      stack.push(node.right); // done as we are using stack so need left on the top for the pre order
      stack.push(node.left);
    }
  }

  return result;
};

/*

Binary Tree Inorder Traversal
https://leetcode.com/problems/binary-tree-inorder-traversal/

*/

// Recursive

var inorderTraversal = function (root) {
  let result = [];
  dfs(root, result);
  return result;
};

function dfs(root, result) {
  if (root) {
    dfs(root.left, result);
    result.push(root.val);
    dfs(root.right, result);
  }
}

// Iterative

var inorderTraversal = function (root) {
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      result.push(node.val);
      stack.push(node.right); // done as we are using stack so need left on the top for the pre order
      stack.push(node.left);
    }
  }

  return result;
};
