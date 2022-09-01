function longestCommonPrefix (strArr) {
  let prefix = '';
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr.every(str => str[i] === strArr[0][i])) {
        prefix += strArr[0][i];
    } else {
        break;
    }
  }
  return prefix;
}