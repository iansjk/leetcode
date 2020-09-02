/*
Write a function that takes an unsigned integer and return the 
number of '1' bits it has (also known as the Hamming weight).
*/

/**
 * @param {number} n - a positive integer
 * @return {number} the number of '1' bits in the binary 
 *                  representation of n
 */
export default function hammingWeight(n: number): number {
  return [...n.toString(2)]
    .map((char) => parseInt(char))
    .reduce((a, b) => a + b);
}
