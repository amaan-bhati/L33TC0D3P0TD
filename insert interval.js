var insert = function (intervals, newInterval) {
    const n = intervals.length
    let idx = 0
    while (idx < n) {
        if (intervals[idx][0] >= newInterval[0]) {
            break
        }
        idx++
    }
    intervals.splice(idx, 0, newInterval)
    let i = 0
    while (i < intervals.length - 1) {
        if (intervals[i][1] < intervals[i + 1][0]) {
            i++
            continue
        }
        intervals[i][1] = Math.max(intervals[i + 1][1], intervals[i][1])
        intervals.splice(i + 1, 1)
    }
    return intervals
};
