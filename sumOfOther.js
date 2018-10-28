let sumOfOther = (arr) => {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

  return arr.map(item => sum - item);
}

module.exports = sumOfOther; 