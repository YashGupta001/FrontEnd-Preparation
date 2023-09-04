/*

https://leetcode.com/problems/merge-intervals/

https://www.youtube.com/watch?v=IexN60k62jo

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].




*/

// Brute force: TC: O(2n + nlogn) (as we are touching each element twice), SC: O(n) to return the answer

var merge = function (intervals) {
  const n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  const interval = [];

  for (i = 0; i < n; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    if (interval.length !== 0 && end <= interval[interval.length - 1][1]) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (intervals[j][0] <= end) {
        end = Math.max(end, intervals[j][1]);
      } else {
        break;
      }
    }
    interval.push([start, end]);
  }

  return interval;
};

// optimal: TC: O(nlogn + n), SC: O(n) to return the answer

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    if (result.length === 0 || intervals[i][0] > result[result.length - 1][1]) {
      result.push(intervals[i]);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        intervals[i][1]
      );
    }
  }
  return result;
};

// my solution

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
