/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
const kthToLast = function (head, k) {
  let p = head;
  let ans = head;
  while (k--) {
    p = p.next;
  }
  while (p) {
    p = p.next;
    ans = ans.next;
  }
  return ans.val;
};

export default kthToLast;
