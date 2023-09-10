/*


min of all max ---> min(max)


https://www.youtube.com/watch?v=thUd_WJn6wk

const arr = [10,20,30,40]
const k = 2

arr containing area to be painted lets say to paint 10 units we need 10 units of time and you have given k painters
make sure all the painters atleast get one job to do (in consecutive)

[10,20]                                 [30,40]
painter one take 30 units of time      painter two take 70 units of time

OR


[10]                                    [20,30,40] 
painter one take 10 units of time       painter two take 90 units of time



same as splitArrayLargest and book allocation

*/

var painterPartition = function (nums, k) {
  if (k > nums.length) return -1;
  let low = Math.max(...nums);
  let high = nums.reduce((acc, no) => {
    return acc + no;
  }, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const splits = splitNums(nums, mid);
    if (splits > k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

var splitNums = function (nums, maxSum) {
  let k = 1;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] <= maxSum) {
      sum += nums[i];
    } else {
      sum = nums[i];
      k++;
    }
  }
  return k;
};
