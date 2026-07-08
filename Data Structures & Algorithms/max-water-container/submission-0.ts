class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let output = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = 1; j < heights.length; j++) {
                if (j === i) continue;

                if (Math.min(heights[i], heights[j]) * (j - i) > output) {
                    output = Math.min(heights[i], heights[j]) * (j - i);
                }
            }
        }

        return output;
    }
}
