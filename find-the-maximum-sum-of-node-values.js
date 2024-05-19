var maximumValueSum = (nums, k) =>
    nums.reduce((x, y) => x + y) +
    nums.map(v => (v ^ k) - v)
        .sort((x, y) => y - x)
        .map((v, i, a) => a[2 * i] + a[2 * i + 1])
        .filter(v => v > 0)
        .reduce((x, y) => x + y, 0);
