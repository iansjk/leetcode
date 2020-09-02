const PRIMALITY = new Map<number, boolean>();

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  if (PRIMALITY.has(n)) {
    return PRIMALITY.get(n) as boolean;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      PRIMALITY.set(n, false);
      return false;
    }
  }
  PRIMALITY.set(n, true);
  return true;
}

export function countPrimes(n: number): number {
  if (n <= 2) {
    return 0;
  }
  let count = 0;
  for (let i = n; i > 2; i--) {
    if (isPrime(i - 1)) {
      count++;
    }
  }
  return count;
}
