// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
var maxDepth = function(root) {
  if (root == null) return 0;
  
  if (root.left == null && root.right == null) return 1;

  if (root.left == null) return maxDepth(root.right) + 1;
  if (root.right == null) return maxDepth(root.left) + 1;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};