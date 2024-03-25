const findDuplicates = (nums) => {
    if (!nums.length || nums.length === 1)
        return [];

    const hist = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++)
        hist[nums[i]]++;

    return hist.map((e, i) => (e > 1) ? i : -1).filter((e) => e !== -1);
};
