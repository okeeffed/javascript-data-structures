const { Tree, hasSubset } = require('./index');
const util = require('util');

describe('Checks if tree is subset of another binary tree', () => {
  test('can find and return sub tree', () => {
    const treeData = [4, 3, 2, 1];
    const tree = new Tree(5);
    for (let leaf of treeData) {
      tree.add(leaf);
    }

    const subTreeData = [2, 1];
    const subTree = new Tree(3);
    for (let leaf of subTreeData) {
      subTree.add(leaf);
    }

    expect(hasSubset(tree, subTree)).toEqual(true);
  });

  test('can find and return sub tree for min', () => {
    const treeData = [6, 5, 4, 3, 2, 1];
    const tree = new Tree(6);
    for (let leaf of treeData) {
      tree.add(leaf);
    }

    const subTreeData = [2, 1];
    const subTree = new Tree(3);
    for (let leaf of subTreeData) {
      subTree.add(leaf);
    }

    // console.log(util.inspect(subsetMain, { depth: null }));
    //   console.log(util.inspect(subtreeNodes, { depth: null }));

    expect(hasSubset(tree, subTree)).toEqual(true);
  });

  test('out of order', () => {
    const treeData = [7, 11, 4, 3, 2, 1];
    const tree = new Tree(10);
    for (let leaf of treeData) {
      tree.add(leaf);
    }

    const subTreeData = [7, 11, 4];
    const subTree = new Tree(10);
    for (let leaf of subTreeData) {
      subTree.add(leaf);
    }

    // console.log(util.inspect(subsetMain, { depth: null }));
    //   console.log(util.inspect(subtreeNodes, { depth: null }));

    expect(hasSubset(tree, subTree)).toEqual(true);
  });

  test('not max binary', () => {
    const treeData = [7, 6, 5, 4, 3, 2];
    const tree = new Tree(10);
    for (let leaf of treeData) {
      tree.add(leaf);
    }

    const subTreeData = [7, 6, 5];
    const subTree = new Tree(10);
    for (let leaf of subTreeData) {
      subTree.add(leaf);
    }

    // console.log(util.inspect(subsetMain, { depth: null }));
    //   console.log(util.inspect(subtreeNodes, { depth: null }));

    expect(hasSubset(tree, subTree)).toEqual(true);
  });

  test('expect false', () => {
    const treeData = [7, 6, 5, 4, 3, 2];
    const tree = new Tree(10);
    for (let leaf of treeData) {
      tree.add(leaf);
    }

    const subTreeData = [7, 5, 4];
    const subTree = new Tree(10);
    for (let leaf of subTreeData) {
      subTree.add(leaf);
    }

    // console.log(util.inspect(subsetMain, { depth: null }));
    //   console.log(util.inspect(subtreeNodes, { depth: null }));

    expect(hasSubset(tree, subTree)).toEqual(false);
  });
});
