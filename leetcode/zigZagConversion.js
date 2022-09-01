function zigZagConversion (str, numRows) {

  if (numRows === 1) {
    return str;
  }

  let rows = new Array(numRows);

  let currentRow = 0;
  let delta = 1;

  for (let i = 0; i < str.length; i++) {

    rows[currentRow] = rows[currentRow] || [];

    if (currentRow === 0) {
      delta = 1;
    } else if (currentRow === rows.length - 1) {
      delta = -1;
    }

    rows[currentRow].push(str[i]);
    currentRow += delta;
  }

  return rows.flat().join('');
}