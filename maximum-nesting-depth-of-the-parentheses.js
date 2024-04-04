var maxDepth = function (s) {
    let x = [], n = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            x.push(s[i]);
            n = n > x.length ? n : x.length;
        }
        else if (s[i] === ')') x.pop();
    }
    return n;
};
