var climbStairs = function(n) {
    let memo = new Array(n + 1);
    const climbStairsHelper = function(n, memo) {
        if (n == 0 || n == 1) return 1;
        if (memo[n]) return memo[n];
        memo[n] = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo);
        return memo[n];
    }
    return climbStairsHelper(n, memo);
};

console.log(climbStairs(3));