

var smallestFromLeaf = function (root) {
    let letters = [
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'
    ];
    let ans = null;
    let traverse = function (root, str) {
        if (!root) return;
        str = letters[root.val] + str;
        if (!root.left && !root.right) {
            if (ans == null) ans = str;
            else ans = ans < str ? ans : str;
            return;
        }
        traverse(root.left, str);
        traverse(root.right, str);
    }
    traverse(root, '');
    return ans;
};
