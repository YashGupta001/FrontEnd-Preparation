/*

https://www.youtube.com/watch?v=ogjf7ORKfd8

Divide and Merge


As the array will divide by 2 in each step so the time complexity will be log2n

                 8
            4             4
         2     2       2      2
       1  1   1  1    1  1   1  1


here we took 3 steps to divide 8 as per formula log base 2 n (log2n) --> log2(8) --> 3     (2 power 3) (LOGN) to divide
and merge taking O(n)


so total will be O(n) * O(logn)

TC: O(nlogn) in best, average and worst case , SC: O(n)

*/

const arr = [19, 54, 1, 3, 99, 78, 187, 154, 156, 153];

function mergeSort(arr, low, high) {
  if (low == high) return;
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
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

console.log(mergeSort(arr, 0, arr.length - 1));
