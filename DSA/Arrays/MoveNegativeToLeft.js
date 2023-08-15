/*

https://www.youtube.com/watch?v=b3z05qLox3w&list=PLDdcY4olLQk3zG-972eMoDJHLIz3FiGA6&index=5

https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/


An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

Examples : 

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5

Note: Order of elements is not important here.

*/

// Partition Algorithm where we will be taking a pivot where all the smaller than pivot on left side and greater on right side of that---> [3,-2,5,-4,1,6]

function moveNegative(arr) {
  let i = -1;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < 0) {
      // here pivot is zero
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  return arr;
}
