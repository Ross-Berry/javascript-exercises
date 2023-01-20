const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue = 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(num, pow) {
	return num**pow;
};

const factorial = function(int) {
  let factorial = 1;
  
  if (int === 0) {
    return factorial;
  } else {
    for (let i = 2; i <= int; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
