const isPalindrome = function(x) {
    // negative number is not palindrome
    if (x < 0) { return false; }
    
    // if x % 10 == 0 then only 0 is palindrome
    if (x % 10 == 0 && x != 0) { return false; }
    
    let revert = 0;
    while (x > revert) {
        revert = revert * 10 + (x % 10);
        x = Math.floor (x / 10);
    }
    
    // if the length is even, check if x == revert
    // if the length is odd, check if x == revert / 10
    return (x === revert) || (x ===  Math.floor(revert / 10));
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(11)); // true
console.log(isPalindrome(1213)); // false

