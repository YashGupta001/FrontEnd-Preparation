// Find the shortest path from A to E

// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11255090#overview

// Naive PQ  TC: O(n logn) because of sort as we are not using Binary Heap way
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Weightgraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    // build up initial state

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // console.log("p queue", nodes);
    // console.log("previous", previous); // {A: null, B: null, C: null, D: null, E: null, …}
    // console.log("dis", distances); // {A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, …}

    // as long as there is something to visit

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // we are done and need to build path
        // console.log("distances", distances);
        // console.log("previous", previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          //   console.log(neighbour);
          //   console.log(this.adjacencyList);

          // find neighbouring node
          const nextNode = this.adjacencyList[smallest][neighbour];
          //   console.log("nextNode", nextNode);

          // calculate new distance to neighbouring node
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

const graph = new Weightgraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.dijkstra("A", "E");
graph.dijkstra("A", "C");
