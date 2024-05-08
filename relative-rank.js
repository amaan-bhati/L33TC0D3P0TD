
const PRIZE_TITLES = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
var findRelativeRanks = function (scores) {
    const prizes = [];

    scores
        .reduce((acc, score, i) => {
            acc.push([score, i]);
            return acc;
        }, [])
        .sort(([a], [b]) => b - a)
        .forEach(([, index], i) => {
            prizes[index] = PRIZE_TITLES[i] ?? String(i + 1);
        });

    return prizes;
};
