/* Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the 
first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) {
    return null; 
  }
  let head: ListNode | null = null;
  if (!l2 || (l1 && l1.val <= l2.val)) {
    head = l1;
    head!.next = mergeTwoLists(l1!.next, l2);
  } else if (!l1 || (l2 && l2.val <= l1.val)) {
    head = l2;
    head.next = mergeTwoLists(l1, l2.next);
  }
  return head;
}
