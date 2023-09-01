/*

https://leetcode.com/problems/linked-list-cycle/

*/

var hasCycle = function (head) {
  let runner = head;
  let walker = head;

  while (runner && runner.next) {
    runner = runner.next.next;
    walker = walker.next;

    if (runner === walker) {
      return true;
    }
  }

  return false;
};
