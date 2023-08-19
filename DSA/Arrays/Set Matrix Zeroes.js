/*

Set Matrix Zeroes

https://leetcode.com/problems/set-matrix-zeroes/


*/

var setZeroes = function (matrix) {
  const zerosPos = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        zerosPos.push([r, c]);
      }
    }
  }

  for (let address of zerosPos) {
    let row = address[0];
    let col = address[1];
    setZero(row, col, matrix);
  }
};

var setZero = function (row, col, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }

  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
};
