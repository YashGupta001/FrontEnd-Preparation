/*

https://leetcode.com/problems/single-number/description/

*/

// Brute force: TC: O(n2), SC: O(1)

var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let counter = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === num) {
        counter++;
      }
    }

    if (counter === 1) return num;
  }
};

// Better: TC: O(2n), SC: O(n)   // or use the array to store

var singleNumber = function (nums) {
  const char = {};
  for (let num of nums) {
    char[num] = (char[num] || 0) + 1;
  }
  for (let key in char) {
    if (char[key] == 1) return key;
  }
};

// Optimal: using XOR  TC: O(n), SC: O(1)

var singleNumber = function (nums) {
  let XOR = 0;

  for (let num of nums) {
    XOR = XOR ^ num;
  }

  return XOR;
};

//
var singleNumber = function (nums) {
  return nums.reduce((accum, elem) => accum ^ elem, 0);
};
