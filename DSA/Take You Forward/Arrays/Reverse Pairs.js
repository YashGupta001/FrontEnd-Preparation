/*

https://leetcode.com/problems/reverse-pairs/description/

https://www.youtube.com/watch?v=0e4bZaP3MDI

*/

// brute force, TC: O(n2)

var reversePairs = function (nums) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > 2 * nums[j]) {
        ans++;
      }
    }
  }

  return ans;
};

// merge sort

var reversePairs = function (nums) {
  let countPairs = 0;
  mergeSort(nums, 0, nums.length - 1);

  function countPair(arr, low, mid, high) {
    let right = mid + 1;
    for (let i = low; i <= mid; i++) {
      while (right <= high && arr[i] > 2 * arr[right]) {
        right++;
      }
      countPairs += right - (mid + 1);
    }
  }

  function mergeSort(arr, low, high) {
    if (low == high) return;
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    countPair(arr, low, mid, high);
    merge(arr, low, mid, high);
    return arr;
  }

  function merge(arr, low, mid, high) {
    const temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }

    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }

    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }

    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }

  return countPairs;
};
