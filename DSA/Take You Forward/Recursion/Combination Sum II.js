/*

https://leetcode.com/problems/combination-sum-ii/description/

https://www.youtube.com/watch?v=G1fRTGRxXU8

*/

var combinationSum2 = function (candidates, target) {
  // No candidates, means no results
  if (!candidates || candidates.length === 0) {
    return [];
  }

  // Sort the candidates array as otherwise we could
  // come up with solution [3,2,2] instead of [2,2,3]
  candidates.sort((a, b) => {
    return a - b;
  });

  // Store all possible combinations in here
  let paths = [];

  // The recursive part.
  // t is what we're looking for. This will become smaller, deeper in to the recursive calls
  // p is where we will record our current path
  // i is the index of the numbers we're considering. Once we get stuck with the 2's
  // we will increase i to try other combinations

  let find = function (t, p, i) {
    // check std out to  get a feel for the order in which we encounter 2,3,6,7
    // console.log('considering:', t , p, i);

    if (t === 0) {
      // we found a valid path, so store that in the paths.
      paths.push(p);
      return;
    } else {
      // don't run over the candidates array length
      // && don't try candidates that would bring target below 0
      while (i < candidates.length && t - candidates[i] >= 0) {
        // "Use" candidate[i]: Lower our target, and record the candidate in the path
        // We're cloning the path array, or it will contaminate future paths.
        // increase i with 1 in the next round as we're not allowed to reuse
        find(t - candidates[i], [...p, candidates[i]], i + 1);

        // "Lose" candidate[i]:
        // In our main example, we don't hit this path until the path of pure 2's
        // has been tried and found to lead to [2,2,2] with no candidates worth pursuing
        // further, because of the 2nd check of the while loop condition.
        i++;
        // extra increase in case we're dealing with dupes. No new path should start with the one
        // we just picked off below
        while (candidates[i - 1] === candidates[i]) {
          i++;
        }
      }
    }
  };

  // kick off initial case, we're looking for the original target,
  // our current path is empty, and we'll consider all candidates
  find(target, [], 0);

  return paths;
};

// same without comments

var combinationSum2 = function (candidates, target) {
  if (!candidates || candidates.length === 0) return [];
  candidates.sort((a, b) => a - b);
  const paths = [];

  function find(newTarget, path, idx) {
    if (newTarget === 0) {
      paths.push(path);
      return;
    }
    while (idx < candidates.length && newTarget - candidates[idx] >= 0) {
      find(newTarget - candidates[idx], [...path, candidates[idx]], idx + 1);
      idx++;

      while (candidates[idx - 1] === candidates[idx]) {
        idx++;
      }
    }
  }

  find(target, [], 0);

  return paths;
};
