"use strict";
const isPrime = function (arr) {
    let primeArr = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = arr[i]; j >= 1; j--) {
            if (arr[i] % j === 0)
                count = count + 1;
        }
        if (count === 2)
            primeArr.push(arr[i]);
    }
    return primeArr;
};
console.log(isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
