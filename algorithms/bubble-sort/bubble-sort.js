function bubbleSort(array) {
  // Only change code below this line
  pickingLoop: for(let i = 0; i < array.length; i++) {
    bubblingLoop: for (let j = i + 1; j < array.length; j++) {
      let temp;
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  
  return array;
  // Only change code above this line
}