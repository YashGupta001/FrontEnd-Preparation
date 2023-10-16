/*

https://leetcode.com/problems/find-eventual-safe-states/

https://www.youtube.com/watch?v=2gtg3VsDGyc


The terminal nodes will always have indegree 0

reverse all the nodes edges
start with topo sort (get all the ndoes with indegree 0)
removal of edges on neighbours on adjancent node


*/

var eventualSafeNodes = function (graph) {
  let revGraph = {};
  let n = graph.length;
  let inDegree = new Array(n).fill(0);
  /* Make reverse graph */
  for (let i = 0; i < n; i++) {
    for (let x of graph[i]) {
      if (!revGraph[x]) {
        revGraph[x] = [];
      }
      revGraph[x].push(i);
      inDegree[i]++;
    }
  }
  /* Check if 0 indegree and add to queue */
  let queue = [];
  let result = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] == 0) {
      queue.push(i);
    }
  }
  /* Apply BFS */
  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current);
    let neighbour = revGraph[current];
    if (neighbour) {
      for (let x of neighbour) {
        inDegree[x]--;
        if (inDegree[x] == 0) {
          queue.push(x);
        }
      }
    }
  }
  return result.sort((a, b) => a - b);
};

// DFS

var eventualSafeNodes = function (graph) {
  const status = Array(graph.length);

  const dfs = (i) => {
    if (status[i] !== undefined) return status[i]; // We know it's safe or not
    if (!graph[i].length) return (status[i] = true); // Terminal node

    status[i] = false; // Mark as visiting
    for (const j of graph[i]) if (!dfs(j)) return false;
    return (status[i] = true); // Mark as safe
  };

  const safe = [];
  // Run dfs for all nodes and return safe nodes only
  for (const i in graph) if (dfs(i)) safe.push(i);
  return safe;
};
