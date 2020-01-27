# Tree Subset Within Tree

## Approach

1. Do a BFS (or alt) Search for each tree
2. Compare larger tree data as string to check if contains a subset of the subtree data as string

## Solution

```javascript
/**
 * Treat this node as a tree leaf
 *
 * @class Node
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data && !this.left) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data && !this.right) {
      this.right = new Node(data);
    }
  }
}

/**
 * Assume max binary tree
 *
 * @class Tree
 */
class Tree {
  constructor(data) {
    this.root = new Node(data);
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);
    } else {
      this.root.insert(data);
    }
  }

  traverseBFS() {
    if (!this.root) {
      return [];
    }

    const nodes = [];
    const arr = [this.root];

    while (arr.length > 0) {
      const node = arr.shift();
      nodes.push(node.data);

      if (node.left) {
        arr.push(node.left);
      }

      if (node.right) {
        arr.push(node.right);
      }
    }

    return nodes;
  }
}

const hasSubset = (tree, subsetTree) => {
  const subtreeNodes = subsetTree.traverseBFS();
  const nodes = tree.traverseBFS();

  return nodes.toString().indexOf(subtreeNodes.toString()) > -1;
};

module.exports = {
  Node,
  Tree,
  hasSubset,
};
```
