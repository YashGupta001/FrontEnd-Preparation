/*

https://leetcode.com/problems/longest-string-chain/?envType=daily-question&envId=2023-09-23

https://leetcode.com/problems/longest-string-chain/solutions/4078579/95-46-dp-memo/?envType=daily-question&envId=2023-09-23

https://www.youtube.com/watch?v=YY8iBaYcc4g


Time complexity of O(n×m), where n denotes the total number of words and m signifies the average word length.

SC: O(n)


https://www.youtube.com/watch?v=pXG3uE_KqZM&t=684s

*/

var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  const dp = {};
  let max_chain = 0;
  for (const word of words) {
    dp[word] = 1;
    for (let i = 0; i < word.length; i++) {
      // deleting a char and see if that is present or not
      const prev_word = word.slice(0, i) + word.slice(i + 1);
      if (prev_word in dp) {
        dp[word] = Math.max(dp[word], dp[prev_word] + 1);
      }
    }
    max_chain = Math.max(max_chain, dp[word]);
  }
  return max_chain;
};
