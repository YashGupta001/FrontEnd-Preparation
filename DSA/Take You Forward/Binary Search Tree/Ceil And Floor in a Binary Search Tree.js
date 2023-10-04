/*

https://www.codingninjas.com/studio/problems/ceil-from-bst_920464?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

https://www.youtube.com/watch?v=KSsk8AhdOZA

*/

// CEIL
var searchBST = function (root, key) {
  if (!root) return null;
  let ceilVal = -1;

  while (root) {
    if (root.val === key) {
      ceilVal = root.val;
      return ceilVal;
    } else if (root.val < key) {
      root = root.right;
    } else {
      ceilVal = root.val;
      root = root.left;
    }
  }

  return ceilVal;
};

// FLOOR

var searchBST = function (root, key) {
  if (!root) return null;
  let floorVal = -1;

  while (root) {
    if (root.val === key) {
      floorVal = root.val;
      return floorVal;
    } else if (root.val < key) {
      floorVal = root.val;
      root = root.right;
    } else {
      root = root.left;
    }
  }

  return floorVal;
};
