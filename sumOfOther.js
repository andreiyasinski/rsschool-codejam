let sumOfOther = (arr) => {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

  return arr.map(item => sum - item);
}



console.log(sumOfOther([2, 3, 4, 1]));
console.log(sumOfOther([1, 2, 5, 6, 6, 8]));
