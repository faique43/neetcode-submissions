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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let dummy: ListNode = new ListNode(0, head);
        let left = dummy;

        let right = dummy;

        for (let i = 0; i <= n; i++) {
            right = right.next;
        }

        while (right !== null) {
            right = right.next;
            left = left.next;
        }

        left.next = left.next!.next;

        return dummy.next;
    }
}
