/*

https://www.youtube.com/watch?v=BPlrALf1LDU

https://www.geeksforgeeks.org/detect-cycle-undirected-graph/


CODE NOT WORKING NEED TO CHECK AGAIN
*/

// adj [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]

function detect(src, adj, visited) {
  visited[src] = true;
  const queue = [];
  queue.push([src, -1]);
  while (queue.length) {
    const [node, parent] = queue.shift();
    for (let adjNode of adj[node]) {
      if (!visited[adjNode]) {
        visited[adjNode] = true;
        queue.push([adjNode, node]);
      } else if (parent !== adjNode) {
        // condition to see if node is already viisted not by me but someone else
        return true;
      }
    }
  }

  return false;
}

function isCycle(V, adj) {
  let visited = new Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (detect(i, adj, visited)) {
        return true;
      }
    }
  }

  return false;
}

// https://www.youtube.com/watch?v=zQ3zgFypzX4 : Using DFS

function detect(node, parent, visited, adj) {
  visited[node] = true;

  for (let adjNode of adj[node]) {
    if (!visited[adjNode]) {
      if (detect(adjNode, node, visited, adj)) {
        return true;
      }
    } else if (parent !== adjNode) {
      // condition to see if node is already viisted not by me but someone else
      return true;
    }
  }

  return false;
}

function isCycle(V, adj) {
  let visited = new Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (detect(i, -1, visited, adj)) {
        return true;
      }
    }
  }

  return false;
}
