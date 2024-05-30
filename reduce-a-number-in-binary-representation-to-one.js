var numSteps = function (s) {
    let num = BigInt("0b" + s);
    let count = 0;
    if (num === 1n) {
        return count
    }
    while (num > 1n) {
        count = count + 1
        if (num % 2n !== 0n) {
            num = num + 1n
        } else {
            num = num / 2n
        }
    }
    return count
};
