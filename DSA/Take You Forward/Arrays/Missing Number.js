/*

https://leetcode.com/problems/missing-number/

https://www.youtube.com/watch?v=bYWLJb3vCWY

*/

// Brute force: As we know number are from 1-N then will check from 1,2,3--N in the array and see if that exists O(n2), SC: 0(1)

var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    let flag = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) {
        flag = 1;
        break;
      }
    }

    if (flag === 0) {
      return i;
    }
  }
};

// Better Solution TC: O(2n), SC: O(n)

var missingNumber = function (nums) {
  const dummyList = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    dummyList[current] = 1;
  }

  for (let i = 0; i <= nums.length; i++) {
    if (dummyList[i] === 0) {
      return i;
    }
  }
};

// Optimal

// 1. Sum of 0-N natural number will be (n * (n + 1))/ 2   , TC: O(n)  SC:O(1)

var missingNumber = function (nums) {
  const n = nums.length;

  const sum = (n * (n + 1)) / 2;
  let sum2 = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum2 += nums[i];
  }
  return sum - sum2;
};

// 2. XOR   2^2 = 0, 5^5 = 0, 2^2^5^5 = 0 (XOR of same number is zero)
// 2^2^2^2^2 --> 0^0^2 --> 0^2 --> 2 (O xor with any number is that number)  TC: O(2n), SC: O(1)

var missingNumber = function (nums) {
  let XOR1 = 0;
  let XOR2 = 0;

  for (let i = 0; i <= nums.length; i++) {
    XOR1 = XOR1 ^ i;
  }

  for (let j = 0; j < nums.length; j++) {
    XOR2 = XOR2 ^ nums[j];
  }

  return XOR1 ^ XOR2;
};

// TC: O(n), SC: O(1)

var missingNumber = function (nums) {
  let XOR1 = 0;
  let XOR2 = 0;

  XOR1 = XOR1 ^ 0;
  for (let j = 0; j < nums.length; j++) {
    XOR2 = XOR2 ^ nums[j];
    XOR1 = XOR1 ^ (j + 1);
  }

  return XOR1 ^ XOR2;
};

// 3. My approach

var missingNumber = function (nums) {
  let i = 0;

  while (i <= nums.length) {
    let correct = nums[i];
    if (nums[i] !== nums[correct]) {
      [nums[i], nums[correct]] = [nums[correct], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};
