"use strict";
const checkMajorityEl = function (arr) {
    let majority;
    for (let i = 0; i < arr.length; i++) {
        const majorityArr = arr.filter(value => value === arr[i]);
        if (majorityArr.length > arr.length / 2) {
            majority = majorityArr.at(0);
            break;
        }
    }
    return typeof majority === 'number'
        ? majority
        : 'There is no majority element';
};
console.log(checkMajorityEl([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));
console.log(checkMajorityEl([3, 1, 3, 4, 4, 1]));
console.log(checkMajorityEl([4, 1, 5, 6]));
