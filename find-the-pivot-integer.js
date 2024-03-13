var pivotInteger = function (n) {
    if (n === 1) return 1;
    let sumLeft = 0;
    let sumRight = 0;
    let i = 0;
    while (i < n) {
        if (sumLeft <= sumRight) {
            sumLeft += i;
            i++
        } else if (sumLeft > sumRight) {
            sumRight += n;
            n--;
        }
    }
    if (sumLeft === sumRight) return n;
    return -1;
};
