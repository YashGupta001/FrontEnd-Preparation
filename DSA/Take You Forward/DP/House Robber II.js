/*

https://leetcode.com/problems/house-robber-ii/

https://www.youtube.com/watch?v=3WaxQMELSkw


*/

var robber = function (nums) {
  let prevOne = nums[0];
  let prevTwo = 0;

  for (let i = 1; i < nums.length; i++) {
    const pick = nums[i] + (i === 1 ? 0 : prevTwo);
    const notPick = 0 + prevOne;
    prevTwo = prevOne;
    prevOne = Math.max(pick, notPick);
  }
  return prevOne;
};

var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  const temp1 = [];
  const temp2 = [];
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) {
      temp1.push(nums[i]);
    }

    if (i !== nums.length - 1) {
      temp2.push(nums[i]);
    }
  }

  return Math.max(robber(temp1), robber(temp2));
};

// OTHER

//ITERATIVE + 2 VARIABLES (bottom-up)

//Time: O(n) | Space: O(1)

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const includeFirst = robHouses(nums, 0, nums.length - 1);
  const excludeFirst = robHouses(nums, 1, nums.length);
  return Math.max(includeFirst, excludeFirst);
};

const robHouses = (nums, startIdx, endIdx) => {
  // stores max amount robbed from previous 2 houses
  let rob1 = 0;
  let rob2 = 0;

  for (let i = startIdx; i < endIdx; i++) {
    // we can't rob 2 adjacent houses so curr amount (nums[i]) can only be added to rob1
    let newRob = Math.max(nums[i] + rob1, rob2);
    rob1 = rob2;
    rob2 = newRob;
  }
  return rob2;
};

//  RECURSIVE + MEMO (top-down)

// Time: O(n) | Space: O(n)

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const includeFirst = robHouse(nums, 0, nums.length - 1, {});
  const excludeFirst = robHouse(nums, 1, nums.length, {});
  return Math.max(includeFirst, excludeFirst);
};

const robHouse = (nums, i, endIdx, memo) => {
  if (i in memo) return memo[i];
  if (i >= endIdx) return 0;

  const include = nums[i] + robHouse(nums, i + 2, endIdx, memo);
  const exclude = robHouse(nums, i + 1, endIdx, memo);

  memo[i] = Math.max(include, exclude);
  return memo[i];
};
