class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);

n2.left = n1;
n2.right = n3;

const inOrder = function(root) {
    if (root == null) {
        return;
    }
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

inOrder(n2);

