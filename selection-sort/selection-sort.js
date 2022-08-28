function selectionSort(array) {
  // Only change code below this line
  sortingLoop: for (let i = 0; i < array.length; i++) {
    let temp, k = i;
    selectionLoop: for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[k]) {
        k = j;
      }
    }
    temp = array[k];
    array[k] = array[i];
    array[i] = temp;
  }
  
  return array;
  // Only change code above this line
}