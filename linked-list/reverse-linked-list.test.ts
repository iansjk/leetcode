import { ListNode, reverseList } from './reverse-linked-list';

describe(reverseList, () => {
  it('does nothing to a list of size 0 or 1', () => {
    const node = new ListNode();
    expect(reverseList(null)).toBeNull();
    expect(reverseList(node)).toBe(node);
  });

  it('reverses a list of length 2', () => {
    const second = new ListNode(2);
    const first = new ListNode(1, second);

    const reverseHead = reverseList(first);
    expect(reverseHead).not.toBeNull();
    expect(reverseHead).toBe(second);
    expect(reverseHead?.next).toBe(first);
    expect(reverseHead?.next?.next).toBeNull();
  });

  it('reverses 1->2->3->4->5 into 5->4->3->2->1', () => {
    const five = new ListNode(5);
    const four = new ListNode(4, five);
    const three = new ListNode(3, four);
    const two = new ListNode(2, three);
    const one = new ListNode(1, two);

    const reverseHead = reverseList(one);
    expect(reverseHead).toBe(five);
    expect(reverseHead?.next).toBe(four);
    expect(reverseHead?.next?.next).toBe(three);
    expect(reverseHead?.next?.next?.next).toBe(two);
    expect(reverseHead?.next?.next?.next?.next).toBe(one);
    expect(reverseHead?.next?.next?.next?.next?.next).toBeNull();
  });
});
