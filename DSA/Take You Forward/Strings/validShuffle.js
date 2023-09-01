/*
Sheet: 61

check-valid-shuffle-of-strings

https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings 
https://www.youtube.com/watch?v=qN_vwYtvFUM&list=PLDdcY4olLQk0A0o2U0fOUjmO2v3X6GOxX&index=3 

1XY2 is a valid shuffle of XY and 12
X21Y is not a valid shuffle as order got changed
Y1X2 is a valid shuffle of XY and 12     
Y21XX is not a valid shuffle of XY and 12





*/

function validShuffle(s1, s2, shuffle) {
  let l1 = s1.length;
  let l2 = s2.length;
  let res = shuffle.length;
  if (l1 + l2 !== res) return false;
  // i, j and k are s1, s2 and result string pointers
  let i = 0;
  let j = 0;
  let k = 0;
  let flag = 0;

  while (k < res) {
    if (i < l1 && s1[i] === shuffle[k]) {
      i++;
    } else if (j < l2 && s2[j] === shuffle[k]) {
      j++;
    } else {
      flag = 1;
      break;
    }
    k++;
  }

  if (i < l1 || j < l2) {
    return false;
  }

  return true;
}
