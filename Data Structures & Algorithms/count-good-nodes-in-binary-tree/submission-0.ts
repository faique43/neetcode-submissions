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
    goodNodes(root: TreeNode | null): number {
        const dfs = (node: TreeNode | null, maxSoFar: number): number => {
            if (node === null) return 0;

            let count = node.val >= maxSoFar ? 1 : 0;
            const newMax = Math.max(maxSoFar, node.val);

            count += dfs(node.left, newMax);
            count += dfs(node.right, newMax);

            return count;
        };

        return dfs(root, root!.val);
    }
}
