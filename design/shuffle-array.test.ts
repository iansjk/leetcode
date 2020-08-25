import Solution from './shuffle-array';

describe(Solution, () => {
    it('accepts an array of numbers', () => {
        new Solution([]);
        new Solution([1, 2, 3]);
    });

    it('shuffles nothing for lengths 0-1', () => {
        let s = new Solution([]);
        expect(s.shuffle()).toBeArrayOfSize(0);
        s = new Solution([5]);
        const shuffled = s.shuffle();
        expect(shuffled.length).toBe(1);
        expect(shuffled).toContain(5);
    });

    it('it can shuffle without length changing', () => {
        const s = new Solution([1, 2, 3]);
        const shuffled = s.shuffle();
        expect(shuffled).toIncludeSameMembers([1, 2, 3]);
        expect(shuffled.length).toBe(3);
    });

    it('it can reset after shuffling', () => {
        const original = [1, 2, 3];
        const s = new Solution(original);
        s.shuffle();
        const afterReset = s.reset();
        expect(afterReset).toSatisfyAll((elem) => {
            return original.indexOf(elem) === afterReset.indexOf(elem);
        });
    });
});
