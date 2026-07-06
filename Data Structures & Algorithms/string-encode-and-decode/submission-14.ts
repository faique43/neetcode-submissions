class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res: string = "";

        if (strs.length === 0) {
            return "🚀"
        }

        for (let i = 0; i < strs.length; i++) {
            if (strs[i] === "") {
                res = res + "❤️" + (i < strs.length - 1 ? "😀" : "");
                continue;
            }
            res = res + strs[i] + (i < strs.length - 1 ? "😀" : "");
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "🚀") {
            return []
        }
        return str.split("😀").map((a) => (a === "❤️" ? (a = "") : a));
    }
}
