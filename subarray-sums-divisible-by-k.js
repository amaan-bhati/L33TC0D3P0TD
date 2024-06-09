var subarraysDivByK = function (arr, k) {
    let sum = 0;
    let hash = new Map();
    hash.set(0, 0);

    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) sum += (arr[i]);
        else sum += k + (arr[i] % k);

        if (!hash.has(sum % k)) hash.set(sum % k, 0);
        else hash.set(sum % k, hash.get(sum % k) + 1);
        res += hash.get(sum % k);
        sum = sum % k;
    }
    return res;
};
