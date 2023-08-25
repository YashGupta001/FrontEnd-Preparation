/*

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363318#overview

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

*/

var searchRange = function (nums, target) {
  if (nums.length < 1) return [-1, -1];
  let firstPos = binarySearch(nums, 0, nums.length - 1, target);
  if (firstPos === -1) return [-1, -1];

  let startPos = firstPos;
  let endPos = firstPos;
  let temp1, temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }

  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }

  endPos = temp2;

  return [startPos, endPos];
};

function binarySearch(nums, left, right, target) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Awesome

var searchRange = function (nums, target) {
  const result = [-1, -1];

  const start = binarySearch(nums, target, true);
  const end = binarySearch(nums, target, false);

  result[0] = start;
  result[1] = end;
  return result;
};

function binarySearch(nums, target, findFirstIndex) {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      ans = mid;
      if (findFirstIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return ans;
}
