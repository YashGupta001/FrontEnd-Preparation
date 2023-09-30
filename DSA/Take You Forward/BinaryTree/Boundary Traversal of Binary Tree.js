/*

https://www.youtube.com/watch?v=0ca1nvR0be4

https://github.com/doocs/leetcode/blob/main/solution/0500-0599/0545.Boundary%20of%20Binary%20Tree/README_EN.md

https://www.codingninjas.com/studio/problems/boundary-traversal-of-binary-tree_790725?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf




                                          1 

                                null                      2
                                                     
                                                    3            4



 Input: root = [1,null,2,3,4]
  Output: [1,3,4,2] 
    
*/

var boundaryOfBinaryTree = function (root) {
  let leftBoundary = function (root, res) {
    while (root) {
      let curVal = root.val;
      if (root.left) {
        root = root.left;
      } else if (root.right) {
        root = root.right;
      } else {
        break;
      }
      res.push(curVal);
    }
  };
  let rightBoundary = function (root, res) {
    let stk = [];
    while (root) {
      let curVal = root.val;
      if (root.right) {
        root = root.right;
      } else if (root.left) {
        root = root.left;
      } else {
        break;
      }
      stk.push(curVal);
    }
    let len = stk.length;
    for (let i = 0; i < len; i++) {
      res.push(stk.pop());
    }
  };
  let levelBoundary = function (root, res) {
    if (root) {
      levelBoundary(root.left, res);
      if (!root.left && !root.right) {
        res.push(root.val);
      }
      levelBoundary(root.right, res);
    }
  };
  let res = [];
  if (root) {
    res.push(root.val);
    leftBoundary(root.left, res);
    if (root.left || root.right) {
      levelBoundary(root, res);
    }
    rightBoundary(root.right, res);
  }
  return res;
};
