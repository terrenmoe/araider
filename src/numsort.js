/**
 * @func numeric sort array cb function
 * @param {number[]} arr=[]
 * @default Empty array
 * @returns the sorted array or blank array literal on error
 */
module.exports = function numsort(arr = []) {
  arr.sort((a, b) => a - b);
  return arr;
};
