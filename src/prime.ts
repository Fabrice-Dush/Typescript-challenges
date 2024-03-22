type Numbers = number[];

const isPrime = function (arr: Numbers): Numbers {
  let primeArr: Numbers = [];
  for (let i: number = 0; i < arr.length; i++) {
    let count: number = 0;
    for (let j: number = arr[i]; j >= 1; j--) {
      if (arr[i] % j === 0) count = count + 1;
    }
    if (count === 2) primeArr.push(arr[i]);
  }

  return primeArr;
};
console.log(isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
