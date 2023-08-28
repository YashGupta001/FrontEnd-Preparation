/*

Rearrange Array Elements by Sign
https://leetcode.com/problems/rearrange-array-elements-by-sign/


*/

// Brute force TC: O(n) + O(n)   SC: O(n)

// my solution
var rearrangeArray = function (nums) {
  const negArr = [];
  const posArr = [];

  for (let num of nums) {
    if (num < 0) negArr.push(num);
    else posArr.push(num);
  }

  let p1 = 0;
  let p2 = 0;
  let flag = true;

  while (p1 <= posArr.length && p2 < negArr.length) {
    if (flag) {
      result.push(posArr[p1]);
      p1++;
      flag = false;
    } else {
      result.push(negArr[p2]);
      p2++;
      flag = true;
    }
  }

  return result;
};

// more good TC: O(n) + O(n) and SC: O(n)
var rearrangeArray = function (nums) {
  const negArr = [];
  const posArr = [];

  for (let num of nums) {
    if (num < 0) negArr.push(num);
    else posArr.push(num);
  }

  for (let i = 0; i < nums.length / 2; i++) {
    nums[2 * i] = posArr[i];
    nums[2 * i + 1] = negArr[i];
  }

  return nums;
};

// optimal solution TC: O(n) one pass, SC: O(n)

var rearrangeArray = function (nums) {
  let posIdx = 0;
  let negIdx = 1;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      result[posIdx] = nums[i];
      posIdx += 2;
    } else {
      result[negIdx] = nums[i];
      negIdx += 2;
    }
  }

  return result;
};

// By Sign 2 problem where the pos or neg can be more so do it by brute force

const nums = [1, 2, -4, -5, 3, 6];

var rearrangeArray = function (nums) {
  const negArr = [];
  const posArr = [];

  for (let num of nums) {
    if (num < 0) negArr.push(num);
    else posArr.push(num);
  }

  // if pos are more
  if (posArr.length > negArr.length) {
    for (let i = 0; i < negArr.length; i++) {
      nums[2 * i] = posArr[i]; // evn place
      nums[2 * i + 1] = negArr[i]; // odd place
    }

    let index = negArr.length * 2;
    for (let i = negArr.length; i < posArr.length; i++) {
      nums[index] = posArr[i];
      index++;
    }
  } else {
    for (let i = 0; i < posArr.length; i++) {
      nums[2 * i] = posArr[i]; // evn place
      nums[2 * i + 1] = negArr[i]; // odd place
    }

    let index = posArr.length * 2;
    for (let i = posArr.length; i < negArr.length; i++) {
      nums[index] = negArr[i];
      index++;
    }
  }

  return nums;
};

console.log(rearrangeArray([nums]));
