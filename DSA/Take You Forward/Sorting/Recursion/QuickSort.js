/*

https://www.youtube.com/watch?v=WIrA4YexLRQ


TC: O(nlogn)
SC: O(1) it take recursion in stack but better than merge sort but that does not mean that we dont need to use the merge sort
both are used based on situation

STEPS:
1. Pick a pivot --> it can be any element (it can be first, last, middle or any element in the array)
2. Place it in correct position in sorted array
3. Smaller on the left and larger on the right


Divide and Conquer algorithm

*/

const arr = [19, 54, 1, 3, 99, 78, 187, 154, 156, 153];

function getAndSetPivot(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high) {
      // high - 1
      i++;
    }
    while (arr[j] > pivot && j >= low) {
      // low + 1 both will work
      j--;
    }

    // if j exceed or equal to i do not swap
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // swap the pivot with the j
  [arr[low], arr[j]] = [arr[j], arr[low]];

  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const partitionIdx = getAndSetPivot(arr, low, high);
    quickSort(arr, low, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, high);
  }

  return arr;
}

console.log(quickSort(arr, 0, arr.length - 1));
