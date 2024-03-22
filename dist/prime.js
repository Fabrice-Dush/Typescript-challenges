"use strict";
const isPrime = function (arr) {
    let primeArr = [];
    // if (number === 1 || number < 1) return false;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = arr[i]; j >= 1; i--) {
            if (arr[i] % i === 0)
                ++count;
        }
        if (count === 2)
            primeArr.push(arr[i]);
    }
    return primeArr;
};
console.log(isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
