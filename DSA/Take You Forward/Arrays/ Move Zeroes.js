/*

https://leetcode.com/problems/move-zeroes/

https://www.youtube.com/watch?v=wvcQg43_V8U

*/

// BRUTE FORCE: TC: O(2n), SC: O(n)

var moveZeroes = function (nums) {
  const temp = [];
  let count = 0;
  for (const num of nums) {
    if (num === 0) {
      count++;
    } else {
      temp.push(num);
    }
  }

  for (let i = 0; i < count; i++) {
    temp.push(0);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }

  return nums;
};

// BRUTE FORCE 2: TC: O(2n), SC: O(n)

var moveZeroes = function (nums) {
  const temp = [];
  for (const num of nums) {
    if (num !== 0) {
      temp.push(num);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  for (let i = temp.length; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

// Optimal TC: O(n), SC: O(1)

var moveZeroes = function (nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
      insertPos++;
    }
  }

  return nums;
};
