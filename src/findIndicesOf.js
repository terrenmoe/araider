/**
 * @func finds all values in an array
 * @param {*[]} arr=[] -
 * @param  Array of vals to find indices from within and the val to test each in the array
 * @return An array of the indices who's val matches the val arg
 */
module.exports = function findIndicesOf(arr = [], val = '') {
  if (arr.length === 0) {
    throw new Error(`
      First takes an argument of the type Array
      Second takes an argument of any type you seek from the Array
    `);
  }
  const indices = [];
  let idx = arr.indexOf(val);
  while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(val, idx + 1);
  }
  return indices;
};
