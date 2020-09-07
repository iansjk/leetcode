import { ListNode, mergeTwoLists } from './merge-two-sorted-lists';

describe(mergeTwoLists, () => {
  it('returns null for two null lists', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  it('returns the non null list when given a null list', () => {
    const node = new ListNode(5);
    expect(mergeTwoLists(null, node)).toBe(node);
    expect(mergeTwoLists(node, null)).toBe(node);
  });

  it('returns 1->2->3->4 for 1->2 and 3->4', () => {
    const two = new ListNode(2);
    const one = new ListNode(1, two);
    const four = new ListNode(4);
    const three = new ListNode(3, four);
    const result = mergeTwoLists(one, three);
    expect(result).toBe(one);
    expect(result?.next).toBe(two);
    expect(result?.next?.next).toBe(three);
    expect(result?.next?.next?.next).toBe(four);
  });

  it('returns 1->2->3->4 for 3->4 and 1->2', () => {
    const two = new ListNode(2);
    const one = new ListNode(1, two);
    const four = new ListNode(4);
    const three = new ListNode(3, four);
    const result = mergeTwoLists(three, one);
    expect(result).toBe(one);
    expect(result?.next).toBe(two);
    expect(result?.next?.next).toBe(three);
    expect(result?.next?.next?.next).toBe(four);
  });

  it('returns 1->1->2->2 for 1->2 twice', () => {
    const twoA = new ListNode(2);
    const oneA = new ListNode(1, twoA);
    const twoB = new ListNode(2);
    const oneB = new ListNode(1, twoB);
    const result = mergeTwoLists(oneA, oneB);
    expect(result?.val).toBe(1);
    expect(result?.next?.val).toBe(1);
    expect(result?.next?.next?.val).toBe(2);
    expect(result?.next?.next?.next?.val).toBe(2);
  });
});
