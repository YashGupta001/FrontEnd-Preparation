/*

https://leetcode.com/problems/flood-fill/description/

https://www.youtube.com/watch?v=C-2_uSRli8o


BFS but will go with DFS 

*/

var floodFill = function (image, sr, sc, color) {
  const initialColor = image[sr][sc];
  let ans = [...image];
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  dfs(sr, sc);
  return ans;

  function dfs(row, col) {
    ans[row][col] = color;
    for (let i = 0; i < dir.length; i++) {
      const [currRow, currCol] = dir[i];
      const nRow = row + currRow;
      const nCol = col + currCol;

      if (
        nRow >= 0 &&
        nRow < image.length &&
        nCol >= 0 &&
        nCol < image[0].length &&
        image[nRow][nCol] === initialColor &&
        ans[nRow][nCol] !== color
      ) {
        dfs(nRow, nCol);
      }
    }
  }
};
