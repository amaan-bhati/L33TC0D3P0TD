var countSubstrings = function (s) {
    let count = 0;

    function jak(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        jak(i, i);

        jak(i, i + 1);
    }

    return count;
};
