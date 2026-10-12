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
 * @return {number[][]}
 */
var lowestCommonAncestor = function(root,p,q) {
    let current = root;
    while(current){
        if(p.val < current.val && q.val < current.val){
            current = current.left;
        }
        else if(p.val > current.val && q.val > current.val){
            current = current.right;
        }
        else{
            return current;
        }
    }
    
    
};