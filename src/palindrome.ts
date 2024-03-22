const isPalindrome = function (str: string): boolean {
  const temp: string = str;
  str = str.split('').reverse().join('');
  return str === temp;
};
console.log(isPalindrome('aba'));
console.log(isPalindrome('fab'));
