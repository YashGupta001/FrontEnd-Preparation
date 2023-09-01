/*

DFS:

InOrder: Least to Greatest in BST --> LNR
PreOrder: This order is useful when you want to take a copy of the tree --> NLR
PostOrder: This can be used to safety delete the node from BST --->  LRN

*/

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else if (value >= this.value) {
    if (!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
  return this;
};

BST.prototype.dfsInOrder = function (iteratorFunction) {
  if (this.left) {
    this.left.dfsInOrder(iteratorFunction);
  }
  iteratorFunction(this.value);
  if (this.right) {
    this.right.dfsInOrder(iteratorFunction);
  }
};

let bst = new BST(50);
bst.insert(40);
bst.insert(60);
bst.insert(35);
bst.insert(45);

function log(value) {
  console.log(value);
}

bst.dfsInOrder(log);

// refactor so that it can take any order

BST.prototype.dfs = function (iteratorFunction, order) {
  if (order === "preOrder") {
    iteratorFunction(this.value);
  }
  if (this.left) {
    this.left.dfs(iteratorFunction, order);
  }
  if (order === "inOrder") {
    iteratorFunction(this.value);
  }
  if (this.right) {
    this.right.dfs(iteratorFunction, order);
  }
  if (order === "postOrder") {
    iteratorFunction(this.value);
  }
};

let bst = new BST(50);
bst.insert(40);
bst.insert(60);
bst.insert(35);
bst.insert(45);

function log(value) {
  console.log(value);
}

bst.dfs(log, "inOrder");
bst.dfs(log, "preOrder");
bst.dfs(log, "postOrder");
