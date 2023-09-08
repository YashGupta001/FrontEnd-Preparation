/*

https://www.youtube.com/watch?v=jtSiWTPLwd0


const arr = [3,4,5,1,2] ans = 3

*/

function noOfTimesRotated(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

noOfTimesRotated([3, 4, 5, 1, 2]);
