const fibo = function(n) {
    const memo = {};
    return fiboHelper(n, memo);
}

/*
    recursive + memo
*/
const fiboHelper = function(n, memo) {
    if (n < 2 ) {
        //f0 = f1 = 1
        return 1;
    }

    if (n in memo) {
        return memo[n];
    }

    let res = fiboHelper(n - 1, memo) + fiboHelper(n - 2, memo);
    memo[n] = res;
    return res;
}

/*
    bottom-up DP
*/
const fibo_dp = function(n) {
    let memo = new Array(n + 1);
    memo[0] = 1;
    memo[1] = 1;

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
}

console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log("----------------------------------");
console.log(fibo_dp(2));
console.log(fibo_dp(3));
console.log(fibo_dp(4));
console.log(fibo_dp(5));