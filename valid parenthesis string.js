function checkValidString(s) {
    let minOpen = 0;
    let maxOpen = 0;

    for (let char of s) {
        if (char === '(') {
            minOpen = minOpen + 1;
            maxOpen = maxOpen + 1;
        } else if (char === ')') {
            minOpen = Math.max(0, minOpen - 1);
            maxOpen = maxOpen - 1;
        } else { // Asterisk
            minOpen = Math.max(0, minOpen - 1);
            maxOpen = maxOpen + 1;
        }

        if (maxOpen < 0) {
            return false;
        }
    }

    return minOpen === 0;
}
