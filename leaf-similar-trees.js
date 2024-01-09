/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
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
    const a1 = [];
    const a2 = []
    rec(root1, a1);
    rec(root2, a2);
    return a1.toString() === a2.toString();
};
