var minIncrementForUnique = function (nums) {
    let sort = nums.sort((a, b) => a - b);
    let moves = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            let gap = nums[i - 1] - nums[i] + 1;
            nums[i] += gap;
            moves += gap;
        }
    }

    return moves;
};
