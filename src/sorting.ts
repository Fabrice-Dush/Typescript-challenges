const removePrimeNumber = function (arr: number[]): number[] {
  //? Removing prime numbers
  let numbers: number[] = [];
  arr.forEach((number, i, arr2): void => {
    let count = 0;
    for (let i: number = number; i >= 1; i--) {
      if (number % i === 0) count = count + 1;
    }

    if (count !== 2) numbers.push(number);
  });
  return numbers;
};

const sort = function (arr: number[]): number[] {
  //? Sorting
  const numbers: number[] = removePrimeNumber(arr);
  if (numbers.length === 0) return [];
  for (let i = 0; i < numbers.length; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (numbers[j] > numbers[max]) max = j;
    }
    const temp = numbers[i];
    numbers[i] = numbers[max];
    numbers[max] = temp;
  }
  return numbers;
};
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sort([11, 13, 17, 29]));
