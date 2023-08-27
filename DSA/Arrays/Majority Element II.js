/*

https://leetcode.com/problems/majority-element-ii/

https://www.youtube.com/watch?v=yDbkQd9t2ig

Boyer-Moore Voting Algorithm

At max we can have 2 elements

*/

/* The idea to find two majority candidates iterating through the nums.
We have only one or two majority elements because they can appear more than n/3 times.

After that, we should count how many times each candidate appears in the nums.
If it more than n/3 times, we will push a candidate into result array and return it.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  // base case
  if (nums.length === 1) return [nums[0]];

  // create vars
  let candidate1 = null,
    candidate2 = null;
  let counter1 = 0,
    counter2 = 0;

  // iterate through nums, find 2 candidates
  for (let i = 0; i < nums.length; i++) {
    if (candidate1 === nums[i]) {
      counter1++;
    } else if (candidate2 === nums[i]) {
      counter2++;
    } else if (counter1 === 0) {
      candidate1 = nums[i];
      counter1++;
    } else if (counter2 === 0) {
      candidate2 = nums[i];
      counter2++;
    } else {
      // if we already have 2 candidates and counters !== 0, decrease counters
      // if one counter will === 0, we will assign a new candidate in the next iteration
      counter1--;
      counter2--;
    }
  }

  // count how many times each candidate appears in the nums
  let appear1 = 0,
    appear2 = 0;
  let res = []; // create arr for only 1 or 2 numbers - our candidates

  nums.forEach((num) => {
    if (num === candidate1) appear1++;
    if (num === candidate2) appear2++;
  });

  // check appear1, appear2 if they apear more than n/3 times, push a candidate into resullt array
  if (appear1 > nums.length / 3) res.push(candidate1);
  if (appear2 > nums.length / 3) res.push(candidate2);

  return res;
};

// my solution

var majorityElement = function (nums) {
  let count1 = 0;
  let count2 = 0;
  let freq1 = 0;
  let freq2 = 0;
  let result = [];
  let num1, num2;

  for (let num of nums) {
    if (num1 === num) count1++;
    else if (num2 === num) count2++;
    else if (count1 === 0) {
      num1 = num;
      count1++;
    } else if (count2 === 0) {
      num2 = num;
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  for (let num of nums) {
    if (num1 === num) {
      freq1++;
    }
    if (num2 === num) {
      freq2++;
    }
  }

  if (freq1 > Math.floor(nums.length / 3)) {
    result.push(num1);
  }

  if (freq2 > Math.floor(nums.length / 3)) {
    result.push(num2);
  }

  return result;
};
