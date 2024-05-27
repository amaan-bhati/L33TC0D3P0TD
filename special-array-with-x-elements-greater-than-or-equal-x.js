var specialArray = function (nums) {
    nums.sort(function (a, b) { return a - b });
    const l = nums.length;

    for (let spec = nums.length; spec > 0; spec--) {
        if (spec <= nums[l - spec] && ((l - spec == 0) || (spec > nums[l - spec - 1]))) return spec;
    }
    return -1;
};
