/*

https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/?envType=daily-question&envId=2023-09-18

https://www.youtube.com/watch?v=_fVVzsIqGvE

*/

var kWeakestRows = function (mat, k) {
  let weakestRows = [];

  for (let i = 0; i < mat.length; i++) {
    weakestRows.push([mat[i].lastIndexOf(1) + 1, i]);
  }

  weakestRows = weakestRows.sort((a, b) => a[0] - b[0]).map((e) => e[1]);

  return weakestRows.slice(0, k);
};
