var removeKdigits = function (num, k) {
    const n = num.length;

    if (n === k) {
        return "0";
    }

    let sb = [];
    for (let i = 0; i < n; i++) {
        while (k > 0 && sb.length > 0 && sb[sb.length - 1] > num[i]) {
            sb.pop();
            k--;
        }

        if (sb.length === 0 && num[i] === '0') {
            continue;
        }

        sb.push(num[i]);
    }

    while (k > 0 && sb.length > 0) {
        k--;
        sb.pop();
    }

    return sb.length === 0 ? "0" : sb.join('');
};
