/*

https://leetcode.com/problems/path-with-minimum-effort/?envType=daily-question&envId=2023-09-16

https://www.youtube.com/watch?v=0ytpZyiZFhA

dijkstra's algorithm

https://leetcode.com/problems/path-with-minimum-effort/solutions/4049557/97-67-optimal-dijkstra-with-heap/?envType=daily-question&envId=2023-09-16


Min Heap : PQ using queue

*/

var minimumEffortPath = function (heights) {
  const rows = heights.length,
    cols = heights[0].length;
  const dist = Array.from(Array(rows), () => Array(cols).fill(Infinity));
  const minHeap = [[0, 0, 0]]; // [effort, x, y]

  dist[0][0] = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (minHeap.length > 0) {
    const [effort, x, y] = minHeap.shift();

    if (effort > dist[x][y]) continue;

    if (x === rows - 1 && y === cols - 1) return effort;

    for (const [dx, dy] of directions) {
      const nx = x + dx,
        ny = y + dy;
      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
        const newEffort = Math.max(
          effort,
          Math.abs(heights[x][y] - heights[nx][ny])
        );
        if (newEffort < dist[nx][ny]) {
          dist[nx][ny] = newEffort;
          minHeap.push([newEffort, nx, ny]);
          minHeap.sort((a, b) => a[0] - b[0]);
        }
      }
    }
  }
  return -1;
};
