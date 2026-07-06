class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        strs.forEach(str => {
            // Sort characters to form the key
            const sortedStr = str.split('').sort().join('');
            
            // If map doesn't have this key, initialize it
            if (!map.has(sortedStr)) {
                map.set(sortedStr, []);
            }

            // Push the original string into the correct group
            map.get(sortedStr).push(str);
        });

        // Return values of the map as an array
        return Array.from(map.values());
    }
}
