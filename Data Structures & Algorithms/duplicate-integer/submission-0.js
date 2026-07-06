class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsObj = {}
        for (var i = 0; i < nums.length ; i++ ) {
            if (numsObj[nums[i]] === 1) {
                return true;
            } else {
                numsObj[nums[i]] = 1
                continue
            }
        }
        return false
    }
}
