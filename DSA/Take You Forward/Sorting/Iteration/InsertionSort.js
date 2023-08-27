/*

https://www.youtube.com/watch?v=HGk_ypEuS24

It takes and element and place it in its correct place

*/

// TC: O(n2) in worst and average case
// TC: O(n) in the best case

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      [[nums[j], nums[j - 1]]] = [[nums[j - 1], nums[j]]];
      j--;
    }
  }
  return nums;
}

console.log(insertionSort([19, 54, 1, 3, 99, 78, 187, 154, 156, 153]));
