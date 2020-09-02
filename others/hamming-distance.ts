/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.
*/
export default function hammingDistance(x: number, y: number): number {
  const xorArray = [...(x ^ y).toString(2)];
  const distance = xorArray
    .map((char) => parseInt(char))
    .reduce((prev, curr) => {
      return (curr === 1) ? prev + 1 : prev;
    }, 0);
  return distance;
}
