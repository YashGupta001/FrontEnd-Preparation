/*

https://leetcode.com/problems/minimum-falling-path-sum/

https://www.youtube.com/watch?v=N_aJ5qQbYA0

https://takeuforward.org/data-structure/minimum-maximum-falling-path-sum-dp-12/

*/

// TIME LIMIT EXCEED

var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  let min = Infinity;

  function helper(row, col) {
    if (col < 0 || col >= n) {
      return Infinity;
    }
    if (row === 0) return matrix[row][col];

    let up = matrix[row][col] + helper(row - 1, col);
    let leftDiagonal = matrix[row][col] + helper(row - 1, col - 1);
    let rightDiagonal = matrix[row][col] + helper(row - 1, col + 1);
    return Math.min(up, leftDiagonal, rightDiagonal);
  }

  for (let j = 0; j < n; j++) {
    let ans = helper(n - 1, j);
    min = Math.min(min, ans);
  }

  return min;
};

/*

MEMOIZATION


Time Complexity: O(N*N)

Reason: At max, there will be M*N calls of recursion to solve a new problem,

Space Complexity: O(N) + O(N*M)

Reason: We are using a recursion stack space: O(N), where N is the path length and an external DP Array of size ‘N*M’.

*/

var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(-1));
  let min = Infinity;

  function helper(row, col) {
    if (col < 0 || col >= n) {
      return Infinity;
    }
    if (row === 0) return matrix[row][col];

    if (dp[row][col] !== -1) {
      return dp[row][col];
    }

    let up = matrix[row][col] + helper(row - 1, col);
    let leftDiagonal = matrix[row][col] + helper(row - 1, col - 1);
    let rightDiagonal = matrix[row][col] + helper(row - 1, col + 1);
    dp[row][col] = Math.min(up, leftDiagonal, rightDiagonal);
    return dp[row][col];
  }

  for (let j = 0; j < n; j++) {
    let ans = helper(n - 1, j);
    min = Math.min(min, ans);
  }

  return min;
};

/*

TABULATION:

Time Complexity: O(N*M)

Reason: There are two nested loops

Space Complexity: O(N*M)

Reason: We are using an external array of size ‘N*M’. The stack space will be eliminated.

*/

var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  const dp = new Array(n).fill().map(() => new Array(m).fill(0));

  for (let j = 0; j < m; j++) {
    dp[0][j] = matrix[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const up = matrix[i][j] + dp[i - 1][j];

      let leftDiagonal = matrix[i][j];
      if (j - 1 >= 0) leftDiagonal += dp[i - 1][j - 1];
      else leftDiagonal += Infinity;

      let rightDiagonal = matrix[i][j];
      if (j + 1 < m) rightDiagonal += dp[i - 1][j + 1];
      else rightDiagonal += Infinity;

      dp[i][j] = Math.min(up, leftDiagonal, rightDiagonal);
    }
  }

  let min = Infinity;
  for (let j = 0; j < m; j++) {
    min = Math.min(min, dp[n - 1][j]);
  }

  return min;
};
