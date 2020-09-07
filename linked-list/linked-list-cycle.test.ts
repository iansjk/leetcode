import { ListNode, hasCycle } from './linked-list-cycle';

describe(hasCycle, () => {
  it('returns false for null inputs', () => {
    expect(hasCycle(null)).toBeFalse();
  });

  it('returns false for single node inputs', () => {
    expect(hasCycle(new ListNode(42))).toBeFalse();
  });

  it('returns true for a singleton pointing to itself', () => {
    const node = new ListNode(42);
    node.next = node;
    expect(hasCycle(node)).toBeTrue();
  });

  it('returns true for a circular linked list of len 2', () => {
    const two = new ListNode(2);
    const one = new ListNode(1, two);
    two.next = one;
    expect(hasCycle(one)).toBeTrue();
  });

  it('returns true for a linked list of len 3 with a cycle at [2,3]', () => {
    const three = new ListNode(3);
    const two = new ListNode(2, three);
    const one = new ListNode(1, two);
    three.next = two;
    expect(hasCycle(one)).toBeTrue();
  });

  it('returns false for a typical linked list of len 3', () => {
    const three = new ListNode(3);
    const two = new ListNode(2, three);
    const one = new ListNode(1, two);
    expect(hasCycle(one)).toBeFalse();
  });
});
