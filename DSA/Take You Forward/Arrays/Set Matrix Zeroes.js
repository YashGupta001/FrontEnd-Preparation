/*

Set Matrix Zeroes

https://leetcode.com/problems/set-matrix-zeroes/


https://www.youtube.com/watch?v=N0MgLvceX7M


*/

// brute force: loop and mark the row and col as -1 expect 0, then make another loop and convert - 1 to 0

// TC: O(n*m) * O(n + m) +  O(n*m) --> O(n3)
var setZeroes = function (matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        // mark colum
        markCol(c, matrix);
        // mark row
        markRow(r, matrix);
      }
    }
  }

  // Turn all -1 to 0

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === false) {
        matrix[r][c] = 0;
      }
    }
  }
};

var markRow = function (i, matrix) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = false;
    }
  }
};

var markCol = function (j, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = false;
    }
  }
};

// Optimal TC: O(m*n) --> n2, SC: O(1)

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
