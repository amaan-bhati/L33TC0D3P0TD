var mergeInBetween = function (list1, a, b, list2) {
    let curr = list1;
    let prev = null;

    for (let i = 0; i < a; i++) {
        prev = curr;
        curr = curr.next;
    }
    let n = b - a;
    let next = curr.next;

    while (n > 0) {
        curr = curr.next;
        next = curr.next;
        n--;
    }
    prev.next = list2;
    let newCurr2 = list2;
    while (newCurr2.next) {
        newCurr2 = newCurr2.next;
    }
    newCurr2.next = next;
    return list1;
};
