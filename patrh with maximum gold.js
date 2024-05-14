
function backTrack(i, j, m, n, grid) {
    if (grid[i][j] === 0) return 0;
    const currVal = grid[i][j];
    let maxGoldVal = 0;
    grid[i][j] = 0;
    const neighbours = [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]];
    neighbours.forEach(([p, q]) => {
        if (p >= 0 && p < m && q >= 0 && q < n) {
            maxGoldVal = Math.max(maxGoldVal, currVal + backTrack(p, q, m, n, grid));
        }
    });
    grid[i][j] = currVal;
    return maxGoldVal;
}
var getMaximumGold = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxGold = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxGold = Math.max(maxGold, backTrack(i, j, m, n, grid));
        }
    }
    return maxGold;
};
