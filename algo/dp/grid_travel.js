const gridTraveler = function (m, n) {
    
    const gridTravelerHelper = function (r, c, memo) {
        // base case
        if (r == 0 && c == 0) return 1; // found 1 path
        if (r < 0 || c < 0) return 0; // out of bound

        const key = r + ',' + c;
        if (key in memo) return memo[key];
        
        memo[key] = gridTravelerHelper(r - 1, c, memo) + gridTravelerHelper(r, c - 1, memo);
        return memo[key];
    }

    return gridTravelerHelper(m , n, {});
}

const gridTraveler_dp = function (m, n) {
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    
    // init last row, there is only 1 way
    for (let j = n - 1; j >= 0; j--) {
        dp[m - 1][j] = 1;
    }

    // init last column, there is only 1 way
    for (let i = m - 1; i >= 0; i--) {
        dp[i][n - 1] = 1;
    }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
        }
    }
    
    return dp[0][0];
}

console.log(gridTraveler(1, 2)); // 3
console.log(gridTraveler(2, 2)); // 6
console.log("------------------------------");
console.log(gridTraveler_dp(2, 3)); // 3
console.log(gridTraveler_dp(3, 3)); // 6