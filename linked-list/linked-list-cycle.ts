//  Definition for singly-linked list.
export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next?: ListNode | null) {
      this.val = val;
      this.next = next === undefined ? null : next;
    }
}
 

/**
 * Returns whether the given linked list has a cycle or not.
 * 
 * @param {ListNode | null} head the linked list to consider
 * @return {boolean} true if a cycle is in the linked list, false otherwise
 */
export function hasCycle(head: ListNode | null): boolean {
  const seen = new Set<ListNode>();
  let curr: ListNode | null = head;
  while (curr != null) {
    if (seen.has(curr)) {
      return true;
    }
    seen.add(curr);
    curr = curr.next;
  }
  return false;
}
