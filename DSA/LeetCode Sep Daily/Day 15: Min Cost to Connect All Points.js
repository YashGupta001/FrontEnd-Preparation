/*

https://leetcode.com/problems/min-cost-to-connect-all-points/?envType=daily-question&envId=2023-09-15

https://www.youtube.com/watch?v=f7JOBJIC-NA

MST: Minimum Spanning Tree

PRIMS's Algorithm 

https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4046136/video-improved-prim-s-algorithm-solution-python-javascript-java-and-c/?envType=daily-question&envId=2023-09-15


TC: O(n2 * logn) --> n2 is the number of edges that we have where n the number of points and logn comes from PRIMS


*/

var minCostConnectPoints = function (points) {
  const n = points.length;
  let minCost = 0;
  const visited = new Array(n).fill(false);
  const distances = new Array(n).fill(Infinity);

  distances[0] = 0; // Start from the first point

  for (let i = 0; i < n; i++) {
    let u = getMinDistanceVertex(visited, distances);
    visited[u] = true;
    minCost += distances[u];

    for (let v = 0; v < n; v++) {
      if (!visited[v]) {
        const dist =
          Math.abs(points[u][0] - points[v][0]) +
          Math.abs(points[u][1] - points[v][1]);
        distances[v] = Math.min(distances[v], dist);
      }
    }
  }

  return minCost;
};

var getMinDistanceVertex = function (visited, distances) {
  let minDist = Infinity;
  let minVertex = -1;

  for (let i = 0; i < distances.length; i++) {
    if (!visited[i] && distances[i] < minDist) {
      minDist = distances[i];
      minVertex = i;
    }
  }

  return minVertex;
};
