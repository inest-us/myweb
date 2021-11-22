const canSum = function(target, arr) {
    const canSumHelper = function(target, arr, memo) {
        // base case
        if (target < 0) return false; // not a solution
        if (target == 0) return true; // found a solution

        if (target in memo) return memo[target];

        // recursive call
        for (let num of arr) {
            if (canSumHelper(target - num, arr, memo)) {
                memo[target] = true;
                return memo[target];
            }
        }
        memo[target] = false;
        return memo[target];
    }

    return canSumHelper(target, arr, {});
}

console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(300, [7, 14])); // false

