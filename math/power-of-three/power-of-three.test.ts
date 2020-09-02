import isPowerOfThree from './power-of-three';

const POWERS = new Set([3, 9, 27, 81, 243]);
describe(isPowerOfThree, () => {
  it('should return false for 0', () => {
    expect(isPowerOfThree(0)).toBeFalsy();
  });

  it('should return true for 1', () => {
    expect(isPowerOfThree(1)).toBeTruthy();
  });

  it('should return true for 3^[1~4]', () => {
    POWERS.forEach((power) => {
      expect(isPowerOfThree(power)).toBeTruthy();
    });
  });

  it('should return false for multiples of 3 that are not powers', () => {
    for (let i = 3; i <= 300; i *= 3) {
      expect(isPowerOfThree(i)).toEqual(POWERS.has(i));
    }
  });
});
