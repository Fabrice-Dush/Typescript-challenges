type Arr = number[];

const reverseArray = function (arr: Arr): Arr {
  return [...arr].reverse();
};
console.log(reverseArray([1, 2, 3, 5]));
