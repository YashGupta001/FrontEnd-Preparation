/*

Minimize Max Distance to Gas Station

https://practice.geeksforgeeks.org/problems/minimize-max-distance-to-gas-station/1

https://www.youtube.com/watch?v=kMSBvlZ-_HA

We have an horizontal number line. On that number line, we have gas stations at positions stations[0], stations[1], ..., stations[N-1], where N = size of the stations array. Now, we add K more gas stations so that D, the maximum distance between adjacent gas stations, is minimized. We have to find the smallest possible value of D. Find the answer exactly to 2 decimal places.

Example 1:

Input:
N = 10
stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
K = 9
Output: 0.50
Explanation: Each of the 9 stations can be added mid way between all the existing adjacent stations.



Input：stations = [3,6,12,19,33,44,67,72,89,95]，K = 2
Output：14.00
Explanation：construction of gas stations at 86 locations


Input：stations = [1,13,17,23]，K = 5
Output：3

*/

// tc: O(k * n) + n

function minmaxGasDist(stations, k) {
  const howMany = new Array(stations.length - 1).fill(0);

  for (let gasStation = 1; gasStation <= k; gasStation++) {
    let maxDistance = -1;
    let maxDistanceIdx = -1;

    for (let i = 0; i < stations.length; i++) {
      const diff = stations[i + 1] - stations[i];
      const sectionLength = diff / (howMany[i] + 1);
      if (maxDistance < sectionLength) {
        maxDistance = sectionLength;
        maxDistanceIdx = i;
      }
    }
    howMany[maxDistanceIdx]++;
  }

  console.log("howmany", howMany);

  let maxDistance = -1;
  for (let i = 0; i < stations.length - 1; i++) {
    let sectionLength = (stations[i + 1] - stations[i]) / (howMany[i] + 1);
    console.log("sectionLength", sectionLength);
    maxDistance = Math.max(maxDistance, sectionLength);
  }

  return maxDistance;
}

minmaxGasDist([1, 13, 17, 23], 5);

// optimal: Binary search:

// Priority Queue --> internally implements on heap data structure, it store the max at the top (need to re visit)
