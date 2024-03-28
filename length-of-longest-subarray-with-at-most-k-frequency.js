var maxSubarrayLength = function(nums, k) {
    let map = new Map();
    let left = 0, right = 0;
    let maxValue = 0;
    while(right < nums.length) {
        maxValue = Math.max(maxValue, right-left);
        map.set(nums[right], map.get(nums[right])+1 || 1);
        while(map.get(nums[right]) > k) {
            map.set(nums[left], map.get(nums[left])-1);
            left++;
        }
        right++;
    }
    return Math.max(maxValue, right-left);
};
