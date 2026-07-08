/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let pushed = [];

        const bfs = (node: TreeNode) => {
            pushed.push(node.val);

            if (node.left) bfs(node.left); 
            if (node.right) bfs(node.right); 
        }

        bfs(root)

        pushed.sort((a,b) => a-b);

        return pushed[k-1]
    }
}
