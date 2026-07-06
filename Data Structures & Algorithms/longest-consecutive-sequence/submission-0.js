class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);

        let longest = 0;

        nums.forEach((num) => {
            if (!numSet.has(num-1)) {
                let length = 0;
                while (numSet.has(num + length)) {
                    length++;
                }
                if (length > longest) {
                    longest = length
                }
            }
        })

        return longest;
    }
}
