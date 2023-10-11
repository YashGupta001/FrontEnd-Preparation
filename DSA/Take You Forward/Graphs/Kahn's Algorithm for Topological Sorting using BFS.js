/*

https://www.youtube.com/watch?v=73sneFXuTEg

https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/

https://practice.geeksforgeeks.org/problems/topological-sort/1

*/

// indegree: no of incoming edges to a node

class Solution {
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    const indegree = new Array(V).fill(0);
    const queue = [];
    const topo = [];

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
      topo.push(node);

      // traverse for all the adjacent nodes and remove the indegree for that node as that is done
      for (let neig of adj[node]) {
        indegree[neig]--;

        if (indegree[neig] === 0) {
          queue.push(neig);
        }
      }
    }

    return topo;
  }
}
