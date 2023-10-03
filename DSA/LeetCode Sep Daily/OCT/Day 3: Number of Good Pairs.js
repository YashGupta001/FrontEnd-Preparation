/*

Number of Good Pairs

https://leetcode.com/problems/number-of-good-pairs/?envType=daily-question&envId=2023-10-03

https://www.youtube.com/watch?v=TOpIszBSSOU

*/

// BRTUE FORCE: TC: O(n2), SC: O(1)

var numIdenticalPairs = function (nums) {
  let goodPair = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        goodPair++;
      }
    }
  }
  return goodPair;
};

// Better: TC: O(n), SC: O(n) NCR = N! / R! * (N - R)!    || 3C2 --> 6 / 2 --> 3

var numIdenticalPairs = function (nums) {
  let goodPair = 0;
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    seen[nums[i]] = (seen[nums[i]] || 0) + 1;
  }

  for (let key in seen) {
    const val = seen[key];
    goodPair += (val * (val - 1)) / 2;
  }

  return goodPair;
};

// OR

var numIdenticalPairs = function (nums) {
  let goodPair = 0;
  let count = {};

  for (let num of nums) {
    if (num in count) {
      goodPair += count[num];
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  return goodPair;
};
