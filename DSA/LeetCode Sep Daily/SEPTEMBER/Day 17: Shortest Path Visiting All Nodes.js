/*

https://leetcode.com/problems/shortest-path-visiting-all-nodes/?envType=daily-question&envId=2023-09-17

https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/4053538/98-92-detailed-explanation-with-example-bfs-method-easy-bitmask-method/?envType=daily-question&envId=2023-09-17

floyd warshall algorithm

*/

function Node(node, mask, cost) {
  this.node = node;
  this.mask = mask;
  this.cost = cost;
}

var shortestPathLength = function (graph) {
  const n = graph.length;
  const all = (1 << n) - 1;
  const vis = new Set();
  const queue = [];

  for (let i = 0; i < n; i++) {
    const maskValue = 1 << i;
    const thisNode = new Node(i, maskValue, 1);
    queue.push(thisNode);
    vis.add(`${i}-${maskValue}`);
  }

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.mask === all) {
      return curr.cost - 1;
    }

    for (const adj of graph[curr.node]) {
      let bothVisitedMask = curr.mask | (1 << adj);
      const thisNode = new Node(adj, bothVisitedMask, curr.cost + 1);

      if (!vis.has(`${adj}-${bothVisitedMask}`)) {
        vis.add(`${adj}-${bothVisitedMask}`);
        queue.push(thisNode);
      }
    }
  }

  return -1;
};
