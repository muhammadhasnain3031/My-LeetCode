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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const sortedArray =[];
    function order(node){
        if(!node) return;
        order(node.left);
        sortedArray.push(node.val);
        order(node.right)

    }
    order(root);
    return sortedArray[k-1]
    
};