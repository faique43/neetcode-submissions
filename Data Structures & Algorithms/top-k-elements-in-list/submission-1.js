class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = {};
    nums.forEach((num) => {
        if (result[num]) {
            result[num]++
        } else {
            result[num] = 1
        }
    })
    let output = [...Object.keys(result).sort((a,b) => {
        if (result[a] > result[b]) {
            return -1
        } else if (result[a] < result[b]) {
            return 1
        } else {
            return 0
        }
    }).map((a) => +a)];
    return output.slice(0,k)
    }
}
