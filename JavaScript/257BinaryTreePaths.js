// https://leetcode.com/problems/binary-tree-paths/

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  return binaryTreeRecursive(root, "");
};

var binaryTreeRecursive = function(root, str) {
  if (root == null) return [];

  if (root.left == null && root.right == null) {
    return [str+root.val];
  }

  if (root.left == null) return binaryTreeRecursive(root.right, str+root.val+"->");

  if (root.right == null) return binaryTreeRecursive(root.left, str+root.val+"->");

  return binaryTreeRecursive(root.left, str+root.val+"->").concat(binaryTreeRecursive(root.right, str+root.val+"->"));
}