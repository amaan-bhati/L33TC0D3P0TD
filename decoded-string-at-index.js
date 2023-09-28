/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
    let size = 0;
    let i = 0;

    // Calculate the size of the decoded string
    while (size < k) {
        if (isNaN(parseInt(s[i]))) {
            size++;
        } else {
            size *= parseInt(s[i]);
        }
        i++;
    }

    i--;

    // Traverse the string in reverse to find the kth character
    while (i >= 0) {
        if (isNaN(parseInt(s[i]))) {
            if (size === k) {
                return s[i];
            }
            size--;
        } else {
            size /= parseInt(s[i]);
            k %= size;
            if (k === 0) k = size;
        }
        i--;
    };
}
