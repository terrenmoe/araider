// 3rd-party imports
// const { isNullOrUndefined } = require('util');

/**
 * @func stats
 * @desc A function for find the stats of an array
 * @param {*[]} arr=[] - An array to determine the stats of
 * @param {Object} stats - The obj to return with the stats to the array given
 * @param {boolean} stats.isEvenLength=false - true if length is even, false if odd
 * @param {number} stats.last=0 - the index of array length minus 1
 * @param {number} stats.length=1 - the length of the array at the time of the function call
 * @param {Object} stats.midIdx={} - the midIdx takes a shape dependant on the isEvenLength value
 * @param {number} stats.midIdx.low - the low middle index only used if length is odd
 * @param {number} stats.midIdx.mid - the middle index only used if the length is even
 * @param {number} stats.midIdx.high - the high middle index only used if the length is odd
 *
 *
 * @example <caption>Destructuring the return of a stats call:</caption>
 *   const { isEvenLength, length, midIdx, last } = stats([...someValues]))
 */
function stats(
  arr = [],
  stater = {
    'isEvenLength': false,
    'last': 0,
    'length': 1,
    'midIdx': {}
  }
) {
  const { length } = (arr.length < 1) ? stater : arr;
  const isEvenLength = length % 2 === 0;
  const midIdx = (isEvenLength)
    ? {
      'low': Math.floor((1 + length) / 2) - 1,
      'high': Math.ceil((1 + length) / 2) - 1
    }
    : { 'mid': ((length + 1) / 2) - 1 };
  const last = length - 1;
  return {
    isEvenLength,
    length,
    midIdx,
    last
  };
}

module.exports = stats;
