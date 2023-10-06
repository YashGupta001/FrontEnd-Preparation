/*

https://www.youtube.com/watch?v=M3_pLsDdeuU

https://www.youtube.com/watch?v=3oI-34aPMWM


https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344878#overview
*/

// For undirected graph (adjacency list)
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    // handle the edge case if v1 or v2 is valid node or not
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
  }
  // Traversal on graph https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344882#overview

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      // console.log("adjancy", this.adjacencyList[vertex]);  issue beacuse of how this works in js so keep it outside
      // console.log("adjancy with this fix", adjacencyList[vertex]);

      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }

    dfs(start);
    return result;
  }

  deepthFirstIterative(start) {
    const result = [];
    const visited = {};
    const stack = [start];
    visited[start] = true;
    let currVertex;

    while (stack.length) {
      currVertex = stack.pop();
      result.push(currVertex);
      this.adjacencyList[currVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  breadthFirstSearch(start) {
    const result = [];
    const visited = {};
    const queue = [start];
    visited[start] = true;
    let currVertex;

    while (queue.length) {
      currVertex = queue.shift();
      result.push(currVertex);
      this.adjacencyList[currVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

let fisrtGraph = new Graph();
fisrtGraph.addVertex("A");
fisrtGraph.addVertex("B");
fisrtGraph.addVertex("C");
fisrtGraph.addVertex("D");
fisrtGraph.addVertex("E");
fisrtGraph.addVertex("F");

fisrtGraph.addEdge("A", "B");
fisrtGraph.addEdge("A", "C");
fisrtGraph.addEdge("B", "D");
fisrtGraph.addEdge("C", "E");
fisrtGraph.addEdge("D", "E");
fisrtGraph.addEdge("D", "F");
fisrtGraph.addEdge("E", "F");

// fisrtGraph.depthFirstRecursive("A");
// fisrtGraph.deepthFirstIterative("A");
fisrtGraph.breadthFirstSearch("A");
