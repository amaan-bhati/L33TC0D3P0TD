
var findRotateSteps = function (ring, key) {
    let left_index = (i) => (i == 0) ? (ring.length - 1) : (i - 1);
    let right_index = (i) => (i == ring.length - 1) ? 0 : (i + 1);

    let dp = ring.split('').map(() => 0);

    for (let i = key.length - 1; i >= 0; i--) {
        let dp_new = ring.split('').map((x, j) => (x == key[i]) ? dp[j] : Infinity);

        for (let j = 0; j < ring.length * 2; j++) {
            let x = j % ring.length;
            dp_new[x] = Math.min(dp_new[x], dp_new[left_index(x)] + 1);
            let y = ((ring.length * 2) - 1 - j) % ring.length;
            dp_new[y] = Math.min(dp_new[y], dp_new[right_index(y)] + 1);
        }

        dp = dp_new;
    }

    return dp[0] + key.length;
};
