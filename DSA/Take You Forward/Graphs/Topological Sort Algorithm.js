/*

https://www.youtube.com/watch?v=5lZ0iJMrUMk


It only works on DAG (Directed Acyclic Graph) means any directed graph which does not have a cycle

https://practice.geeksforgeeks.org/problems/topological-sort/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article


*/

// Using DFS

function topological(graph) {
  const visited = new Array(graph.length).fill(false);
  const stack = [];

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited, stack);
    }
  }

  return stack.reverse();
}

function dfs(start, graph, visited, stack) {
  visited[start] = true;

  // need to check how will get the data in case of directed
  for (let neig of graph[start]) {
    if (!visited[neig]) {
      dfs(neig, graph, visited, stack);
    }
  }

  stack.push(start);
}

class Solution {
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    const visited = new Array(V).fill(false);
    const stack = [];

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        this.dfs(i, visited, stack, adj);
      }
    }
    return stack.reverse();
  }

  dfs(start, visited, stack, adj) {
    visited[start] = true;
    for (let neig of adj[start]) {
      if (!visited[neig]) {
        this.dfs(neig, visited, stack, adj);
      }
    }

    stack.push(start);
  }
}
