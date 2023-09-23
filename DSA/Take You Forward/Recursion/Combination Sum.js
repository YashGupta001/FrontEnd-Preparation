/*

https://leetcode.com/problems/combination-sum/description/

https://www.youtube.com/watch?v=OyZFFqQtu98

Whenever you have given an array and asked to find the combination think about pick vs non pick recursion (and recursion always backtrack)

TC: 2 pow t * k (exponential)

*/

/*
You can try
var buffer = [1,2];
var res = [];
res.push(buffer);
buffer.pop(); 
Now,res will change.
*/

var combinationSum = function (candidates, target) {
  const result = [];
  const buffer = [];
  search(0, target);
  return result;

  function search(startIdx, target) {
    if (target === 0) return result.push(buffer.slice()); // need to check on why slice
    if (target < 0 || startIdx === candidates.length) return;

    // pick
    buffer.push(candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    buffer.pop();

    // non pick
    search(startIdx + 1, target);
  }
};
