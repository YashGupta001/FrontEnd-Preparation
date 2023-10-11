/*

https://leetcode.com/problems/course-schedule/ 
https://leetcode.com/problems/course-schedule-ii/

https://www.youtube.com/watch?v=WAOfKpxYHR8

TOPOLOGICAL SORT: DAG



PART:
Detect if a graph has a cycle on directed graph (using DFS or BFS using topo)


*/

const canFinish = function (numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map(() => []);
  const inDigree = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
    inDigree[pair[0]]++;
  }

  const stack = [];

  for (let i = 0; i < inDigree.length; i++) {
    if (inDigree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;

  while (stack.length) {
    const current = stack.pop();
    count++;
    const adjVetexes = adjList[current];

    for (let i = 0; i < adjVetexes.length; i++) {
      const next = adjVetexes[i];
      inDigree[next]--;

      if (inDigree[next] === 0) {
        stack.push(next);
      }
    }
  }

  return count === numCourses;
};

// course scheduler II

var findOrder = function (numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);

  for (const [e, v] of prerequisites) {
    // build graph map
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    // build indegree array
    indegree[e]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length ? order : [];
};
