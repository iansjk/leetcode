export default function isPowerOfThree(n: number): boolean {
  // base cases
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }

  // divmod
  if (n % 3 !== 0) {
    return false;
  }
  return isPowerOfThree(n / 3);
}
