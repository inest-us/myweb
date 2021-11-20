var inorderTraversal = function(root) {
    const result = [];
    const inOrder = function(curr, arr) {
        if (curr == null) {
            return;
        }
        inOrder(curr.left, arr);
        arr.push(curr.val);
        inOrder(curr.right, arr);
    }
    inOrder(root, result);
    return result;
};