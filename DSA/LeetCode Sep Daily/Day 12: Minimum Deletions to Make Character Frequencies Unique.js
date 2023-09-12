/*

https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/

https://www.youtube.com/watch?v=QvzPHt8ngkg


What is a Greedy Algorithm?
A Greedy Algorithm makes choices that seem the best at the moment. In the context of this problem, we'll try to make each character frequency unique by making the fewest number of changes to the existing frequencies.

Time Complexity: O(n), as you only iterate through the list once.
Space Complexity: O(n), to store the frequencies in cnt and the used frequencies in used_frequencies.


*/

var minDeletions = function (s) {
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let deletions = 0;
  const used_frequencies = new Set();

  for (let key in freq) {
    let frequency = freq[key];

    while (frequency > 0 && used_frequencies.has(frequency)) {
      frequency--;
      deletions++;
    }

    used_frequencies.add(frequency);
  }
  return deletions;
};
