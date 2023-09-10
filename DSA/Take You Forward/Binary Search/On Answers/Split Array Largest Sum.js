/*

min of all max ---> min(max)

https://leetcode.com/problems/split-array-largest-sum/

https://www.youtube.com/watch?v=thUd_WJn6wk


same as PainterPartition and book allocation

*/

// TC: O(log max * n)

var splitArray = function (nums, k) {
  if (k > nums.length) return -1;
  let low = Math.max(...nums);
  let high = nums.reduce((acc, no) => {
    return acc + no;
  }, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const splits = splitNums(nums, mid);
    if (splits > k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

var splitNums = function (nums, maxSum) {
  let k = 1;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] <= maxSum) {
      sum += nums[i];
    } else {
      sum = nums[i];
      k++;
    }
  }
  return k;
};
