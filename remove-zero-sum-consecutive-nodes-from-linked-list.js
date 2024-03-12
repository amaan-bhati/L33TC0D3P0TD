var removeZeroSumSublists = function (head) {
    let dummy = new ListNode(0, head), sum = 0
    let current = dummy, map = new Map()

    while (current) {
        sum += current.val
        map.set(sum, current)
        current = current.next
    }

    current = dummy
    sum = 0;

    while (current) {
        sum += current.val
        current.next = map.get(sum).next
        current = current.next
    }

    return dummy.next;
};
