/*

https://leetcode.com/problems/number-of-enclaves/

https://www.youtube.com/watch?v=rxKcepXQgU4

*/

var numEnclaves = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  const visited = new Array(n).fill(null).map(() => new Array(m).fill(0));
  const queue = [];
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // first row, first col, last row, last col
      if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
        if (grid[i][j] === 1) {
          queue.push([i, j]);
          visited[i][j] = 1;
        }
      }
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();

    for (let [r, c] of direction) {
      const nrow = row + r;
      const ncol = col + c;

      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        !visited[nrow][ncol] &&
        grid[nrow][ncol] === 1
      ) {
        queue.push([nrow, ncol]);
        visited[nrow][ncol] = 1;
      }
    }
  }

  let counter = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && visited[i][j] === 0) {
        counter++;
      }
    }
  }

  return counter;
};
