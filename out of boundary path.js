/**
 * @param {number} m
  * @param {number} n
   * @param {number} maxMove
    * @param {number} startRow
     * @param {number} startColumn
      * @return {number}
       */
const k = 1000000007
function solve(m, n, max, i, j, dp) {

    if (i < 0 || i >= m || j < 0 || j >= n) { 
        return 1;
    }
    if (max <= 0) {
        return 0;
    }
    if (dp[i][j][max] !== -1) { 
        return dp[i][j][max]
    }
    let res = (solve(m, n, max - 1, i, j + 1, dp) + solve(m, n, max - 1, i, j - 1, dp)) % k;
    res = (res + solve(m, n, max - 1, i + 1, j, dp)) % k
    res = (res + solve(m, n, max - 1, i - 1, j, dp)) % k

    return dp[i][j][max] = res
}
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    let dp = new Array(m).fill(0).map(() =>
        new Array(n).fill(0).map(() =>
            new Array(maxMove + 1).fill(-1)
        )
    );
    return solve(m, n, maxMove, startRow, startColumn, dp)
};
