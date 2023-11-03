/*

https://leetcode.com/problems/triangle/

https://www.youtube.com/watch?v=SrP-PiLSYC0

https://takeuforward.org/data-structure/minimum-path-sum-in-triangular-grid-dp-11/

*/

// TIME LIMIT EXCEED

var minimumTotal = function (triangle) {
  const n = triangle.length;

  function helper(i, j) {
    if (i === n - 1) {
      return triangle[n - 1][j];
    }
    const down = triangle[i][j] + helper(i + 1, j);
    const diagnal = triangle[i][j] + helper(i + 1, j + 1);
    return Math.min(down, diagnal);
  }

  return helper(0, 0);
};

/*

MEMOIZATION

Complexity Analysis
Time Complexity: O(N*N)

Reason: There are two nested loops

Space Complexity: O(N*N)

Reason: We are using an external array of size ‘N*N’. The stack space will be eliminated.


*/

var minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(-1));

  function helper(i, j) {
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    if (i === n - 1) {
      return triangle[n - 1][j];
    }
    const down = triangle[i][j] + helper(i + 1, j);
    const diagonal = triangle[i][j] + helper(i + 1, j + 1);
    dp[i][j] = Math.min(down, diagonal);
    return dp[i][j];
  }

  return helper(0, 0);
};

/*

TABULATION

Complexity Analysis
Time Complexity: O(N*N)

Reason: There are two nested loops

Space Complexity: O(N*N)

Reason: We are using an external array of size ‘N*N’. The stack space will be eliminated.

*/

var minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(-1));

  for (let j = 0; j < n; j++) {
    dp[n - 1][j] = triangle[n - 1][j];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      const down = triangle[i][j] + dp[i + 1][j];
      const diagonal = triangle[i][j] + dp[i + 1][j + 1];
      dp[i][j] = Math.min(down, diagonal);
    }
  }

  return dp[0][0];
};
