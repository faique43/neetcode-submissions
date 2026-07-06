class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
        const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
        const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

        for (let c = 0; c < 9; c++) {
            for (let r = 0; r < 9; r++) {
                if (board[r][c] === ".") continue;

                const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (
                    rows[r].has(board[r][c]) ||
                    cols[c].has(board[r][c]) ||
                    boxes[b].has(board[r][c])
                ) {
                    return false;
                }

                rows[r].add(board[r][c]);
                cols[c].add(board[r][c]);
                boxes[b].add(board[r][c]);
            }
        }

        return true;
    }
}
