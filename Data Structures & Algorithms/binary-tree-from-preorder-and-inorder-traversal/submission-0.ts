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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        // Map each value to its index in inorder for O(1) root lookup.
        const inIndex = new Map<number, number>();
        inorder.forEach((val, i) => inIndex.set(val, i));

        let preIdx = 0;

        // Builds the subtree whose inorder range is [inLeft, inRight].
        function build(inLeft: number, inRight: number): TreeNode | null {
            if (inLeft > inRight) return null;

            // Preorder gives the next root directly.
            const rootVal = preorder[preIdx++];
            const root = new TreeNode(rootVal);

            // Split inorder around the root.
            const mid = inIndex.get(rootVal)!;

            // IMPORTANT: recurse left BEFORE right, matching preorder's L→R order.
            root.left = build(inLeft, mid - 1);
            root.right = build(mid + 1, inRight);

            return root;
        }

        return build(0, inorder.length - 1);
    }
}
