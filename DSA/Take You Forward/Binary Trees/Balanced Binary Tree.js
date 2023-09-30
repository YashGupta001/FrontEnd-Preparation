/*

https://leetcode.com/problems/balanced-binary-tree/description/

https://www.youtube.com/watch?v=Yt50Jfbd8Po

*/

// my solution

var isBalanced = function (root) {
  if (!root) return true;
  if (height(root) === -1) return false;
  return true;
};

var height = function (root) {
  if (!root) return 0;

  let lh = height(root.left);
  let rh = height(root.right);

  if (lh === -1 || rh === -1) return -1;
  if (Math.abs(lh - rh) > 1) return -1;

  return 1 + Math.max(lh, rh);
};

// with understanding

var isBalanced = function (root) {
  // If the tree is empty, we can say it’s balanced...
  if (root == null) return true;
  // Height Function will return -1, when it’s an unbalanced tree...
  if (Height(root) == -1) return false;
  return true;
};
// Create a function to return the “height” of a current subtree using recursion...
var Height = function (root) {
  // Base case...
  if (root == null) return 0;
  // Height of left subtree...
  let leftHeight = Height(root.left);
  // Height of height subtree...
  let rightHight = Height(root.right);
  // In case of left subtree or right subtree unbalanced, return -1...
  if (leftHeight == -1 || rightHight == -1) return -1;
  // If their heights differ by more than ‘1’, return -1...
  if (Math.abs(leftHeight - rightHight) > 1) return -1;
  // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
  return Math.max(leftHeight, rightHight) + 1;
};
