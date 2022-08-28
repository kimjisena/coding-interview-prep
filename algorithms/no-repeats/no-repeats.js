function permAlone(str) {

  function permute(str) {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, idx) => {
          
          let perm = permute(str.slice(0, idx) + str.slice(idx + 1)).flatMap(val => {
            let result = letter + val;
            for (let i = 0; i < result.length; i++) {
              if (result[i] === result[i + 1]) return [];
            }
            return result;
          });
  
          return acc.concat(perm);
        }, []
      );
  }

  return permute(str).length;
}