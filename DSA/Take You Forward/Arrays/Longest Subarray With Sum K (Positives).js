/*

https://www.youtube.com/watch?v=frf7qxiN2qU

Ex: arr = [1,2,1,0,1]
k = 4

output: [1,2,1] and [2,1,0,1] the longest is 4

*/

const arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
const k = 3;

// Brute force: TC: O(n2), SC: O(1)
function longestSub(nums, k) {
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        longest = Math.max(longest, j - i + 1);
      }
    }
  }

  return longest;
}
longestSub(arr, k);

// Better Solution (see image) TC: O(n2) kind of, SC: O(n)

const arr1 = [5, 1, 1, 1, 1, 1];
const k1 = 5;

function longestSub(nums, k) {
  let maxLen = 0;
  let sum = 0;
  const preSum = {};

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    let remaining = sum - k;
    if (preSum[remaining] || preSum[remaining] === 0) {
      //preSum[remaining] O(n)
      maxLen = Math.max(maxLen, i - preSum[remaining]);
    }

    // preSum[sum] = i; this solution will not work with zeroes so have to make a slight change

    if (!preSum[sum]) {
      preSum[sum] = i;
    }
  }

  return maxLen;
}

longestSub(arr1, k1);

// optimal approach if the array containing only postives and zeroes (two pointer and greedy approach) --> TC: O(2n) at worst case, SC: O(1)

const arr2 = [1, 3, 2, 1, 1, 1, 1, 3, 3];
const k2 = 6;

function longestSub(nums, k) {
  let sum = 0;
  let maxLen = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    sum += nums[right];
    while (left <= right && sum > k) {
      sum -= nums[left];
      left++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
  }

  return maxLen;
}

longestSub(arr2, k2);
