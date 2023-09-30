/*

https://leetcode.com/problems/same-tree/description/

https://www.youtube.com/watch?v=BhuvF_-PWS0

*/

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
