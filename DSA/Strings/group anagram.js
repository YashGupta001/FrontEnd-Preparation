/*

https://leetcode.com/problems/group-anagrams/description/

*/

var groupAnagrams = function (strs) {
  let res = {};

  // looping over strs so that can work on single string at a time
  for (let str of strs) {
    let count = new Array(26).fill(0);

    // mark all 1 where char comes in an array
    for (let char of str) count[char.charCodeAt() - 97]++;

    // generate the keys for each string (if string are anagram they must have same key)
    let key = count.join("#");

    // final check whether we have the key in our object if yes then push otherwise assign the str
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};
