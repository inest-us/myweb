const two_sum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
};

console.log(two_sum([2, 7, 11, 15], 9)); // [0, 1]