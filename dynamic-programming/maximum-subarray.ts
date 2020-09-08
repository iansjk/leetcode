/** 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 
 * This solution was my first attempt but failed the time criterion (which I expected).
 * It runs in O(N^2) time but the problem should be solved in O(N).
 */
export function maxSubArraySquaredTime(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const lastElementSubarrayResults = [];
  for (let i = 0; i < nums.length; i++) {
    const subarraySum = nums.slice(i).reduce((a, b) => a + b);
    lastElementSubarrayResults.push(subarraySum);
  }
  lastElementSubarrayResults.push(maxSubArraySquaredTime(nums.slice(0, nums.length - 1)));
  return Math.max(...lastElementSubarrayResults);
}

/**
 * This was after looking up some solutions.
 * The key point that I missed was that there is no need to check all of the possible
 * subarrays leading up to i, just whatever had the greatest value among them.
 * So I was still checking too much despite the recursive call.
 * 
 * This runs in O(N) time.
 */
export function maxSubArray(nums: number[]): number {
  const maxSubArrayByLen = Array(nums.length);
  maxSubArrayByLen[0] = nums[0];
  let maxSubArrayValue = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxSubArrayByLen[i] = nums[i] + Math.max(0, maxSubArrayByLen[i - 1]);
    maxSubArrayValue = Math.max(maxSubArrayValue, maxSubArrayByLen[i]);
  }
  return maxSubArrayValue;
}
