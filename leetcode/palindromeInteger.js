function isPalindrome(int) {
  let numStr = String(int);
  return numStr === [...numStr].reverse().join('');
}

function isPalindrome2(int) {
  if (int < 0) {
    return false;
  }

  let reversed = 0;
  let num = int;
  let digit;
  while(num) {
    // expose the next digit
    digit = num % 10;
    // update reversed
    reversed = (reversed * 10) + digit;
    // update num
    num = Math.floor(num / 10);
  }

  return reversed === int;
}