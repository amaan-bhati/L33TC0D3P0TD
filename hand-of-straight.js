var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0)
        return false;
    let mp = {};
    for (let x of hand) {
        mp[x] = (mp[x] || 0) + 1;
    }

    let keys = Object.keys(mp).map(Number).sort((a, b) => a - b);
    while (keys.length > 0) {
        let curr = keys[0];

        for (let i = 0; i < groupSize; i++) {
            if (!mp[curr + i] || mp[curr + i] === 0)
                return false;
            mp[curr + i]--;
            if (mp[curr + i] < 1) {
                delete mp[curr + i];
                let index = keys.indexOf(curr + i);
                if (index !== -1) {
                    keys.splice(index, 1);
                }
            }
        }
    }
    return true;
};
