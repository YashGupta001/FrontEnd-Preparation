/*

https://leetcode.com/problems/surrounded-regions/

https://www.youtube.com/watch?v=BtdgAys4yMk

*/

var solve = function (board) {
  const n = board.length;
  const m = board[0].length;
  const visited = new Array(n).fill(null).map(() => new Array(m).fill(0));

  // traverse first row and last row
  for (let j = 0; j < m; j++) {
    // first row
    if (!visited[0][j] && board[0][j] === "O") {
      dfs(0, j, visited, board, n, m);
    }
    // last row
    if (!visited[n - 1][j] && board[n - 1][j] === "O") {
      dfs(n - 1, j, visited, board, n, m);
    }
  }

  // traverse first col and last col
  for (let i = 0; i < n; i++) {
    // first col
    if (!visited[i][0] && board[i][0] === "O") {
      dfs(i, 0, visited, board, n, m);
    }
    // last col
    if (!visited[i][m - 1] && board[i][m - 1] === "O") {
      dfs(i, m - 1, visited, board, n, m);
    }
  }

  // compare visited and board and convert the O to X if they are not visited

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

function dfs(row, col, visited, board, n, m) {
  visited[row][col] = 1;

  // check for top, right, bottom and left
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let [r, c] of direction) {
    const nrow = row + r;
    const ncol = col + c;

    if (
      nrow >= 0 &&
      nrow < n &&
      ncol >= 0 &&
      ncol < m &&
      !visited[nrow][ncol] &&
      board[nrow][ncol] === "O"
    ) {
      dfs(nrow, ncol, visited, board, n, m);
    }
  }
}
