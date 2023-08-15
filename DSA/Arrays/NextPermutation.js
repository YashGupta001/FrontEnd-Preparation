/*

https://leetcode.com/problems/next-permutation/

Input: nums = [1,2,3]
Output: [1,3,2]

https://www.youtube.com/watch?v=TOvWyFT0xCw&list=PLDdcY4olLQk3zG-972eMoDJHLIz3FiGA6&index=13 

One approach can be print all the permutation and then take the next one from the result list which is not good

*/

var nextPermutation = function (nums) {
  // find the peak : start loop from the end of array
  let peak = 0;
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      peak = i;
      break;
    }
  }

  // find the next largest of peak - 1 and swap those
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[peak - 1] < nums[j]) {
      [nums[peak - 1], nums[j]] = [nums[j], nums[peak - 1]];
      break;
    }
  }

  // reverse the array from peak to end

  let start = peak;
  let end = nums.length - 1;

  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }

  return nums;
};
