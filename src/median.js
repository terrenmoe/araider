const stats = require('./stats');
const numsort = require('./numsort');
const average = require('./average');
/**
 * @func Finds the median of odd-length arrays or the arthithmetic mean of the dual-medians
 * @param {number[]} arr=[]
 * @returns Median of the array
 */
module.exports = function median(arr = []) {
  const { even, 'midIdx': { low, mid, high } } = stats(arr);
  numsort(arr);
  if (even) { // if array length is even
    return average([arr[low], arr[high]]);
  }
  return arr[mid];
};
