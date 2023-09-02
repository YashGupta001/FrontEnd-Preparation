/*

https://leetcode.com/problems/subarray-sum-equals-k/description/

https://www.youtube.com/watch?v=xvNwoz-ufXA


nums =
[1,-1,0]
k =
0

Use Testcase
Output
2
Expected
3



*/

const nums = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
const k = 3;

// Brute force: generate all the sub array TC: O(n2), SC: O(1)

var subarraySum = function (nums, k) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        answer++;
        break;
      }
    }
  }

  return answer;
};

// Optimal Solution TC: O(n * logn), SC: O(n)

var subarraySum = function (nums, k) {
  let count = 0;
  const map = new Map();
  let sum = 0;
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remove = sum - k;
    if (map.has(remove)) {
      count += map.get(remove);
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }

  return count;
};
