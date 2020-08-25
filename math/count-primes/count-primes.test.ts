import { countPrimes } from './count-primes';

describe('countPrimes(n) returns the # of primes strictly less than n', () => {
    it('should return 0 for inputs 0-2', () => {
        for (let i = 0; i <= 2; i++) {
            expect(countPrimes(i)).toBe(0);
        }
    });

    it('should handle a negative number', () => {
        expect(countPrimes(-1)).toBe(0);
    });

    it('should return 1 for input 3', () => {
        expect(countPrimes(3)).toBe(1);
    });

    it('should return 2 for input 4', () => {
        expect(countPrimes(4)).toBe(2); // 2, 3 are primes < 4
    });

    it('should return 4 for input 10', () => {
        expect(countPrimes(10)).toBe(4); // 2, 3, 5, 7 are primes < 10
    });
});
