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

function largestSecondElement(arr) {
  let first = arr[0];
  let second = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (first < arr[i]) {
      second = first;
      first = arr[i];
    } else if (second < arr[i] && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}

largestSecondElement([5, 6, 23, 12, 10, 102, 102, 102]);
