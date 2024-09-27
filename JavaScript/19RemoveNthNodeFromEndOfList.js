// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let len = 1;
  let cur = head;
  while (cur.next) {
    len += 1;
    cur = cur.next;
  }

  cur = head;
  let m = len - n;

  if (m == 0) {
    if (head.next) {
      return head.next;
    } else {
      return null;
    }
  }

  let i = 0;
  while (i < (m-1)) {
    cur = cur.next;
    i++;
  }

  if (cur.next) {
    if (cur.next.next) {
      cur.next = cur.next.next;
    } else {
      cur.next = null;
    }
  } else {
    return null;
  }

  return head;
};