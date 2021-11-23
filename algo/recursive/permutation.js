const permutation = function(arr) {
    let used = new Array(arr.length);
    used.fill(false);
    let result = [];
    let partial = [];
    doPermutation(arr, 0, partial, used, result);
    return result;
}

const  doPermutation = function(arr, index, partial, used, result) {
    // base case
    if (index == arr.length) {
        result.push(partial.toString());
    }

    // recursive call
    for (let i = 0; i < arr.length; i++) {
        if (!used[i]) {
            //try this character 
            partial.push(arr[i])
            used[i] = true;
            doPermutation(arr, index + 1, partial, used, result)

            //backtrack
            used[i] = false;
            partial.pop();
        }
    }
}

console.log(permutation([1, 2, 3]));