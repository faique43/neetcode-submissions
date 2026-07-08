/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let p1: ListNode | null = l1;
        let p2: ListNode | null = l2;
        let carry = 0;

        let res: ListNode = new ListNode(0, null);
        let resP = res;

        while (p1 !== null || p2 !== null || carry !== 0) {
            const v1 = p1 !== null ? p1.val : 0;
            const v2 = p2 !== null ? p2.val : 0;

            const sum = v1 + v2 + carry;

            resP.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);

            resP = resP.next;

            p1 = p1 !== null ? p1.next : null;
            p2 = p2 !== null ? p2.next : null;
        }

        return res.next;
    }
}
