import maxProfit from './best-time-to-buy-sell-stock';

describe(maxProfit, () => {
  it('returns 0 for an empty or singleton list', () => {
    expect(maxProfit([])).toBe(0);
    expect(maxProfit([10])).toBe(0);
  });

  it('returns 0 for a list in descending order', () => {
    expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
  });

  it('returns 10 for a list [1..11]', () => {
    expect(maxProfit(Array(11).fill(0).map((_, i) => i + 1))).toBe(10);
  });

  it('returns 5 for the example [7,1,5,3,6,4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('returns 2 for [2,1,2,1,0,1,2]', () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toBe(2);
  });

  it('returns 8 for [1,9,0,5]', () => {
    expect(maxProfit([1, 9, 0, 5])).toBe(8);
  });
});
