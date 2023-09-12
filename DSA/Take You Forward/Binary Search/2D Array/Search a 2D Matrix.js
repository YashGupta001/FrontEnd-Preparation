/*

https://leetcode.com/problems/search-a-2d-matrix/description/

https://www.youtube.com/watch?v=JXU4Akft7yk

*/

// BF: Traverse the entire matrix and see if the target is there or not , TC: O(n*m)

// Better: Binary Search, TC: (n * log(m))

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  for (let row = 0; row < m; row++) {
    if (matrix[row][0] <= target && target <= matrix[row][n - 1]) {
      return binarySearch(matrix[row], target);
    }
  }

  return false;
};

var binarySearch = function (array, target) {
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

// optimal: TC: O(log (n*m)) --> If we can flatten the 2d in 1d then we can achive it not in the code

var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  let low = 0;
  let high = n * m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};

// older leetcode optimal:

var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return false;
};
