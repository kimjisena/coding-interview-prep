function insertionSort(array) {
  // Only change code below this line
  demarcationLoop: for (let i = 0; i < array.length; i++) {
    insertionLoop: for (let j = i + 1; j > 0; j--) {
      let temp;
      if (array[j] < array[j - 1]) {
        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
  // Only change code above this line
}