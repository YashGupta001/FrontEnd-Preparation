/*

BFS: This method is used in many applications, one use case is to define a hierarchy or a level of command if we want to store all of the employees in
a search tree we would be able to tell who is in more executive roles versus who is in more subordinate roles by doing BFS


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

BST.prototype.bfs = function (iteratorFunction) {
  const queue = [this];

  while (queue.length) {
    const treeNode = queue.shift();
    iteratorFunction(treeNode);
    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }
};

new bst = new BST(50)
bst.insert(40);
bst.insert(60);
bst.insert(35);
bst.insert(45);

function log(node) {
  console.log(node.value);
}

bst.bfs(log);
