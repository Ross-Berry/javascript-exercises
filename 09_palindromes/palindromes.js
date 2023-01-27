const palindromes = function (str) {
  const punc = new RegExp(/[!\s,.']/g);
  const newStr = str.replace(punc, "").toLowerCase();
  const palindrome = newStr.split("").reverse().join("");

  if (palindrome === newStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
