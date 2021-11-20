const findDuplicates = function(nums) {
    const map = {};
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
        } else {
            res.push(nums[i]);
        }
    }
    return res;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]