/*


https://www.youtube.com/watch?v=9twcmtQj4DU

https://www.geeksforgeeks.org/detect-cycle-in-a-graph/

https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1


*/

class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    const visited = new Array(V).fill(false);
    const pathVisited = new Array(V).fill(false);

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (this.dfs(i, visited, pathVisited, adj)) {
          return 1;
        }
      }
    }

    return 0;
  }

  dfs(node, visited, pathVisited, adj) {
    visited[node] = true;
    pathVisited[node] = true;

    for (let neigh of adj[node]) {
      // when node is not visited
      if (!visited[neigh]) {
        if (this.dfs(neigh, visited, pathVisited, adj)) {
          return true;
        }
      } else if (pathVisited[neigh]) {
        // when node is visited so checking if they are coming from same path or different
        return true;
      }
    }

    pathVisited[node] = false;
    return false;
  }
}
