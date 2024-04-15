var sumNumbers = function (root) {
    const traverse = (root, sum) => {
        sum = sum ? Number("" + sum + root.val) : root.val
        if (root.left === null && root.right === null) {
            return sum
        } else if (root.left === null) {
            return traverse(root.right, sum)
        } else if (root.right === null) {
            return traverse(root.left, sum)
        }
        return traverse(root.left, sum) + traverse(root.right, sum)
    }
    return traverse(root, null)
};
