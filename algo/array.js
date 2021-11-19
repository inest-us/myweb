let maxSum = function(arr) {
    let max_current = arr[0];
    let max_global = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max_current = Math.max(arr[i], arr[i] + max_current);
        max_global = Math.max(max_global, max_current);
    }

    return max_global;
}

console.log(maxSum([-2, 3, 2, -1]));