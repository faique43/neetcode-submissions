class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
   longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let result = 0;

    for (const num of set) {
        // only begin counting at the start of a run
        if (set.has(num - 1)) continue;

        let length = 1;
        let current = num;
        while (set.has(current + 1)) {
            current++;
            length++;
        }

        result = Math.max(result, length);
    }

    return result;
}
}
