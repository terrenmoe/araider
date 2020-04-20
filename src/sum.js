/**
 * @func sum N-ary summation through reduce
 * @param {number[]} arr=[]
 * @default an array with a zero
 * @return the total of the arrays numerical values.
 */
module.exports = function sum(arr = [0]) {
  if (!Array.isArray(arr)) throw new Error('Takes an argument of the type Array');
  return Array.of(arr.reduce((acc, val) => acc + val));
};
