
var findJudge = function (n, trust) {

    if (n === 1) return 1;
    
    let trustMap = new Map()
    let trustIssue = new Array(n + 1).fill(1)

    for (let x = 0; x < trust.length; x++) {
        const [a, b] = trust[x]
        trustIssue[a] = 0;
        trustMap.set(b, (trustMap.get(b) || 0) + 1)
    }

    for (let [key, value] of trustMap) {
        if (value === n - 1) {
            if (trustIssue[key] === 1) {
                return key
            }
        }
    }
    return -1

};
