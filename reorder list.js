var reorderList = function (head) {
    if (!head || !head.next) return;
    const nodeArr = [];
    let cur = head;
    while (cur) {
        nodeArr.push(cur);
        cur = cur.next;
        nodeArr[nodeArr.length - 1].next = null;
    }
    let begin = 0, end = nodeArr.length - 1;
    cur = null;
    while (begin < end) {
        if (cur) {
            cur.next = nodeArr[begin];
        }
        nodeArr[begin].next = nodeArr[end];
        cur = nodeArr[end];
        begin++;
        end--;
        if (begin === end) {
            cur.next = nodeArr[begin];
        }
    }
};
