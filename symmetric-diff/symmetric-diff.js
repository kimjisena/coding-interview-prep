function sym(...args) {
  let a = args[0];
  let b = args[1];
  let diff;

  for(let i = 2; i <= args.length; i++) {
    diff = a.filter(member => !(b.some(element => element === member))).concat(b.filter(element => !(a.some(member => member === element))));
    a = diff;
    b = args[i];
  }

  return [...(new Set(diff))];
}

module.exports = {
  sym,
}