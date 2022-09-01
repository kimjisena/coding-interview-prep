function maxAreaContainer(arr) {
  let x, y, area = 0;

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      x = j - i;
      y = Math.min(arr[i], arr[j]);
      area = x * y > area ? x * y : area;
    }
  }

  return area;
}