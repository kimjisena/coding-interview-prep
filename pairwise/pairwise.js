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

pairwise([1,4,2,3,0,5], 7); // => 11

pairwise([1, 1, 1], 2); // => 1

pairwise([0, 0, 0, 0, 1, 1], 1); // => 10