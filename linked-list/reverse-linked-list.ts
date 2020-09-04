/*
  Reverse a singly linked list.

  Example:

  Input: 1->2->3->4->5->NULL
  Output: 5->4->3->2->1->NULL
 */

/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) {
    return head;
  }

  let prevNode: ListNode | null = null;
  let nextNode: ListNode | null = head;
  let temp: ListNode | null;
  while (nextNode) {
    temp = nextNode.next;
    nextNode.next = prevNode;
    prevNode = nextNode;
    nextNode = temp;
  }
  return prevNode;
}
