function mergeSort(array) {
  // Only change code below this line
  function merge(arr1, arr2) {
    let merged = [];
  
    while(arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        merged.push(arr1.shift());
      } else {
        merged.push(arr2.shift());
      }
    }
    return [...merged, ...arr1, ...arr2];
  }

  if(array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
  // Only change code above this line
}