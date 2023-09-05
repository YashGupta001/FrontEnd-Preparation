/*

Given a array of both positive and negative integers. The task is to compute the length of the largest sub array with sum 0

Ex: [-15,-2,2,-8,1,7,10,23]
Ans: 5 -->[-2,2,-8,1,7]

*/

const arr = [-15, -2, 2, -8, 1, 7, 10, 23];

// brute force TC: O(n2)
function longestSubarray(arr) {
  let longest = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        longest = Math.max(longest, j - i + 1);
      }
    }
  }

  return longest;
}

longestSubarray(arr);

//optimal like a kadane algo: TC: O(n), SC: O(n)

function longestSubarray(arr) {
  let longest = 0;
  let sum = 0;
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      longest = i + 1;
    } else {
      if (seen[sum] || seen[sum] === 0) {
        longest = Math.max(longest, i - seen[sum]);
      } else {
        seen[sum] = i;
      }
    }
  }

  return longest;
}

longestSubarray(-1, -1, -2, 4);
