var maxAncestorDiff = function (root) {
    let diff = 0;
    if (!root) return 0;
    const stack = [[root, root.val, root.val]];
    while (stack.length > 0) {
        let [node, currMax, currMin] = stack.pop();
        //do your operation
        currMax = Math.max(currMax, node.val);
        currMin = Math.min(currMin, node.val);
        diff = Math.max(diff, currMax - currMin);
        if (node.right !== null) {
            stack.push([node.right, currMax, currMin]);
        }
        if (node.left !== null) {
            stack.push([node.left, currMax, currMin]);
        }
    }
    return diff;
};
