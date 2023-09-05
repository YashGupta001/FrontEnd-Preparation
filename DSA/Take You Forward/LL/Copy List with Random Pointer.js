/*

Copy List with Random Pointer

https://www.youtube.com/watch?v=VNf6VynfpdM

https://leetcode.com/problems/copy-list-with-random-pointer/?envType=daily-question&envId=2023-09-05

*/

// TC: O(n) + O(n) + O(n) = O(n), SC: O(1)

var copyRandomList = function (head) {
  let current = head;
  let front = head;

  // First round: make copy of each node,
  // and link them together side-by-side in a single list.
  while (current !== null) {
    front = current.next;
    let copyNode = new Node(current.val);
    current.next = copyNode;
    copyNode.next = front;
    current = front;
  }

  // Second round: assign random pointers for the copy nodes.
  current = head;
  while (current !== null) {
    if (current.random !== null) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  // Third round: restore the original list, and extract the copy list.

  current = head;
  let dummyNode = new Node(0);
  let dummyHead = dummyNode;
  while (current !== null) {
    front = current.next.next;

    // extract the copy
    dummyHead.next = current.next;
    dummyHead = dummyHead.next;

    // restore the original list
    current.next = front;

    current = front;
  }

  return dummyNode.next;
};
