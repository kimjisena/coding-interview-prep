function updateInventory(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
      let idx = -1;

      let present = arr1.some((item, index) => {
        if (item[1] === arr2[i][1]) idx = index; 
        return item[1] === arr2[i][1];
      });

      if(present) {
        arr1[idx] = [arr1[idx][0] + arr2[i][0], arr1[idx][1]];
      } else {
        arr1.push(arr2[i]);
      }
  }

  return arr1.sort((a, b) => a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0);
}