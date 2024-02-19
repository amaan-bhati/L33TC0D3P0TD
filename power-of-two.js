var isPowerOfTwo = function (n) {
    for (let i = 0; i < 31; i++) {
        if (Math.pow(2, i) == n) {
            return (true);
        }
    }
    return (false);
};
