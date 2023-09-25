/*

https://leetcode.com/problems/champagne-tower/?envType=daily-question&envId=2023-09-24

https://www.youtube.com/watch?v=LQ8TuG_QADM

*/

var champagneTower = function (poured, query_row, query_glass) {
  let prev_row = [poured]; // current flow

  for (let row = 1; row <= query_row; row++) {
    let curr_row = new Array(row + 1).fill(0);

    for (let i = 0; i < row; i++) {
      let extra = prev_row[i] - 1; // it will tell the extra
      if (extra > 0) {
        curr_row[i] += 0.5 * extra;
        curr_row[i + 1] += 0.5 * extra;
      }
    }

    prev_row = curr_row;
  }

  return Math.min(1, prev_row[query_glass]); // what if its greater than one so have a check of min
};
