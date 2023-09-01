/*

Rotate Image
https://leetcode.com/problems/rotate-image/description/

https://www.youtube.com/watch?v=Y72QeX0Efxw

*/

// Brute force

var rotate = function (matrix) {
  const n = matrix.length;
  const rotated = new Array(n)
    .fill(null)
    .map(() => new Array(matrix[0].length).fill(0));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      // first row last col
      rotated[c][n - r - 1] = matrix[r][c];
    }
  }

  // Copy rotated matrix back to the original matrix
  for (let i = 0; i < n; i++) {
    matrix[i] = rotated[i].slice();
  }
};

// Optimal

var rotate = function (matrix) {
  // Transpose the Matrix

  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  // Reverse the row
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
};
