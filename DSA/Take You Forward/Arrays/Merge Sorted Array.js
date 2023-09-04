/*

https://leetcode.com/problems/merge-sorted-array/description/

https://www.youtube.com/watch?v=n7uwj04E0I4

*/

// BRUTE FORCE: TC: O(m + n) + O(m + n), SC: O(m + n)

var merge = function (nums1, m, nums2, n) {
  let nums3 = [];
  let left = 0;
  let right = 0;

  while (left < m && right < n) {
    if (nums1[left] <= nums2[right]) {
      nums3.push(nums1[left]);
      left++;
    } else {
      nums3.push(nums2[right]);
      right++;
    }
  }

  while (left < m) {
    nums3.push(nums1[left]);
    left++;
  }

  while (right < n) {
    nums3.push(nums2[right]);
    right++;
  }

  // push back to nums1
  for (let i = 0; i < m + n; i++) {
    nums1[i] = nums3[i];
  }
};

// OPTIMAL: TC: O(m + n), SC: O(1)

var merge = function (nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  let insertPos = nums1.length - 1;

  while (right >= 0) {
    if (nums1[left] > nums2[right]) {
      nums1[insertPos] = nums1[left];
      left--;
    } else {
      nums1[insertPos] = nums2[right];
      right--;
    }
    insertPos--;
  }
};
