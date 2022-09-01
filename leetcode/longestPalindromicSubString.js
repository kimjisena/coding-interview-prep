function longestPalindromicSubString (str) {
  const memo = {};

  const isPalindrome = (left, right) => {
    if (left === right) {
      return true;
    }

    for(let i = left; i <= Math.floor((left + right) / 2); i++) {
      if(str[i] !== str[right - i + left]) {
        return false;
      }
    }

    return true;
  }

  const helper = (left, right) => {
    if (left < right) {
      return '';
    }

    memo[left] = memo[left] || {};

    if (memo[left][right] !== undefined) {
      return memo[left][right];
    }
    if (isPalindrome(left, right)) {
      return str.substring(left, right + 1);
    }

    let leftSub = helper(left + 1, right);
    let rightSub = helper(left, right - 1);
    memo[left][right] = leftSub.length > rightSub.length ? leftSub : rightSub;
    return memo[left][right];
  }

  return helper(0, str.length - 1);

}