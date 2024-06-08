var checkSubarraySum = function (nums, k) {
    let hash = new Map();
    let i = 0;
    let sum = 0;
    hash.set(0, 0)
    while (i < nums.length) {
        sum += nums[i] % k;
        if (!hash.has(sum % k)) hash.set(sum % k, i + 1);
        else {
            if (i - hash.get(sum % k) + 1 >= 2) return true;
        }
        i++;
    }
    return false;
};
