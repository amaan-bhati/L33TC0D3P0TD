var jobScheduling = function (startTime, endTime, profit) {
    let jobs = [], cache = [];
    for (let i = 0; i < startTime.length; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }
    jobs.sort(function (a, b) { return a[0] - b[0] });
    return backtrack(0);
    function backtrack(pos) {
        if (cache[pos] !== undefined) {
           if (jobs[mid][0] >= key) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }
};
