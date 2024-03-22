const isPrime = function (number: number): boolean {
  let count: number = 0;
  if (number === 1 || number < 1) return false;
  for (let i: number = number; i >= 1; i--) {
    if (number % i === 0) count = count + 1;
  }
  if (count === 2) return true;
  else return false;
};
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(6));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(23));
console.log(isPrime(31));
