/*

https://leetcode.com/problems/search-a-2d-matrix-ii/description/

https://www.youtube.com/watch?v=9ZbB397jU4k

*/

// BF: Traverse the entire matrix and see if the target is there or not , TC: O(n*m)

// Better:  TC: (n * log(m))

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  for (let row = 0; row < m; row++) {
    if (matrix[row][0] <= target && target <= matrix[row][n - 1]) {
      if (binarySearch(matrix[row], target)) {
        return true;
      }
    }
  }

  return false;
};

var binarySearch = function (array, target) {
  console.log("array", array);
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};

// Optimal: TC: O(n + m)

var searchMatrix = function (matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};
