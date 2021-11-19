const integerBreak = function(num) {

    // cache intermediate results
    const memo = {
        1: 1
    };

    const integerBreak_Iter = function(n) {
        const dp = {
            1: 1
        };

        for (let n = 2; n <= num; n++) {
            dp[n] = (n == num) ? 0 : n;
            for (let i = 1; i < n; i++) {
                let val = dp[i] * dp[n - i];
                dp[n] = Math.max(dp[n], val);
            }
        }

        return dp[n];
    }

    const integerBreakHelper = function(n) {
        //base case
        if (memo.hasOwnProperty(n)) {
            return memo[n];
        }

        let res = (n == num) ? 0 : n;
        for (let i = 1; i < n; i++) {
            let val = integerBreakHelper(i) * integerBreakHelper(n - i);
            res = Math.max(res, val);
        }

        memo[n] = res;
        return res; 
    }

    return integerBreak_Iter(num)
}

console.log(integerBreak(2)); // 1
console.log(integerBreak(5)); // 6