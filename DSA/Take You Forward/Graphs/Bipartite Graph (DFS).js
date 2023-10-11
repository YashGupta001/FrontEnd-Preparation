/*

https://leetcode.com/problems/is-graph-bipartite/

https://www.youtube.com/watch?v=KG5YFfR0j8A


If its a old length cycle then it can not be bipartite graph

*/

//DFS

var dfs = function (node, startcolor, color, graph) {
  if (color[node] !== -1) {
    return true;
  }
  color[node] = startcolor;
  for (let nei of graph[node]) {
    if (color[nei] == -1) {
      if (dfs(nei, !startcolor, color, graph) == false) {
        return false;
      }
    } else if (color[nei] == color[node]) {
      return false;
    }
  }
  return true;
};

var isBipartite = function (graph) {
  let V = graph.length;
  let color = new Array(V).fill(-1);
  for (let i = 0; i < V; i++) {
    if (color[i] == -1) {
      if (dfs(i, 0, color, graph) == false) {
        return false;
      }
    }
  }
  return true;
};

//BFS

var isBipartite = function (graph) {
  //odd length cycle can never be bipartite
  let adj = new Map();
  let queue = [];
  let color = [];
  //mark colors
  for (i = 0; i < graph.length; i++) {
    color[i] = -1; //inital
  }
  color[0] = 1; //mark with inital color 0

  //make adj list
  for (let i = 0; i < graph.length; i++) {
    adj.set(i, graph[i]);
  }

  //done for connected components
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].length > 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    console.log(color);

    let curr = queue.shift();
    for (let nei of adj.get(curr)) {
      //if neigbourhood is not colored
      if (color[nei] === -1) {
        queue.push(nei);
        color[nei] = 1 - color[curr]; //mark oposite color
      }
      // is neigbourhood same color
      else if (color[nei] === color[curr]) {
        //not bipartitie
        return false;
      }
    }
  }
  return true;
};
