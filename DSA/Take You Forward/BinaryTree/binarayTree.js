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

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value >= this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

let bst = new BST(50);
bst.insert(40);
bst.insert(60);
bst.insert(35);
bst.insert(45);

bst.contains(35);
bst.contains(75);
bst.contains(60);
bst.contains(61);
