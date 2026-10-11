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
 * @return {boolean}
 */
var isBalanced = function(root) {
   function check(node){
    if(node === null ) return 0;
   
   let leftH = check(node.left);
   let rightH = check(node.right);
   if(leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1){
    return -1
   }
   return Math.max(leftH, rightH ) +1;
};
return check(root) !== -1;
}