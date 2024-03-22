var isPalindrome = function (head) {

    let front = end = ''

    while (head) {
        front += head.val
        end = head.val + end
        head = head.next
    }

    return front === end
}; 
