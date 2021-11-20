const isValid = function(s) {
    const arr = s.split('');
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        // push open brackets to stack
        let c = arr[i];
        if (c == '(' || c == '[' || c == '{') {
            stack.push(arr[i])
        } else {
            // if it is a closed bracket, pop and check correct order
            let top = stack.pop();
            if ((c == ')' && top != '(') || (c == ']' && top != '[') || (c == '}' && top != '{')) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

console.log(isValid("()")); // true