var sortedListToBST = function (head) {
    const listtoarr = (head) => {
        let stack = [];
        while (head) {
            stack.push(head.val);
            head = head.next;
        }
        return stack;
    }
    let arrayfromlist = listtoarr(head);
    const dfs = (left, right) => {
        if (left > right) return null;
        let mid = ~~((left + right) / 2);
        let newnode = new TreeNode(arrayfromlist[mid]);
        newnode.left = dfs(left, mid - 1);
        newnode.right = dfs(mid + 1, right);
        return newnode;
    }
    return dfs(0, arrayfromlist.length - 1);
};
                                                                        
