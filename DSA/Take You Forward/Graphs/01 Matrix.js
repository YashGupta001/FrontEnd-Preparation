/*

https://leetcode.com/problems/01-matrix/

https://www.youtube.com/watch?v=edXdVwkYHF8

issues:

new Array(mat.length).fill(
    new Array(mat[0].length).fill(false)
  );

*/

var updateMatrix = function (mat) {
  const visited = new Array(mat.length)
    .fill(null)
    .map(() => new Array(mat[0].length).fill(false));
  const distance = new Array(mat.length)
    .fill(null)
    .map(() => new Array(mat[0].length).fill(0));
  const queue = [];
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 0) {
        visited[row][col] = true;
        queue.push([row, col, 0]);
      }
    }
  }

  while (queue.length) {
    const [row, col, steps] = queue.shift();
    distance[row][col] = steps;

    for (let [r, c] of directions) {
      const newRow = row + r;
      const newCol = col + c;

      if (
        newRow >= 0 &&
        newRow < mat.length &&
        newCol >= 0 &&
        newCol < mat[0].length &&
        !visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }

  return distance;
};
