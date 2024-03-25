"use strict";
const isPalindrome = function (str) {
    //prettier-ignore
    const exceptions = ["?", "!", ".", "(", ")", ",", "/", ":", " ", ";", "'"];
    exceptions.forEach(exception => {
        str = str.replaceAll(exception, '');
    });
    const temp = str.toLowerCase();
    str = str.toLowerCase().split('').reverse().join('');
    return str === temp;
};
console.log(isPalindrome('aba'));
console.log(isPalindrome('fab'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
