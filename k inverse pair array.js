var kInversePairs = function (n, k) {
    const MOD = 1000000007;
    let dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        dp[i][0] = 1;
        for (let j = 1; j <= k; j++) {
            for (let l = 0; l <= Math.min(j, i - 1); l++) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - l]) % MOD;
            }
        }
    }

    return dp[n][k];
};
