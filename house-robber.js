var rob = function (nums) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2) {
            odd = Math.max(odd + nums[i], even);
        } else {
            even = Math.max(even + nums[i], odd);
        }
    }

    return Math.max(odd, even);
};
