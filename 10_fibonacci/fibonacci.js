const fibonacci = function (n) {
  let x = 1;
  let y = 1;
  let fib;

  if (n <= 0) {
    return "OOPS";
  }

  if (n <= 2) {
    return 1;
  }

  for (let i = 0; i < n - 2; i++) {
    fib = x + y;
    x = y;
    y = fib;
  }

  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
