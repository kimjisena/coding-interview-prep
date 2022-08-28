function quickSort(array) {
  // Only change code below this line
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  let pivotIdx = Math.floor(Math.random() * array.length);
  let left = [], right = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIdx) continue;

    if (array[i] > array[pivotIdx]) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  array = left.concat([array[pivotIdx]]).concat(right);
  return array;
  // Only change code above this line
}