type arr = number[];

const reverseArr = function (numberArr: arr): arr {
  let temp: number;
  const length = numberArr.length - 1;
  for (let i = 0; i < Math.floor(numberArr.length / 2); i++) {
    temp = numberArr[i];
    numberArr[i] = numberArr[length - i];
    numberArr[numberArr.length - i - 1] = temp;
  }
  return numberArr;
};
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArr([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
