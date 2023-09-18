/*

https://leetcode.com/problems/delete-node-in-a-linked-list/

*/

var deleteNode = function (node) {
  while (node.next && node.next.next) {
    node.val = node.next.val;
    node = node.next;
  }

  node.val = node.next.val;
  node.next = null;
};

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

var deleteNode = function (node) {
  let current = node;
  let prev = null;

  while (current.next) {
    current.val = current.next.val;
    prev = current;
    current = current.next;
  }

  prev.next = null;
};
