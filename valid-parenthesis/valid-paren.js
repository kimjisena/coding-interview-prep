function isValid(str) {
  let stack = [];
  let valid = true;

  function hasMatch (closing) {
    let opening = stack.pop();

    return (
      (opening === '(' && closing === ')') || 
      (opening === '[' && closing === ']') || 
      (opening === '{' && closing === '}') || false
      );
  }

  for (let paren of str) {
    switch(paren) {
      case '(': case '[': case '{':
        stack.push(paren);
        break;
      case ')': case ']': case '}':
        // compare if closing paren has matching opening paren
        valid = valid && hasMatch(paren);
        break;
    }
  }

  return stack.length === 0 && valid;
}

module.exports = {
  isValid,
};