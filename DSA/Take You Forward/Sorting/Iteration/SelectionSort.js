/*

https://www.youtube.com/watch?v=HGk_ypEuS24

Take the minimum and do the sorting

Select min and swap

[3,5,1,6]


STEPS:
1. get the min and swap with first pos
2. find the second min and swap with second pos and go on

*/

// TC: O(n2) in worst, average and best case

function selectionSort(nums) {
  for (let i = 0; i <= nums.length - 2; i++) {
    let min = i;

    for (let j = i; j <= nums.length - 1; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }

  return nums;
}

console.log(selectionSort([19, 23, 54, 1, 3, 99, 67]));
