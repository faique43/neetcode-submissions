class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let flatMatrix = matrix.flatMap(a => a)

        return !!flatMatrix.find(a=> a === target)
    }
}
