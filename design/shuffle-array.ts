/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
export default class Solution {
  original: number[];

  constructor(nums: number[]) {
    this.original = nums;
  }

  reset(): number[] {
    return this.original;
  }

  shuffle(): number[] {
    const elements = [...this.original];
    let index = 0;
    const shuffled = [];
    while (elements.length > 0) {
      const nextIndex = Math.floor(Math.random() * elements.length);
      // eslint-disable-next-line prefer-destructuring, no-plusplus
      shuffled[index++] = elements.splice(nextIndex, 1)[0];
    }
    return shuffled;
  }
}
