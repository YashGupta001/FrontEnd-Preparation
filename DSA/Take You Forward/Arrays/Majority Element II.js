/*

https://leetcode.com/problems/majority-element-ii/

https://www.youtube.com/watch?v=yDbkQd9t2ig

https://www.youtube.com/watch?v=vwZj1K0e9U8

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

// Brute force: check every element and see how many times it comes is it more than n/3 floor ? and add it tc: O(n2), sc: O(1)

var majorityElement = function (nums) {
  let ans = [];
  let moreThan = nums.length / 3;

  for (let i = 0; i < nums.length; i++) {
    if (ans[0] !== nums[i]) {
      let count = 0;
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] === nums[i]) {
          count++;
        }
      }
      if (count > moreThan) {
        ans.push(nums[i]);
      }
    }

    if (ans.length === 2) break;
  }

  return ans;
};

// better: TC: O(n), SC: O(n)

var majorityElement = function (nums) {
  const seen = {};
  const ans = [];

  for (let num of nums) {
    seen[num] = (seen[num] || 0) + 1;
  }

  for (let key in seen) {
    if (seen[key] > nums.length / 3) {
      ans.push(key);
    }
  }

  return ans;
};

// OR DO IT IN ONE LOOP

var majorityElement = function (nums) {
  const seen = {};
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    seen[num] = (seen[num] || 0) + 1;
    if (seen[num] === Math.floor(nums.length / 3) + 1) {
      ans.push(num);
    }
  }

  return ans;
};

// Optimal, TC: O(2n), SC: O(1)

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
