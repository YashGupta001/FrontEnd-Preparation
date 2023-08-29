/*

https://www.codingninjas.com/studio/problems/largest-element-in-the-array-largest-element-in-the-array_5026279?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

https://www.youtube.com/watch?v=37E9ckMDdTk

*/

//Brute force --> sort the get the last tc: nlogn

// TC: O(n) Optimal solution
function largestElement(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

largestElement([5, 6, 2, 34, 2]);
