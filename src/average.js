const stats = require('./stats');
const sum = require('./sum');
/**
 * @func averages arrays
 * @param {number[]} arr=[]
 * @default Empty Array
 * @returns the average of the array or blank array literal on error
 */
function average(arr = []) {
  const { length } = stats(arr);
  const [total] = sum(arr);
  const avg = total / length;
  if (Number.isNaN(avg)) {
    throw new Error('Takes an argument of the type Array');
  }
  return [avg];
}

module.exports = average;
