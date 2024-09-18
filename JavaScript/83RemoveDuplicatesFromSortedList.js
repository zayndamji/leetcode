// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Language: JavaScript

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let cur = head;

  while (cur) {
    while (cur.next && cur.next.val == cur.val) {
      if (cur.next.next) {
        cur.next = cur.next.next;
      } else {
        cur.next = null;
      }
    }

    cur = cur.next;
  }

  return head;
};