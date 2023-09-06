/*

https://www.youtube.com/watch?v=6zhGS79oQ4k


Lower Bound is smallest Index such that arr[idx] >= the given no


ex: const arr = [3,5,8,15,19], x = 8
output: lowerbound = 2

x = 9
output: lowerbound = 3

*/

// brute force: Linear search O(n)

// optimal: binary search TC: O(logn)

function lowerBound(arr, x) {
  let lowerBound = arr.length;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= x) {
      lowerBound = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return lowerBound;
}

lowerBound([3, 5, 8, 9, 9, 15, 19], 9);
