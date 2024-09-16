// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Language: JavaScript

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [], index1 = 0, index2 = 0;
    for (let i = 0; i < nums1.length+nums2.length; i++) {
      if (nums1[index1] < nums2[index2] 
          || index2 == nums2.length) {
        arr.push(nums1[index1]);
        index1++;
      } else {
        arr.push(nums2[index2]);
        index2++;
      }
    }

    if (arr.length % 2 == 0) {
      return (arr[arr.length/2] +  arr[arr.length/2-1]) / 2;
    }

    return arr[Math.floor(arr.length/2)];
};