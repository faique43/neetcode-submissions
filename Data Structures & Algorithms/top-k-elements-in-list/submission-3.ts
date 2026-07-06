class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let set: Record<number, number> = {};

        for (const num of nums) {
            set[num] = (set[num] ?? 0) + 1;
        }

        return Object.entries(set)
            .sort((a, b) => b[1] - a[1])
            .slice(0,k)
            .map(([num]) => Number(num));
    }
}
