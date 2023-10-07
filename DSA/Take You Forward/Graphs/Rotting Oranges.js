/*

https://leetcode.com/problems/rotting-oranges/

https://www.youtube.com/watch?v=yf3oUhkvqA0


BFS ON GRAPH

*/

var orangesRotting = function (matrix) {
  if (!matrix.length) return -1;
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const FRESH = 1;
  const ROTTEN = 2;
  const queue = [];
  let freshOrange = 0;

  //get the fresh orange and the rooten orange in queue by sequential search
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === ROTTEN) {
        queue.push([row, col]);
      }
      if (matrix[row][col] === FRESH) {
        freshOrange++;
      }
    }
  }

  // DO BFS ON THE QUEUE AND TRACK THE MINUTE AND LEVEL
  let currentSize = queue.length;
  let minute = 0;

  while (queue.length) {
    if (currentSize === 0) {
      minute++;
      currentSize = queue.length;
    }

    const currentOrange = queue.shift();
    currentSize--;
    const currentRow = currentOrange[0];
    const currentCol = currentOrange[1];

    // loop through the direction

    for (let i = 0; i < direction.length; i++) {
      const currentDir = direction[i];
      const nextRow = currentRow + currentDir[0];
      const nextCol = currentCol + currentDir[1];

      if (
        nextRow < 0 ||
        nextRow >= matrix.length ||
        nextCol < 0 ||
        nextCol >= matrix[0].length
      ) {
        continue;
      }

      if (matrix[nextRow][nextCol] === FRESH) {
        freshOrange--;
        matrix[nextRow][nextCol] = ROTTEN;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  return freshOrange !== 0 ? -1 : minute;
};
