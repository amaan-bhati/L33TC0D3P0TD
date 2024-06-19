var minDays = function (bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }

    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canMakeBouquets(bloomDay, mid, m, k)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

function canMakeBouquets(bloomDay, day, m, k) {
    let bouquets = 0;
    let flowers = 0;

    for (let bloom of bloomDay) {
        if (bloom <= day) {
            flowers += 1;
            if (flowers == k) {
                bouquets += 1;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }

    return bouquets >= m;
};
