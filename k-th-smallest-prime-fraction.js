var kthSmallestPrimeFraction = function (arr, k) {
    let fractionArr = [], intPairArr = [], value;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            fractionArr.push(arr[i] / arr[j]);
            intPairArr.push([arr[i], arr[j]]);
        }
    }
    fractionArr.sort((a, b) => a - b);
    for (l = 0; l < intPairArr.length; l++) {
        value = intPairArr[l][0] / intPairArr[l][1]
        if (fractionArr[k - 1] == value)
            return intPairArr[l]
    }
};
