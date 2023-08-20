/*


https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

https://www.youtube.com/watch?v=CB25fIxE8P8


https://takeuforward.org/data-structure/rat-in-a-maze/


Right
Left
Up
Down

Lexicographically --> DLRU 
so first we go down, if there is not possibility then will try to go left and if there is no possibility then will go to right and same for right then go to up

D -> r + 1 
U -> r - 1
R -> c + 1
L -> c - 1


Backtracking + recursion

return the result in Lexicographically order so thats the reason we are going with  DLRU order


Time Complexity: O(4^(m*n)), because on every cell we need to try 4 different directions.

Space Complexity:  O(m*n), Maximum Depth of the recursion tree(auxiliary space).


*/

function findPath(m) {
  const result = [];
  const n = m.length;
  const visited = new Array(n).fill(null).map(() => new Array(n).fill(0));

  if (m[0][0] === 1) {
    solve(0, 0, m, n, result, "", visited);
  }

  return result;
}

function solve(r, c, matrix, n, result, move, visited) {
  if (r === n - 1 && c === n - 1) {
    result.push(move);
    return;
  }

  //checking if value in boundary,its not visisted also there is no wall for all direction

  //downwards
  if (r + 1 < n && !visited[r + 1][c] && matrix[r + 1][c] === 1) {
    visited[r][c] = 1;
    solve(r + 1, c, matrix, n, result, move + "D", visited);
    visited[r][c] = 0;
  }

  //left
  if (c - 1 >= 0 && !visited[r][c - 1] && matrix[r][c - 1] === 1) {
    visited[r][c] = 1;
    solve(r, c - 1, matrix, n, result, move + "L", visited);
    visited[r][c] = 0;
  }

  // right
  if (c + 1 < n && !visited[r][c + 1] && matrix[r][c + 1] === 1) {
    visited[r][c] = 1;
    solve(r, c + 1, matrix, n, result, move + "R", visited);
    visited[r][c] = 0;
  }

  //up
  if (r - 1 >= 0 && !visited[r - 1][c] && matrix[r - 1][c] === 1) {
    visited[r][c] = 1;
    solve(r - 1, c, matrix, n, result, move + "U", visited);
    visited[r][c] = 0;
  }
}

const arr = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
console.log(findPath(arr));
