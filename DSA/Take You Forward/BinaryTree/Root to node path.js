/*



https://www.youtube.com/watch?v=fmflMqVOC7k

Root to node path: https://www.geeksforgeeks.org/print-path-root-given-node-binary-tree/

*/

function getPath(node, target, ans) {
  if (!node) return false;
  ans.push(node.val);

  if (node.val === target) return true;

  if (getPath(node.left, target, ans) || getPath(node.right, target, ans)) {
    return true;
  }
  ans.pop();
  return false;
}

function rootToNode(root, k) {
  const ans = [];
  if (!root) return ans;
  getPath(root, k, ans);
  return ans;
}
