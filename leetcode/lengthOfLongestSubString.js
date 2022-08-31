function lengthOfLongestSubString (str) {
  let max = 0;
  let substr = new Set();
  
  for (let char of str) {
    if(substr.has(char)) {
      max = substr.size > max ? substr.size : max;
      substr.clear();
    }
    substr.add(char);
  }

  return max;
}