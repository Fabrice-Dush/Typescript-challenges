"use strict";
const isPalindrome = function (str) {
    const temp = str;
    str = str.split('').reverse().join('');
    return str === temp;
};
console.log(isPalindrome('aba'));
console.log(isPalindrome('fab'));
