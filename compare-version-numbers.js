
var compareVersion = function (version1, version2) {
    const parse = (v) => v.split(".").map(Number);
    const v1 = parse(version1);
    const v2 = parse(version2);

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        const n1 = v1[i] || 0;
        const n2 = v2[i] || 0;

        if (n1 > n2) {
            return 1;
        } else if (n1 < n2) {
            return -1;
        }
    }

    return 0;
};
