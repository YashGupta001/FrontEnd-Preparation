/*

https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1

https://www.youtube.com/watch?v=Et9OCDNvJ78

https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/

*/

function topView(root) {
  //your code here
  const ans = [];
  if (!root) return ans;
  const map = new Map();
  const queue = [];
  root.level = 0;
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    const level = node.level;

    if (!map.has(level)) {
      map.set(level, node.data);
    }

    if (node.left) {
      node.left.level = level - 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.level = level + 1;
      queue.push(node.right);
    }
  }

  let arr = Array.from(map);
  arr.sort(function (a, b) {
    return a[0] - b[0];
  });

  for (let [key, value] of arr.values()) {
    ans.push(value);
  }
  return ans;
}
