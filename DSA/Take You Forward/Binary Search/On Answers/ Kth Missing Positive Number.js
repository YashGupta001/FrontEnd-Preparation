/*

https://leetcode.com/problems/kth-missing-positive-number/description/

https://www.youtube.com/watch?v=uZ0N_hZpyps

*/

// BRUTE FORCE: TC: O(max * n)

var findKthPositive = function (arr, k) {
  let max = Math.max(...arr) + k;
  let count = k;

  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) {
      count--;

      if (count === 0) {
        return i;
      }
    }
  }
};

// BRUTE FORCE: O(n)

var findKthPositive = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      k++;
    } else {
      return k;
    }
  }

  return k;
};

// Optimal: O(logn)

var findKthPositive = function (arr, k) {
  let low = 0;
  let high = arr.length - 1;

  // Figure our near by index
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const missing = arr[mid] - (mid + 1);
    if (missing < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // find the number

  return low + k;
};
