type arr = number[];

const reverseArray = function (arr: arr): arr {
  return [...arr].reverse();
};
console.log(reverseArray([1, 2, 3, 5]));

export default reverseArray;
