/*

https://www.youtube.com/watch?v=6zhGS79oQ4k


Upper Bound is smallest Index such that arr[idx] > the given no


ex: const arr = [2,3,6,7,8,8,11,11,11,12], x = 6
output: upperbound = 3

x = 11
output: lowerbound = 9

x = 12
lowerbound = 10

x = 0
lowerbound = 0

*/

// brute force: Linear search O(n)

// optimal: binary search: TC: O(logn)

function upperBound(arr, x) {
  let upperBoun = arr.length;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > x) {
      upperBoun = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return upperBoun;
}

upperBound([3, 5, 8, 9, 9, 15, 19], 9);
