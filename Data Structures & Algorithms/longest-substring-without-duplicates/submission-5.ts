class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let pushed = [];
        let output = 0;

        for (let i = 0; i < s.length; i++) {
            if (!pushed.find((a) => a === s[i])) {
                pushed.push(s[i]);
            } else {
                if (pushed.length > output) {
                    output = pushed.length;
                }
                pushed = pushed.slice(
                    pushed.indexOf(s[i]) + 1,
                    pushed.length,
                );
                pushed.push(s[i]);
            }
        }

        if (pushed.length > output) {
            output = pushed.length;
        }

        return output;
    }
}
