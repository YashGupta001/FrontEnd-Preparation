/*

https://leetcode.com/problems/maximum-product-subarray/description/

https://www.youtube.com/watch?v=hnswaLJvr6g

*/

// Brute Force: O(n2)

var maxProduct = function (nums) {
  let maxProduct = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      if (maxProduct < product) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
};

// 2 optimal solution one with observation and second with modification of kadane algo but will be taking care of observation based

// if there are all postive --> then multiply all
// if there are even number of negatives --> then also multiply all
// but if there are odd number of negatives --> removal of one negative out of the odd number of negatives will leave us with even number of negatives, hence the idea is to remove 1 negative, so we can now see which 1 negative to remove and one removal how is the array shaped

// TC: O(n), SC: O(1)

var maxProduct = function (nums) {
  let maxProduct = -Infinity;
  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < nums.length; i++) {
    if (prefix === 0) {
      prefix = 1;
    }
    if (suffix === 0) {
      suffix = 1;
    }
    prefix = prefix * nums[i];
    suffix = suffix * nums[nums.length - i - 1];
    maxProduct = Math.max(maxProduct, Math.max(prefix, suffix));
  }

  return maxProduct;
};
