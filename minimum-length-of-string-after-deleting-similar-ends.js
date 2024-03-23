
var minimumLength = function (s) {
    let begin = 0,
        end = s.length - 1,
        flag;
    while (s[begin] === s[end]) {
        flag = false;
        if (s[begin] === s[begin + 1] && begin + 1 !== end) {
            begin++;
            flag = true;
        };
        if (s[end] === s[end - 1] && end - 1 !== begin) {
            end--;
            flag = true;
        };
        if (!flag) {
            if (begin === end) return 1;
            if (begin === end - 1) return 0;
            begin++;
            end--;
        }
    }
    return end - begin + 1;
};
