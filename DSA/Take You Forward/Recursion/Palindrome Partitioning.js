/*

https://leetcode.com/problems/palindrome-partitioning/description/

*/

var partition = function (s) {
  const ans = [];
  const path = [];
  helper(0, s, path, ans);
  return ans;
};

var helper = function (index, s, path, ans) {
  // base case

  if (index === s.length) {
    ans.push([...path]);
    return;
  }
  // checking if we were able to partition in the indexes
  for (let i = index; i < s.length; i++) {
    if (isPalindrome(s, index, i)) {
      // example from aabb it will take a
      path.push(s.slice(index, i + 1));
      helper(i + 1, s, path, ans);

      // backtracking
      path.pop();
    }
  }
};

var isPalindrome = function (s, start, end) {
  while (start <= end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};
