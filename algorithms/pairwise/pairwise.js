function pairwise(arr, arg) {
  let sumPairs = 0;
  let usedIdx = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (usedIdx.has(i)) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (usedIdx.has(j)) continue;

      if (arr[i] + arr[j] === arg) {
        sumPairs += (i + j);
        usedIdx.add(i);
        usedIdx.add(j);
        break;
      }
    }
  }

  return sumPairs;
}
