function isValid(str) {
  let stack = [];
  let valid = true;

  function hasMatchingOpeningParen (closing) {
    let opening = stack.pop();

    if ((opening === '(' && closing === ')') || 
        (opening === '[' && closing === ']') || 
        (opening === '{' && closing === '}')) {
      return true;
    } else {
      return false;
    }
  }

  for (let paren of str) {
    switch(paren) {
      case '(': case '[': case '{':
        stack.push(paren);
        break;
      case ')': case ']': case '}':
        // compare if has matching opening parenthesis
        valid = valid && hasMatchingOpeningParen(paren);
        break;
    }
  }

  return stack.length === 0 && valid;
}

module.exports = {
  isValid,
};