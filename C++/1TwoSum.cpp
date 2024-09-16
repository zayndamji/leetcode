// https://leetcode.com/problems/two-sum/
// Language: C++

#include "vector"

class Solution {
public:
  std::vector<int> twoSum(std::vector<int>& nums, int target) {
    int iSize = nums.size()-1;
    for (int i = 0; i < iSize; i++) {
      int jSize = nums.size();
      for (int j = i + 1; j < jSize; j++) {
        if (nums[i] + nums[j] == target) {
          return std::vector<int>{i, j};
        }
      }
    }

    return std::vector<int>{};
  }
};