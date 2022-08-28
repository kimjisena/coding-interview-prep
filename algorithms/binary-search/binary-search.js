function binarySearch(searchList, value) {
  let arrayPath = [];

  function helper (list, value) {
    let mid = Math.floor((list.length - 1)/ 2);
    arrayPath.push(list[mid]);
    if(value === list[mid] ) {
      return arrayPath;
    } else if(value < list[mid]) {
      list = list.slice(0, mid);
      return helper(list, value);
    } else if(value > list[mid]) {
      list = list.slice(mid + 1);
      return helper(list, value);
    } else {
      return 'Value Not Found';
    }
  }
  
  return helper(searchList, value);
}