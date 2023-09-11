/*

https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/?envType=daily-question&envId=2023-09-11


*/

var groupThePeople = function (groupSizes) {
  let indices = [],
    result = [];
  groupSizes.forEach((x, idx) => {
    if (indices[x]) indices[x].push(idx);
    else indices[x] = [idx];
    if (indices[x].length === x) {
      result.push(indices[x]);
      indices[x] = undefined;
    }
  });
  return result;
};
