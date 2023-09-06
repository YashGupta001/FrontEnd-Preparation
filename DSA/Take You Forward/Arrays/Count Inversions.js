/*

https://www.youtube.com/watch?v=AseUmwVNaoY

*/

const arr = [5, 3, 2, 4, 1];
// no of pairs such that i < j  & a[i] > a[j] like pairs = [(5,3), (5,2), (5,4), (5,1), (3,2) ....]

// Brute force: O(n2)

function count(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
}

// Optimal: TC: (nlogn), SC: O(N) as altering the data

// use the merge sort and try to integrate the logic of comparing two sorted array with 2 pointer

function count(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, low, high) {
  let count = 0;
  if (low == high) return count;
  const mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += merge(arr, low, mid, high);
  return count;
}

function merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;
  let count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      // right is smaller
      temp.push(arr[right]);
      count += mid - left + 1;
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

  return count;
}
