const numSquares_naive = function(n) {
    const res = {
        'minStep': n
    };
    numSquares_naive_helper(n, 0, res);
    return res['minStep'];
}

const numSquares_naive_helper = function(n, step, res) {
    //base case, found a solution
    if (n == 0) {
        if (res['minStep'] > step) res['minStep'] = step;
    } else {
        for (let i = 1; i<= n; i++) {
            let square = i * i;
            if (n < square) break;
            numSquares_naive_helper(n - square, step + 1, res);
        }
    }
}

const numSquares = function(n) {
    let dp = new Array(n + 1);
    dp.fill(n); // at most we can use n step 1 + 1 + ...+ 1
    dp[0] = 0;
    for (let target = 1; target <= n; target++) {
        for (let s = 1; s <= target; s++) {
            let square = s * s;
            if (target < square) break;
            dp[target] = Math.min(dp[target], 1 + dp[target - square]);
        }
    }
    return dp[n];
}

console.log(numSquares(12)); // 3 
console.log(numSquares_naive(12)); // 3 
