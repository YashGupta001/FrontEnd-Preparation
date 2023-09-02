/*

https://www.youtube.com/watch?v=awxaRgUB4Kw


tc: O(n), sc: O(1)

*/

var countBits = function (n) {
  const result = [0];

  for (let i = 1; i <= n; i++) {
    const prev = result[Math.floor(i / 2)];
    if (i % 2 !== 0) {
      result.push(1 + prev);
    } else {
      result.push(prev);
    }
  }

  return result;
};

// OR

var countBits = function (n) {
  const result = [0];

  for (let i = 1; i <= n; i++) {
    result[i] = result[Math.floor(i / 2)] + (i % 2);
  }

  return result;
};
