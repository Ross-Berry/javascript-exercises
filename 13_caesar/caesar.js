const caesar = function (str, fac) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[,\s.!]/) === null) {
      let temp = str.charCodeAt(i);

      if (fac > 0) {
        for (let j = fac; j > 0; j--) {
          if (temp >= 97) {
            if (temp < 122) {
              temp += 1;
            } else {
              temp = 97;
            }
          }
          if (temp < 97) {
            if (temp < 90) {
              temp += 1;
            } else {
              temp = 65;
            }
          }
        }
      }
      if (fac < 0) {
        for (let j = fac; j < 0; j++) {
          if (temp >= 97) {
            if (temp > 97) {
              temp -= 1;
            } else {
              temp = 122;
            }
          }
          if (temp < 97) {
            if (temp > 65) {
              temp -= 1;
            } else {
              temp = 90;
            }
          }
        }
      }
      output += String.fromCharCode(temp);
    } else {
      output += str[i];
    }
  }
  return output;
  //   const ALPHA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //   for (let i = 0; i < str.length; i++) {
  //     let char = str[i];

  //   }
};

// Do not edit below this line
module.exports = caesar;
