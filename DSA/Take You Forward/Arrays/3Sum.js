/*

take you forward : https://www.youtube.com/watch?v=DhFh8Kw7ymk

https://leetcode.com/problems/3sum/

*/

// brute force: TC: O(n3)
var threeSum = function (nums) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          output.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  for (let arr of output) {
    arr.sort();
  }

  return [...new Set(output.map(JSON.stringify))].map(JSON.parse); // a lot to learn for how to remove duplicates from 2d array
};

// better TC: O(n2), sc: O(n + n)

var threeSum = function (nums) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    let seen = {};
    for (let j = i + 1; j < nums.length; j++) {
      let k = -(nums[i] + nums[j]);
      if (seen[k]) {
        let values = [nums[i], nums[j], k];
        output.push(values.sort());
      }
      seen[nums[j]] = true;
    }
  }

  return [...new Set(output.map(JSON.stringify))].map(JSON.parse);
};

// optimal: TC: O(n2), SC: O(1)

var threeSum = function (nums) {
  if (nums.length < 3) return nums;
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        triplets.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }

  return triplets;
};

/*

https://www.youtube.com/watch?v=cIyvLL_HPY0 
https://www.youtube.com/watch?v=E7Ie6OlQgN4 --> watch



Two Pointer Algo

Array: when the array is sorted, we need to think about the binary search or the two pointer

a + b + c = 0
fix a then b + c = 0 - a (now it converts into 2 sum problem)
or a = - (b + c)

*/

// TC: Sort --> O(nLogn) and twoSum is O(n) and we call it n times so its O(n2) --> total is O(n2) + O(nlogn) --> overall O(n2)
// SC: O(logn) to O(n) depending on the implementation of sorting algo

var threeSum = function (nums) {
  if (nums.length < 3) {
    return nums;
  }
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // a + b + c = 0, if a is fixed then b + c = 0 - 1 which is our target
    // skip duplicate a
    if (i === 0 || nums[i] !== nums[i - 1]) {
      twoSumSorted(i + 1, nums.length - 1, nums, 0 - nums[i], result); // use the 2 sum for sorted array with tweek
    }
  }

  return result;
};

var twoSumSorted = function (b, c, nums, target, result) {
  let a = nums[b - 1];

  while (b < c) {
    // search space
    if (nums[b] + nums[c] > target) {
      c--;
    } else if (nums[b] + nums[c] < target) {
      b++;
    } else {
      let combinations = [];
      combinations.push(a);
      combinations.push(nums[b]);
      combinations.push(nums[c]);
      result.push(combinations);

      // in case b is duplicate

      while (b < c && nums[b] === nums[b + 1]) {
        b++;
      }

      // in case c is duplicate
      while (b < c && nums[c] === nums[c - 1]) {
        c--;
      }

      // we dont need to stop as need to find other combination for a
      b++;
      c--;
    }
  }
};
