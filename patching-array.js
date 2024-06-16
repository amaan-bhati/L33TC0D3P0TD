var minPatches = function (nums, n) {
    var covered = 1, count = 0, i = 0;
    while (covered <= n) {
        if (i >= nums.length || covered < nums[i]) {
            count++;
            covered += covered;
        } else covered += nums[i++];
    }
    return count;
};
