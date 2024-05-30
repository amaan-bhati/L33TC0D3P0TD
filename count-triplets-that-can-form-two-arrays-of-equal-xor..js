
var countTriplets = function (arr) {
    let n = arr.length;
    let count = 0;
    let prefixXOR = new Array(n + 1).fill(0);

    for (let i = 0; i < n; ++i) {
        prefixXOR[i + 1] = prefixXOR[i] ^ arr[i];
    }

    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (prefixXOR[i] == prefixXOR[j + 1]) {
                count += (j - i);
            }
        }
    }

    return count;
};
