/*

Find the row with maximum number of 1's

https://www.youtube.com/watch?v=SCz-1TtYxDI

Every row in the matrix is sorted in case if there are multiple max no in multiple rows return the one with smaller idx

const arr [[0,0,0,0],[0,0,1,1],[0,0,1,1],[0,0,0,0]]

*/

// TC: O(n * m), SC: O(1)

function countMaxOne(matrix) {
  let maxCount = -1;
  let rowIdx = -1;

  for (let row = 0; row < matrix.length; row++) {
    let countRow = 0;
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        countRow++;
      }
    }

    if (countRow > maxCount) {
      rowIdx = row;
      maxCount = countRow;
    }
  }

  return rowIdx;
}

countMaxOne([
  [0, 0, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0],
]);

// Optimal: When you need to optimise the N*M in 2D matrix see if the rows are sorted if yes then we can do something, as in above case we can optimise the col loop, we can user lowerBound for 1, or upper bound for 0, or firstOccurence for 1

// TC: O(n *  log m), SC: O(1)

function lowerBound(arr, x) {
  let lowerBound = arr.length;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= x) {
      lowerBound = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return lowerBound;
}

function countMaxOne(matrix) {
  let maxCount = 0;
  let rowIdx = -1;
  let n = matrix.length;
  let m = matrix[0].length;

  for (let row = 0; row < n; row++) {
    let countRow = m - lowerBound(matrix[row], 1);

    if (countRow > maxCount) {
      rowIdx = row;
      maxCount = countRow;
    }
  }

  return rowIdx;
}

countMaxOne([
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
]);
