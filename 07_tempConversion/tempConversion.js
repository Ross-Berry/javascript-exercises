const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);

  if (celsius % 1 === 0) {
    return celsius;
  } else {
    return Number.parseFloat(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;

  if (fahrenheit % 1 === 0) {
    return fahrenheit;
  } else {
    return Number.parseFloat(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
