class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(l1, l2) {
    const dummyHead = new ListNode(0, null);
    let current = dummyHead;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    while (l1 != null) {
        current.next = l1;
        l1 = l1.next;
        current = current.next;
    }
    while (l2 != null) {
        current.next = l2;
        l2 = l2.next;
        current = current.next;
    }
    return dummyHead.next;
};