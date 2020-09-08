import { TreeNode, maxDepth } from './maximum-depth-of-binary-tree';

describe(maxDepth, () => {
  it('returns 0 for a null tree', () => {
    expect(maxDepth(null)).toBe(0);
  });

  it('returns 1 for a single node tree', () => {
    expect(maxDepth(new TreeNode(42))).toBe(1);
  });

  it('returns 2 for a dense tree of depth 2', () => {
    const left = new TreeNode(2);
    const right = new TreeNode(3);
    const root = new TreeNode(1, left, right);
    expect(maxDepth(root)).toBe(2);
  });

  it('returns 3 for a sparse tree of depth 3', () => {
    const three = new TreeNode(3);
    let two = new TreeNode(2, three);
    let one = new TreeNode(1, two);
    expect(maxDepth(one)).toBe(3);

    two = new TreeNode(2, null, three);
    one = new TreeNode(1, null, two);
    expect(maxDepth(one)).toBe(3);
  });
});
