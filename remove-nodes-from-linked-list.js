
var reverseList = (node) => {
    let prev = null;
    while (node) {
        let future = node.next;
        node.next = prev;
        prev = node;
        node = future;
    }
    return prev;
}
var removeNodes = function (head) {
    let temp = reverseList(head);
    let curr = temp;
    let prev = curr;
    while (curr) {
        if (prev.val > curr.val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return reverseList(temp);
};
