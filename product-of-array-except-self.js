var productExceptSelf = function (nums) {
    const result = new Array(nums.length)
    const product = (prefix, index) => {
        if (index === nums.length) return 1
        const value = nums[index]
        const postfix = product(prefix * value, index + 1)
        result[index] = prefix * postfix
        return postfix * value
    }
    product(1, 0)
    return result
};
