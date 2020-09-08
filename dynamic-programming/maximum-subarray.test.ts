import { maxSubArray } from './maximum-subarray';
/* 
  Constraints:

  1 <= nums.length <= 2 * 10^4
  -2^31 <= nums[i] <= 2^31 - 1 
*/

describe(maxSubArray, () => {
  it('returns the element of a singleton', () => {
    expect(maxSubArray([0])).toBe(0);
    expect(maxSubArray([-(2 ** 31)])).toBe(-(2 ** 31));
    expect(maxSubArray([2 ** 31 - 1])).toBe(2 ** 31 - 1);
  });

  it('returns the greater element of a doubleton', () => {
    expect(maxSubArray([2 ** 31 - 1, -(2 ** 31)])).toBe(2 ** 31 - 1);
    expect(maxSubArray([-(2 ** 31), 2 ** 31 - 1])).toBe(2 ** 31 - 1);
  });

  it('returns 6 for [-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
