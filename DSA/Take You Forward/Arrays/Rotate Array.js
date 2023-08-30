/*

https://leetcode.com/problems/rotate-array/description/

https://www.youtube.com/watch?v=wvcQg43_V8U

*/

// Q1 Left Rotate an array by one place

//left rotate array by one place TC: O(N) SC: O(1) as we are not using any extra space but if ask about space then its 0(n) as we are modifying the array

// optimal
const array = [1, 2, 3, 4, 5];

function leftRotateByOne(array) {
  let temp = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array[array.length - 1] = temp;

  return array;
}

leftRotateByOne(array);

// Q2 Left Rotate an array by K place
// Brute force TC: O(n + d), SC: O(d) for the temp array

const array1 = [1, 2, 3, 4, 5, 6, 7];

function leftRotateByK1(array, k) {
  const n = array.length;
  k = k % n;
  //  STEP 1: temp
  //  let temp = array.slice(0, k);

  let temp = [];

  for (let i = 0; i < k; i++) {
    // O(k)
    temp.push(array[i]);
  }

  // STEP 2: shifting the others
  for (let i = k; i < n; i++) {
    // O(n - d)
    array[i - k] = array[i];
  }

  // STEP 3: push back the temp
  //   let j = 0;

  //   for (let i = n - k; i < n; i++) {
  //     array[i] = temp[j];
  //     j++;
  //   }

  // OR

  for (let i = n - k; i < n; i++) {
    // O(d)
    array[i] = temp[i - (n - k)];
  }

  return array;
}

leftRotateByK1(array1, 3);

// Optimal TC: O(n + d), SC: O(1)

/*
 reverse(0,k) --> reverse the array till k   O(k)
 reverse(k,n) ---> reverse the array from k to n O(n-k)
 reverse(0,n) ---> reverse the entire array O(n)

 TC: O(2n)
 SC: O(1)

*/

function reverse(array, left, right) {
  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }
}

function leftRotateByK(array, k) {
  let n = array.length;
  k = k % n;
  reverse(array, 0, k - 1);
  reverse(array, k, n - 1);
  reverse(array, 0, n - 1);
  return array;
}

leftRotateByK([1, 2, 3, 4, 5, 6, 7], 3);

/* Q3: Right Rotate an array by K place

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

*/

var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  return nums;
};

var reverse = function (arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};
