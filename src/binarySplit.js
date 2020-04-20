const sum = require('./sum');
/**
 * @func splits up an array
 * @param {number[]} arr=[]
 * @default Empty array
 * @returns Array of 2 sub-arrays where the input array has been divided amongst
 */
module.exports = function binarySplit(arr = []) {
  // const { even, length, } = stats(arr);
  const output = [...arr];
  const counts = new Map();
  const outputSet = new Set();
  arr.forEach((c1, i1) => {
    output.forEach((c2, i2) => {
      if (i1 === i2) return;
      const key = `${[c1, c2]}`;
      if (!outputSet.has(key)) outputSet.add(key);
      if (!counts.has(key)) {
        counts.set(key, 0);
        return;
      }
      counts.set(key, counts.get(key) + 1);
    });
  });
  return {
    uniquePairs: outputSet,
    duplicateCounts: counts,
    duplicateTotal: sum([...counts.values()])[0]
  };
};
