/*

https://leetcode.com/problems/sum-of-two-integers/

https://www.youtube.com/watch?v=6vETcY7qfEo


Bits:

1: 0 1
2: 1 0
3: 1 1



1 + 2

    01
   +10    // cant do so user the XOR operator

   1 ^ 0  || 0 ^ 1 ---> Gives 1
   1 ^ 1 ---> Gives 0
   0 ^ 0 ---> Gives 0



   So what if we want to add 1 and 1 which gives 2

   0 1
   0 1
   ______
   0 0 --> as using the XOR which is in correct so what we can do use the &

    0 1 --> with & then shift the 1 to left

With the &
   1 1  --> 1
   0 1  -> 0
   0 0  -> 0



  << --> left shift
  >> --> right shift  


*/

var getSum = function (a, b) {
  let carry;

  while (b !== 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};
