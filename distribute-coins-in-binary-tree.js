var distributeCoins = function (root) {
    let moves = 0;
    var dfs = (root) => {
        if (root === null) return 0;
        let left = dfs(root.left)
        let right = dfs(root.right);
        moves += Math.abs(left) + Math.abs(right);
        return root.val + left + right - 1
    }
    dfs(root);
    return moves
};
