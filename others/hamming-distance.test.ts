import hammingDistance from './hamming-distance';

// input: 0 <= x < 2^31, 0 <= y < 2^31.

describe(hammingDistance, () => {
  it('returns 0 for two 0 inputs', () => {
    expect(hammingDistance(0, 0)).toBe(0);
  });

  it('returns 1 for f(0, <powers of 2>)', () => {
    expect(hammingDistance(0, 2**4)).toBe(1);
    expect(hammingDistance(0, 2**16)).toBe(1);
    expect(hammingDistance(0, 2**31)).toBe(1);
    expect(hammingDistance(2**4, 0)).toBe(1);
    expect(hammingDistance(2**16, 0)).toBe(1);
    expect(hammingDistance(2**31, 0)).toBe(1);
  });

  it('returns 0 for two identical inputs', () => {
    expect(hammingDistance(2**16 - 1, 2**16 - 1)).toBe(0);
  });

  // 2^31 - 1 = 0b1111111111111111111111111111111
  it('returns 31 for f(0, 2**31 - 1)', () => {
    expect(hammingDistance(0, 2**31 - 1)).toBe(31);
    expect(hammingDistance(2**31 - 1, 0)).toBe(31);
  });

  it('returns 30 for f(2**31 - 1, 2**30)', () => {
    // 2^31 - 1 = 0b 0111 1111 1111 1111 1111 1111 1111 1111
    // 2^30     = 0b 0100 0000 0000 0000 0000 0000 0000 0000
    expect(hammingDistance(2**31 - 1, 2**30)).toBe(30);
    expect(hammingDistance(2**30, 2**31 - 1)).toBe(30);
  });
});
