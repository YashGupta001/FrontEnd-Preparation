/*

https://www.youtube.com/watch?v=iTBaI90lpDQ

https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1


Topo sort only applicable for DAG but here we have a cyclic graph but will try to use the topo in this graph also using kahn algo

*/

class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    const indegree = new Array(V).fill(0);
    const queue = [];
    let counter = 0;

    // see how many nodes are coming to create our indegree
    for (let i = 0; i < V; i++) {
      for (let neig of adj[i]) {
        indegree[neig]++;
      }
    }

    // put the indegree of 0 nodes in the queue
    for (let i = 0; i < V; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }

    while (queue.length) {
      const node = queue.shift();
      counter++;

      // traverse for all the adjacent nodes and remove the indegree for that node as that is done
      for (let neig of adj[node]) {
        indegree[neig]--;

        if (indegree[neig] === 0) {
          queue.push(neig);
        }
      }
    }

    return counter !== V;
  }
}
