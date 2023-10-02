/*

https://www.youtube.com/watch?v=0FtVY6I4pB8

https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1

https://www.geeksforgeeks.org/bottom-view-binary-tree/

*/

function bottomView(root) {
  //your code here
  const ans = [];
  if (!root) return ans;

  const map = {};
  const queue = [];
  root.level = 0;
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    const level = node.level;

    map[level] = node.data;

    if (node.left) {
      node.left.level = level - 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.level = level + 1;
      queue.push(node.right);
    }
  }

  for (const [key, value] of Object.entries(map).sort((a, b) => a[0] - b[0])) {
    ans.push(value);
  }
  return ans;
}
