import hammingWeight from './number-of-1-bits';

describe(hammingWeight, () => {
  it('returns 0 for 0', () => {
    expect(hammingWeight(0)).toBe(0);
  });

  it('returns 32 for 2**32 - 1', () => {
    expect(hammingWeight(2**32 - 1)).toBe(32);
  });

  it('returns 3 for 11 (0b1011)', () => {
    expect(hammingWeight(11)).toBe(3);
  });

  it('returns 31 for 2**31 - 1',  () => {
    expect(hammingWeight(2**31 - 1)).toBe(31);
  });
});
