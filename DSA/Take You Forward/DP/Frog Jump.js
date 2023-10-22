/*

https://www.codingninjas.com/studio/problems/frog-jump_3621012?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

https://www.youtube.com/watch?v=EgG3jsGoPvQ

https://takeuforward.org/data-structure/dynamic-programming-frog-jump-dp-3/

*/

// Top Down
function solve(ind, height, dp) {
  if (ind === 0) return 0;
  if (dp[ind] !== -1) return dp[ind];
  let jumpTwo = Infinity;
  let jumpOne =
    solve(ind - 1, height, dp) + Math.abs(height[ind] - height[ind - 1]);
  if (ind > 1)
    jumpTwo =
      solve(ind - 2, height, dp) + Math.abs(height[ind] - height[ind - 2]);

  return (dp[ind] = Math.min(jumpOne, jumpTwo));
}

function main() {
  const height = [30, 10, 60, 10, 60, 50];
  const n = height.length;
  const dp = new Array(n).fill(-1);
  console.log(solve(n - 1, height, dp));
}

main();

// Bottom Up
function main() {
  const height = [30, 10, 60, 10, 60, 50];
  const n = height.length;
  const dp = new Array(n).fill(-1);
  dp[0] = 0;

  for (let ind = 1; ind < n; ind++) {
    let jumpTwo = Infinity;
    let jumpOne = dp[ind - 1] + Math.abs(height[ind] - height[ind - 1]);
    if (ind > 1)
      jumpTwo = dp[ind - 2] + Math.abs(height[ind] - height[ind - 2]);

    dp[ind] = Math.min(jumpOne, jumpTwo);
  }

  console.log(dp[n - 1]);
}

main();
