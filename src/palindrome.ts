const isPalindrome = function (str: string): boolean {
  //prettier-ignore
  const exceptions: string[] = ["?", "!", ".", "(", ")", ",", "/",":", " ", ";", "'"];
  exceptions.forEach(exception => {
    str = str.replaceAll(exception, '');
  });
  const temp: string = str.toLowerCase();
  str = str.toLowerCase().split('').reverse().join('');
  return str === temp;
};
console.log(isPalindrome('aba'));
console.log(isPalindrome('fab'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
