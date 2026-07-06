class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;
        while (i<str.length) {
            const j = str.indexOf('#', i);
            const length = parseInt(str.slice(i,j), 10);

            decoded.push(str.slice(j+1, j+1+length));

            i = j +1 + length
        }

        return decoded;
    }
}
