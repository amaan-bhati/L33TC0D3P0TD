function largestPerimeter(nums) {
    nums.sort((a, b) => a - b);
    let ans = -1;
    const n = nums.length;
    const prefix = new Array(n).fill(0);
    prefix[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    for (let i = 2; i < nums.length; i++) {
        if (prefix[i] - nums[i] > nums[i]) {
            ans = prefix[i];
        }
    }
    return ans;
}
                                                                                
