"use strict";
const isPalindrome = function (number) {
    const temp = number;
    let sum = 0;
    while (number !== 0) {
        const rem = number % 10;
        sum = sum * 10 + rem;
        number = Math.floor(number / 10);
        console.log(number);
    }
    if (sum === temp)
        return true;
    else
        return false;
};
console.log(isPalindrome(123));
console.log(isPalindrome(111));
console.log(isPalindrome(343));
