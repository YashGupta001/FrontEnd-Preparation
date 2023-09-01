/*

https://leetcode.com/problems/non-overlapping-intervals/

https://www.youtube.com/watch?v=nONCGxWoUfM


Greedy Approach

*/

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let remove = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    // not overlappin
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      remove++;
      // which one need to be removed
      prevEnd = Math.min(end, prevEnd);
    }
  }

  return remove;
};
