class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            const left = nums.slice(0,i).reduce((acc,curr) => {
                return curr * acc;
            }, 1);
            const right = nums.slice(i+1,nums.length).reduce((acc,curr) => {
                return curr * acc;
            }, 1);
            result.push(left*right)
        }

        return result;
    }
}
