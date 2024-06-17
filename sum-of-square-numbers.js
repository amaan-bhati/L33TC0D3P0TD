var judgeSquareSum = function(c) {
    const sqrt = Math.floor(Math.sqrt(c))
    for(let i=sqrt; i>=0;i--) {
        let tmp = c
        if(Math.sqrt(tmp-i*i) % 1 === 0) return true
    }
    return false
};
