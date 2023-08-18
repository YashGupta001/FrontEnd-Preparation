/*

Container With Most Water

https://leetcode.com/problems/container-with-most-water/

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/19669640#overview



*/

//Brute Force

var maxArea = function (height) {
  let maxArea = 0;

  for (let i = 0; i <= height.length - 1; i++) {
    for (let j = i + 1; j <= height.length - 1; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

// Shifting Pointer Technique

var maxArea = function (height) {
  if (height.length < 2) return 0;
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const length = Math.min(height[start], height[end]);
    const width = end - start;
    const area = length * width;
    maxArea = Math.max(area, maxArea);
    if (height[start] <= height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxArea;
};
