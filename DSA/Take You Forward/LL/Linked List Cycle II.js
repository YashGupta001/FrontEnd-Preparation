/*

https://leetcode.com/problems/linked-list-cycle-ii/

*/

var detectCycle = function (head) {
  let walker = head;
  let runner = head;

  while (runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;

    if (runner === walker) {
      break;
    }
  }

  if (runner === null || runner.next === null) return null;

  walker = head;

  while (runner !== walker) {
    walker = walker.next;
    runner = runner.next;
  }

  return runner;
};
