/*

Spiral Matrix

https://leetcode.com/problems/spiral-matrix/description/

https://www.youtube.com/watch?v=3Zv-s9UUrFM



Pattern:
right --> bottom --> left --> top

*/

// TC: O(n * m), SC: O(n * m)

var spiralOrder = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0,
    right = col - 1,
    top = 0,
    bottom = row - 1;
  const result = [];

  // Direction :right --> bottom --> left --> top

  while (top <= bottom && left <= right) {
    // left --> right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // top --> bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // right ---> left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // bottom --> top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
