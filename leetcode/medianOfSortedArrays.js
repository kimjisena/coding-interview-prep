function medianOfSortedArray (arr1, arr2) {
  let merged = [...arr1, ...arr2].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  let median = 0;

  if (merged.length % 2 === 0) {
    let i = Math.floor(merged.length / 2);
    let j = i - 1;
    median = (merged[i] + merged[j]) / 2;
  } else {
    median = merged[Math.floor(merged.length / 2)];
  }

  return median;
}