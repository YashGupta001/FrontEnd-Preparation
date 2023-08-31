const arr1 = [2, 0, -1, -1, 1, 4, 2, 0, 1];
const k1 = 1;

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
