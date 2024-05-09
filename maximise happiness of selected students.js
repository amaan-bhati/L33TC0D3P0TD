
var maximumHappinessSum = function (happiness = [], k = 0) {
    happiness.sort((a, b) => b - a);
    let max = 0;

    for (let i = 0; i < k; i++) {
        max += happiness[i] - i <= 0 ? 0 : happiness[i] - i;
    }

    return max;
};
