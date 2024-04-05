var makeGood = function (s) {
    const stack = [s[0]];

    for (let i = 1; i < s.length; i++) {
        if ([32, -32].includes(s.charCodeAt(i) - s.charCodeAt(i - 1))) {
            s = s.substring(0, i - 1) + s.substring(i + 1, s.length);
            i -= 2;
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');
};
