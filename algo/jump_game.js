const jump_game = function(arr) {
    let maxSofar = 0;
    for (let i = 0; i <= maxSofar && maxSofar < arr.length - 1; i++) {
        maxSofar = Math.max(maxSofar, i + arr[i]);
    }

    return maxSofar >= arr.length - 1;
}

console.log(jump_game([3, 3, 1, 0, 2, 0, 1])); //true
console.log(jump_game([3, 2, 0, 0, 2, 0, 1])); //false