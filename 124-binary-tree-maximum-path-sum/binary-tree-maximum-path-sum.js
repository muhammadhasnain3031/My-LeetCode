/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let globalMax = -Infinity;
    function getGain(node){
        if(node === null) return 0;
        let leftGain = Math.max(getGain(node.left),0);
        let rightGain = Math.max(getGain(node.right),0);
        let currentMax = node.val + leftGain + rightGain;
        globalMax = Math.max(currentMax, globalMax);
        return node.val + Math.max(leftGain,rightGain)
    }
    getGain(root);
    return globalMax;
};