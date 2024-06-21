var maxSatisfied = function (customers, grumpy, minutes) {
    let ans = 0, max = 0;
    for (let i = minutes; i < customers.length; i++) {
        ans += customers[i] * (1 - grumpy[i]);
    }
    let i = 0, j = 0;
    while (j < minutes) {
        ans += customers[j++];
    }
    max = Math.max(ans, max);
    while (j < customers.length) {

        if (grumpy[i] === 1) {
            ans -= customers[i];
        }
        if (grumpy[j] === 1) {
            ans += customers[j];
        }
        i++;
        j++;
        max = Math.max(ans, max);
    }
    return max;
};
