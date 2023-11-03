/*

https://leetcode.com/problems/unique-paths/?envType=daily-question&envId=2023-09-03

https://www.youtube.com/watch?v=sdE0A2Oxofw

https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/


*/

// TIME LIMIT EXCEED: TC O(2 POWER M X N) exponential, SC: O(path length) which is ((m - 1) + (n - 1))

var uniquePaths = function (m, n) {
  function helper(row, col) {
    if (row === 0 && col === 0) return 1;
    if (row < 0 || col < 0) return 0;
    const up = helper(row - 1, col);
    const down = helper(row, col - 1);
    return up + down;
  }
  return helper(m - 1, n - 1);
};

/* MEMOIZATION

Time Complexity: O(M*N)

Reason: At max, there will be M*N calls of recursion.

Space Complexity: O((N-1)+(M-1)) + O(M*N)

Reason: We are using a recursion stack space: O((N-1)+(M-1)), here (N-1)+(M-1) is the path length and an external DP Array of size ‘M*N’.

*/

function uniquePathsUtil(i, j, dp) {
  if (i === 0 && j === 0) {
    return 1;
  }

  if (i < 0 || j < 0) {
    return 0;
  }

  if (dp[i][j] !== -1) {
    return dp[i][j];
  }

  const up = uniquePathsUtil(i - 1, j, dp);
  const left = uniquePathsUtil(i, j - 1, dp);

  dp[i][j] = up + left;
  return dp[i][j];
}

function uniquePaths(m, n) {
  const dp = Array.from(Array(m), () => Array(n).fill(-1));

  return uniquePathsUtil(m - 1, n - 1, dp);
}

/*

TABULATION:

Time Complexity: O(M*N)

Reason: There are two nested loops

Space Complexity: O(M*N)

Reason: We are using an external array of size ‘M*N’’.

*/

function uniquePathsUtil(m, n, dp) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
        continue;
      }

      let up = 0;
      let left = 0;

      if (i > 0) {
        up = dp[i - 1][j];
      }

      if (j > 0) {
        left = dp[i][j - 1];
      }
      dp[i][j] = up + left;
    }
  }

  // The result is stored in the bottom-right cell of the grid (m-1, n-1).
  return dp[m - 1][n - 1];
}

function uniquePaths(m, n) {
  const dp = Array.from(Array(m), () => Array(n).fill(-1));
  return uniquePathsUtil(m, n, dp);
}
