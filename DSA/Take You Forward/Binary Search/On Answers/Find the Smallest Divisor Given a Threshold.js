/*

https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/

https://www.youtube.com/watch?v=UvBKTVaG6U8

*/

// BRUTE FORCE: TC: O(max(arr[]) * n)

function smallestDivisor(arr, limit) {
  let n = arr.length; // size of array
  let maxi = Math.max(...arr); // find the maximum element

  // Find the smallest divisor
  for (let d = 1; d <= maxi; d++) {
    // Find the summation result
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Math.ceil(arr[i] / d);
    }
    if (sum <= limit) return d;
  }
  return -1;
}

// Optimal: O(log(max(arr[]))*N)

function sumByD(arr, div) {
  let n = arr.length; // size of array
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.ceil(arr[i] / div);
  }
  return sum;
}

function smallestDivisor(arr, limit) {
  let n = arr.length;
  if (n > limit) return -1;
  let low = 1;
  let high = Math.max(...arr);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (sumByD(arr, mid) <= limit) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
