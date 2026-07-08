class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const count = new Array(26).fill(0);
        const a = "a".charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - a]++; // add letters from s
            count[t.charCodeAt(i) - a]--; // remove letters from t
        }

        return count.every((c) => c === 0);
    }

    checkInclusion(s1: string, s2: string): boolean {
        let left = 0;
        let right = s1.length;

        while (right > left && right <= s2.length) {
            if (this.isAnagram(s1, s2.slice(left, right))) {
                return true;
            } else {
                left++;
                right++;
            }
        }

        return false;
    }
}
