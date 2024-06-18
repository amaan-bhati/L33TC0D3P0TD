var maxProfitAssignment = function (diff, profit, worker) {
    if (Math.max(...worker) < Math.min(...diff)) {
        return 0;
    }
    let money = 0;
    for (let i = 0; i < worker.length; i++) {
        let mmax = 0;
        for (let j = 0; j < diff.length; j++) {
            if (diff[j] <= worker[i] && profit[j] > mmax) {
                mmax = profit[j];
            }
        }
        money += mmax;
    }
    return money;
};
