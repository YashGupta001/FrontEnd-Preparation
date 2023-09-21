/*

https://leetcode.com/problems/median-of-two-sorted-arrays/

https://www.youtube.com/watch?v=C2rRzz-JDk8 --> for brute force and better

https://www.youtube.com/watch?v=F9c7LpRZWVQ --> for optimal

*/

// brute force: TC: O(n + m), SC: O(n + m)

var findMedianSortedArrays = function (nums1, nums2) {
  let combine = [];
  let n1 = nums1.length;
  let n2 = nums2.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < n1 && p2 < n2) {
    if (nums1[p1] < nums2[p2]) {
      combine.push(nums1[p1]);
      p1++;
    } else {
      combine.push(nums2[p2]);
      p2++;
    }
  }

  while (p1 < n1) {
    combine.push(nums1[p1]);
    p1++;
  }

  while (p2 < n2) {
    combine.push(nums2[p2]);
    p2++;
  }

  let n3 = combine.length;

  if (n3 % 2 === 1) {
    return combine[Math.floor(n3 / 2)];
  } else {
    return (combine[n3 / 2] + combine[n3 / 2 - 1]) / 2;
  }
};

// better: TC: O(n1 + m1), SC: O(1)

var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let p1 = 0;
  let p2 = 0;

  let n = n1 + n2;
  let idx2 = Math.floor(n / 2);
  let idx1 = idx2 - 1;
  let idx1el = -1;
  let idx2el = -1;
  let count = 0;

  while (p1 < n1 && p2 < n2) {
    if (nums1[p1] < nums2[p2]) {
      if (count === idx1) idx1el = nums1[p1];
      if (count === idx2) idx2el = nums1[p1];
      count++;
      p1++;
    } else {
      if (count === idx1) idx1el = nums2[p2];
      if (count === idx2) idx2el = nums2[p2];
      count++;
      p2++;
    }
  }

  while (p1 < n1) {
    if (count === idx1) idx1el = nums1[p1];
    if (count === idx2) idx2el = nums1[p1];
    count++;
    p1++;
  }

  while (p2 < n2) {
    if (count === idx1) idx1el = nums2[p2];
    if (count === idx2) idx2el = nums2[p2];
    count++;
    p2++;
  }

  if (n % 2 === 1) {
    return idx2el;
  } else {
    return (idx1el + idx2el) / 2;
  }
};

// optimal : O(log(n + m))
var findMedianSortedArrays = function (a, b) {
  let n1 = a.length;
  let n2 = b.length;

  // as we want the first array to be smaller as we need to perform the binary search on lower array
  if (n1 > n2) return findMedianSortedArrays(b, a);

  let low = 0;
  let high = n1;
  let requiredLeft = Math.floor((n1 + n2 + 1) / 2);

  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = requiredLeft - mid1;
    let l1 = -Infinity;
    let l2 = -Infinity;
    let r1 = Infinity;
    let r2 = Infinity;

    if (mid1 < n1) r1 = a[mid1];
    if (mid2 < n2) r2 = b[mid2];
    if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

    // check if they are in correct order
    if (l1 <= r2 && l2 <= r1) {
      if ((n1 + n2) % 2 === 1) {
        return Math.max(l1, l2);
      } else {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      }
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }

  return 0;
};
