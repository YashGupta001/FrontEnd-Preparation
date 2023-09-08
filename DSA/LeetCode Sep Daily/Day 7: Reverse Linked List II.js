/*

https://leetcode.com/problems/reverse-linked-list-ii/?envType=daily-question&envId=2023-09-07

*/

var reverseBetween = function (head, left, right) {
  let currentNode = head;
  let start = head;
  let cp = 1;

  while (cp < left) {
    start = currentNode;
    currentNode = currentNode.next;
    cp++;
  }

  let prev = null;
  let tail = currentNode;

  while (cp >= left && cp <= right) {
    let temp = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = temp;
    cp++;
  }

  start.next = prev;
  tail.next = currentNode;

  return left > 1 ? head : newList;
};
