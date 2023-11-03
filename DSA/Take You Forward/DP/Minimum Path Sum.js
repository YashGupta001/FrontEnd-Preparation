/*

https://leetcode.com/problems/minimum-path-sum/

https://www.youtube.com/watch?v=_rgTlyky1uQ

https://takeuforward.org/data-structure/minimum-path-sum-in-a-grid-dp-10/

*/

// TIME LIMIT EXCEED

var minPathSum = function (grid) {
  function helper(row, col) {
    if (row === 0 && col === 0) return grid[row][col];
    if (row < 0 || col < 0) return Number.MAX_SAFE_INTEGER;
    const up = grid[row][col] + helper(row - 1, col);
    const left = grid[row][col] + helper(row, col - 1);
    return Math.min(up, left);
  }

  return helper(grid.length - 1, grid[0].length - 1);
};

/* MEMOIZATION


Complexity Analysis
Time Complexity: O(N*M)

Reason: At max, there will be N*M calls of recursion.

Space Complexity: O((M-1)+(N-1)) + O(N*M)

Reason: We are using a recursion stack space: O((M-1)+(N-1)), here (M-1)+(N-1) is the path length and an external DP Array of size ‘N*M’.

*/

var minPathSum = function (grid) {
  const dp = {};
  function helper(row, col) {
    const key = `${row}_${col}`;
    if (row === 0 && col === 0) return grid[row][col];
    if (row < 0 || col < 0) return Number.MAX_SAFE_INTEGER;
    if (dp[key]) return dp[key];
    const up = grid[row][col] + helper(row - 1, col);
    const left = grid[row][col] + helper(row, col - 1);
    return (dp[key] = Math.min(up, left));
  }

  return helper(grid.length - 1, grid[0].length - 1);
};

/*

TABULATION

Time Complexity: O(N*M)

Reason: There are two nested loops

Space Complexity: O(N*M)

Reason: We are using an external array of size ‘N*M’’.

*/

var minPathSum = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const dp = new Array(n).fill(null).map(() => new Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else {
        let up = grid[i][j];
        if (i > 0) up += dp[i - 1][j];
        else up += Infinity;

        let left = grid[i][j];
        if (j > 0) left += dp[i][j - 1];
        else left += Infinity;

        dp[i][j] = Math.min(up, left);
      }
    }
  }

  return dp[n - 1][m - 1];
};
