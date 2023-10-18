/*

https://www.youtube.com/watch?v=9XybHVqTHcQ

https://leetcode.com/problems/cheapest-flights-within-k-stops/

*/

const findCheapestPriceStriver = (n, flights, src, dst, k) => {
  const graph = {};
  for (const [x, y, price] of flights) {
    if (!graph[x]) graph[x] = [];
    graph[x].push([y, price]);
  }

  const distance = new Array(n).fill(Infinity);
  distance[src] = 0;

  const queue = [[src, 0, k + 1]]; // x, cost, stops

  while (queue.length) {
    const [x, total, stops] = queue.shift();

    if (x === dst) continue; // continue to find cheapest path
    if (stops === 0) continue; // exausted number of steps
    if (!graph[x]) continue;

    for (const [y, price] of graph[x]) {
      // update destination cost if cheaper
      if (distance[y] > total + price) {
        distance[y] = total + price;
        queue.push([y, total + price, stops - 1]);
      }
    }
  }

  return distance[dst] !== Infinity ? distance[dst] : -1;
};

/**
 * DFS - Memoization
 * *Time: O(V x K)
 * *Space: O(V x K + V^2), V x K => space by memoization
 */
// Runtime: 217 ms, faster than 20.38% of JavaScript online submissions for Cheapest Flights Within K Stops.
// Memory Usage: 52.4 MB, less than 18.21% of JavaScript online submissions for Cheapest Flights Within K Stops.
const findCheapestPrice = (n, flights, src, dst, k) => {
  const graph = {};
  const memo = {};

  for (const [x, y, price] of flights) {
    if (!graph[x]) graph[x] = [];
    graph[x].push([y, price]);
  }

  const traverse = (x, stops) => {
    const key = `${x}-${stops}`;
    let min = Infinity; // min price

    // destination reached: add cost from destination to src
    if (x === dst) return 0;
    if (stops === 0) return -1;
    if (!graph[x]) return -1;
    if (memo[key]) return memo[key];

    for (const [y, price] of graph[x]) {
      const total = traverse(y, stops - 1);

      if (total === -1) continue; // invalid route: continue
      min = Math.min(min, total + price); // valid route: update min cost
    }

    // memoize node-stops: min price
    // price can change for each node based on number of stops
    memo[key] = min;
    return min !== Infinity ? min : -1;
  };

  const output = traverse(src, k + 1);
  return output !== Infinity ? output : -1;
};

/**
 * Dijkstra's Algorithm
 * *Time: O((V + E) x log V)
 * *Space: O(V^2)
 */
// Runtime: 182 ms, faster than 28.26% of JavaScript online submissions for Cheapest Flights Within K Stops.
// Memory Usage: 48.7 MB, less than 50.54% of JavaScript online submissions for Cheapest Flights Within K Stops.
const findCheapestPrice2 = (n, flights, src, dst, k) => {
  const graph = {};

  for (const [x, y, price] of flights) {
    if (!graph[x]) graph[x] = [];
    graph[x].push([y, price]);
  }

  const dp = Array.from({ length: n }, () => Infinity);
  dp[src] = 0;

  const pq = [[src, 0, k + 1]]; // x, cost, stops

  while (pq.length) {
    const [x, total, stops] = pq.shift();

    if (x === dst) continue; // continue to find cheapest path
    if (stops === 0) continue; // exausted number of steps
    if (!graph[x]) continue;

    for (const [y, price] of graph[x]) {
      // update destination cost if cheaper
      if (dp[y] > total + price) {
        dp[y] = total + price;
        pq.push([y, total + price, stops - 1]);
      }
    }
  }

  return dp[dst] !== Infinity ? dp[dst] : -1;
};

/**
 * Bellman-Ford
 * K = K + 1 iterations || E = number of edges || N = number of elements
 * *Time: O(K x E)
 * *Space: O(N)
 */
// Runtime: 92 ms, faster than 91.54% of JavaScript online submissions for Cheapest Flights Within K Stops.
// Memory Usage: 41.5 MB, less than 89.34% of JavaScript online submissions for Cheapest Flights Within K Stops.
const findCheapestPrice1 = (n, flights, src, dst, k) => {
  let dp = Array.from({ length: n + 1 }, () => Infinity);
  dp[src] = 0;

  // starting from source: visiting k + 1 verticies
  // if possible: visit all possible path to destination
  for (i = 0; i < k + 1; i++) {
    const temp = [...dp]; // array for comparison

    // find cheapeast price for each path
    for (const [x, y, price] of flights) {
      if (dp[x] === Infinity) continue;
      temp[y] = Math.min(temp[y], dp[x] + price); // get cost from src -> dst and update
    }

    dp = temp;
  }

  return dp[dst] !== Infinity ? dp[dst] : -1;
};
