/*

https://leetcode.com/problems/merge-intervals/

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

*/

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let current = intervals[0];
  let start = current[0];
  let end = current[1];
  const result = [];

  for (let i = 1; i < intervals.length; i++) {
    current = intervals[i];

    if (end >= current[0]) {
      end = Math.max(end, current[1]);
    } else {
      result.push([start, end]);
      start = current[0];
      end = current[1];
    }
  }
  result.push([start, end]);
  return result;
};
