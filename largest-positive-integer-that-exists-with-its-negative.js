var findMaxK = function (nums) {
    let maxNeg = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < maxNeg && nums.includes(Math.abs(nums[i]))) {
            maxNeg = nums[i]
        }
    }
    if (maxNeg < 0) {
        return Math.abs(maxNeg)
    } else {
        return -1;
    }
};
