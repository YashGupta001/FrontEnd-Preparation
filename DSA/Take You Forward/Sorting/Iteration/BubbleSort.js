/*

https://www.youtube.com/watch?v=HGk_ypEuS24

Its opposite to selectoon sort as it take max to the last by adjacent swapping

[13,46,23,47,16]

compare first two and see if they are sorted and then move to next 2 and see if not the swap them and continue until we push the max to the end and then repeat the same process

*/

// TC: O(n2) in worst, average

function bubbleSort(nums) {
  for (let i = nums.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
}

console.log(bubbleSort([19, 54, 51, 1, 3, 99, 67]));

// but in best case its O(n) when array is sorted
function bubbleSort(nums) {
  for (let i = nums.length - 1; i >= 1; i--) {
    let didSwap = false;
    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        didSwap = true;
      }
    }

    if (didSwap === false) {
      break;
    }
  }

  return nums;
}

console.log(bubbleSort([1, 3, 67, 99]));
