function reverseInteger(int) {
  let min = -(2**31);
  let max = 2**31 - 1;
  let sign = int < 0 ? '-' : '+';
  let reversed = Number(sign + [...String(Math.abs(int))].reverse().join(''));
  reversed = reversed <= max && reversed >= min ? reversed : 0;
  return reversed;
}