
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(-1, head);
    let fast = head, slow = dummy;
    for (let i = 0; i < n; i++) fast = fast.next;
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};
