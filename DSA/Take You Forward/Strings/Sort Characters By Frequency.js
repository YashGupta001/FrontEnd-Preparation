/*

https://leetcode.com/problems/sort-characters-by-frequency/description/

https://www.youtube.com/watch?v=Hn6Jv6SfEFg

*/

var frequencySort = function (s) {
  // let chapMap = {}
  // for(let str of s) {
  //     chapMap[str] = (charMap[str] || 0) + 1
  // }

  const map = new Map();

  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  // sort the frequencey
  // let sortedString = Object.keys(charMap).sort((a,b) => charMap[b] - charMap[a])

  const arr = [...map];
  arr.sort((a, b) => b[1] - a[1]);

  let str = arr
    .map(([c, f]) => {
      return c.repeat(f);
    })
    .join("");

  return str;
};
