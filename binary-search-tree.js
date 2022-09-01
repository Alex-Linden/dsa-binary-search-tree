class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }

    }




  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    if (node === null) {
      node = newNode;
      return this;
    }

    let current = node;

    if (val < current.val) {
      if (current.left === null) {
        current.left = newNode;
        return this;
      } else {
        this.insertRecursively(val, current.left);
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
        return this;
      } else {
        this.insertRecursively(val, current.right);
      }
    }

  }


  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val)
        return current;

      current = (val < current.val)
        ? current.left
        : current.right;
    }
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return;

    let current = node;

    if (current.val === val) {
      return current;
    } else {
      current = (val < current.val)
        ? current.left
        : current.right;

      return this.findRecursively(val, current);

    }

  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, dfsArray = []) {
    if (node === null) return dfsArray;

    return [...dfsArray,
    node.val,
    ...this.dfsPreOrder(node.left, dfsArray),
    ...this.dfsPreOrder(node.right, dfsArray)
    ];


  }


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, dfsInOrderArray = []) {
    if (node === null) return dfsInOrderArray;

    return [...dfsInOrderArray,
    ...this.dfsInOrder(node.left, dfsInOrderArray),
    node.val,
    ...this.dfsInOrder(node.right, dfsInOrderArray)
    ];

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, dfsPostOrderArr = []) {
    if (node === null) return dfsPostOrderArr;

    return [
      ...dfsPostOrderArr,
      ...this.dfsPostOrder(node.left, dfsPostOrderArr),
      ...this.dfsPostOrder(node.right, dfsPostOrderArr),
      node.val
    ];

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root];
    let bfsArr = [];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current !== null) {
        bfsArr.push(current.val);
        toVisitQueue.push(current.left);
        toVisitQueue.push(current.right);
      }


    }

    return bfsArr;

  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
