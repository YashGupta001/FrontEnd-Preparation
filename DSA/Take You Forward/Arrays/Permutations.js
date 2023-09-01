/*

https://leetcode.com/problems/permutations/


https://www.youtube.com/watch?v=YK78FU5Ffjw -> take2forward to understand


Number of permutation is always n! if n is 3 then permuation combination will be 3 * 2 * 1 = 6 

*/

// [JS] Backtracking - O(n * n!) time and O(n) space
// TC = O(n * n!); SC = O(n)
var permute = function (nums) {
  const result = [];
  const visited = new Array(nums.length).fill(0);

  getPermutation(nums, result, [], visited);
  return result;
};

function getPermutation(nums, result, path, visited) {
  if (path.length === nums.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }
    path.push(nums[i]);
    visited[i] = 1;
    getPermutation(nums, result, path, visited);
    path.pop();
    visited[i] = 0;
  }
}
