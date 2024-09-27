// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let cur = new ListNode();
  const start = cur;
  let carryTheOne = false;

  do {
    if (l1 == null) l1 = new ListNode(0);
    if (l2 == null) l2 = new ListNode(0);

    cur.val = l1.val + l2.val + (carryTheOne ? 1 : 0);
    if (cur.val >= 10) {
      cur.val = cur.val - 10;
      carryTheOne = true;
    } else {
      carryTheOne = false;
    }

    l1 = l1.next;
    l2 = l2.next;
    if (l1 || l2 || carryTheOne) {
      cur.next = new ListNode();
      cur = cur.next;
    }
  } while (l1 || l2 || carryTheOne);

  return start;
};