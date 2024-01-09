var leafSimilar = function(root1, root2) {
    const rec = function(node, arr) {
        if (node === null) {
            return;
        }
        if (!node.left && !node.right) {
            arr.push(node.val);
        }
        rec(node.left, arr);
        rec(node.right, arr);
    }
