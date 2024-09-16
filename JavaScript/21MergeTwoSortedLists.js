// https://leetcode.com/problems/merge-two-sorted-lists/
// Language: JavaScript

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  const head = new ListNode();
  let cur = head;

  while (list1 || list2) {
    if (!list2 || (list1 && list1.val < list2.val)) {
      cur.val = list1.val;
      list1 = list1.next;
      if (list1 || list2) {
        cur.next = new ListNode();
        cur = cur.next;
      }
    } else {
      cur.val = list2.val;
      list2 = list2.next;
      if (list1 || list2) {
        cur.next = new ListNode();
        cur = cur.next;
      }
    }
  }

  return head;
};